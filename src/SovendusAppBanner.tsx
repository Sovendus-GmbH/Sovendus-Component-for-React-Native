import React, { useState, useRef } from "react";
import { View, ActivityIndicator } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { Linking } from "react-native";
import { SovendusBannerProps } from "./SovendusBanner";



export const SovendusAppBanner: React.FC<SovendusBannerProps> = ({
  trafficSourceNumber,
  trafficMediumNumber,
  orderUnixTime,
  sessionId,
  orderId,
  netOrderValue,
  currencyCode,
  usedCouponCode,
  customerData,
  customProgressIndicator,
  padding = 0,
  backgroundColor = "#fff",
}) => {
  const [webViewHeight, setWebViewHeight] = useState<number>(348);
  const [doneLoading, setDoneLoading] = useState<boolean>(false);
  const webViewRef = useRef<WebView>(null);

  const versionNumber = "1.2.4";

  const sovendusHtml = `
    <!DOCTYPE html>
    <html>
        <head>
          <meta name="viewport" content="initial-scale=1" />
        </head>
        <body id="body" style="padding: ${padding}px; background-color: ${backgroundColor}">
            <div id="sovendus-voucher-banner"></div>
            <div id="sovendus-checkout-benefits-banner"></div>
            <script type="text/javascript">
                const _body = document.getElementById("body");
                new ResizeObserver(() => {
                    window.ReactNativeWebView.postMessage("height" + _body.clientHeight);
                }).observe(_body);
                window.sovApi = "v1";
                window.addEventListener("message", (event) => {
                  if (event.data.channel === "sovendus:integration") {
                    window.ReactNativeWebView.postMessage("openUrl" + event.data.payload.url);
                  }
                });
                window.sovIframes = [];
                window.sovIframes.push({
                    trafficSourceNumber: "${trafficSourceNumber}",
                    trafficMediumNumber: "${trafficMediumNumber}",
                    iframeContainerId: "sovendus-voucher-banner",
                    timestamp: "${orderUnixTime}",
                    sessionId: "${sessionId}",
                    orderId: "${orderId}",
                    orderValue: "${netOrderValue}",
                    orderCurrency: "${currencyCode}",
                    usedCouponCode: "${usedCouponCode}",
                    integrationType: "react-native-${versionNumber}",
                });
                window.sovConsumer = {
                    consumerSalutation: "${customerData?.salutation ?? ""}",
                    consumerFirstName: "${customerData?.firstName ?? ""}",
                    consumerLastName: "${customerData?.lastName ?? ""}",
                    consumerEmail: "${customerData?.email ?? ""}",
                    consumerPhone : "${customerData?.phone ?? ""}",   
                    consumerYearOfBirth  : "${
                      customerData?.yearOfBirth ?? ""
                    }",   
                    consumerDateOfBirth  : "${
                      customerData?.dateOfBirth ?? ""
                    }",   
                    consumerStreet: "${customerData?.streetName ?? ""}",
                    consumerStreetNumber: "${customerData?.streetNumber ?? ""}",
                    consumerZipcode: "${customerData?.zipcode ?? ""}",
                    consumerCity: "${customerData?.cityName ?? ""}",
                    consumerCountry: "${customerData?.country ?? ""}",
                };
            </script>
            <script type="text/javascript" src="https://api.sovendus.com/sovabo/common/js/flexibleIframe.js" async=true></script>
        </body>
    </html>
  `;

  const handleMessage = (event: WebViewMessageEvent) => {
    const message = event.nativeEvent.data;
    if (message.startsWith("height")) {
      const newHeight = parseInt(message.replace("height", ""), 10);
      if (newHeight > 100 && newHeight !== webViewHeight) {
        setWebViewHeight(newHeight);
        setDoneLoading(true);
      }
    } else if (message.startsWith("openUrl")) {
      const url = message.replace("openUrl", "");
      openUrlInBrowser(url);
    }
  };

  const openUrlInBrowser = async (url: string) => {
    if (await Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  };

  return (
    <View style={{ height: webViewHeight }}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: sovendusHtml }}
        style={{ height: doneLoading ? webViewHeight : 1 }}
        onMessage={handleMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={false}
        onLoad={() => setDoneLoading(true)}
      />
      {!doneLoading && (
        <View
          style={{
            height: webViewHeight - 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {customProgressIndicator ? (
            customProgressIndicator
          ) : (
            <ActivityIndicator />
          )}
        </View>
      )}
    </View>
  );
};
