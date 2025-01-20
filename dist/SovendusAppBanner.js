"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SovendusAppBanner = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_webview_1 = __importDefault(require("react-native-webview"));
var react_native_2 = require("react-native");
var SovendusAppBanner = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var trafficSourceNumber = _a.trafficSourceNumber, trafficMediumNumber = _a.trafficMediumNumber, orderUnixTime = _a.orderUnixTime, sessionId = _a.sessionId, orderId = _a.orderId, netOrderValue = _a.netOrderValue, currencyCode = _a.currencyCode, usedCouponCode = _a.usedCouponCode, customerData = _a.customerData, customProgressIndicator = _a.customProgressIndicator, _p = _a.padding, padding = _p === void 0 ? 0 : _p, _q = _a.backgroundColor, backgroundColor = _q === void 0 ? "#fff" : _q;
    var _r = (0, react_1.useState)(348), webViewHeight = _r[0], setWebViewHeight = _r[1];
    var _s = (0, react_1.useState)(false), doneLoading = _s[0], setDoneLoading = _s[1];
    var webViewRef = (0, react_1.useRef)(null);
    var versionNumber = "1.2.4";
    var sovendusHtml = "\n    <!DOCTYPE html>\n    <html>\n        <head>\n          <meta name=\"viewport\" content=\"initial-scale=1\" />\n        </head>\n        <body id=\"body\" style=\"padding: ".concat(padding, "px; background-color: ").concat(backgroundColor, "\">\n            <div id=\"sovendus-voucher-banner\"></div>\n            <div id=\"sovendus-checkout-benefits-banner\"></div>\n            <script type=\"text/javascript\">\n                const _body = document.getElementById(\"body\");\n                new ResizeObserver(() => {\n                    window.ReactNativeWebView.postMessage(\"height\" + _body.clientHeight);\n                }).observe(_body);\n                window.sovApi = \"v1\";\n                window.addEventListener(\"message\", (event) => {\n                  if (event.data.channel === \"sovendus:integration\") {\n                    window.ReactNativeWebView.postMessage(\"openUrl\" + event.data.payload.url);\n                  }\n                });\n                window.sovIframes = [];\n                window.sovIframes.push({\n                    trafficSourceNumber: \"").concat(trafficSourceNumber, "\",\n                    trafficMediumNumber: \"").concat(trafficMediumNumber, "\",\n                    iframeContainerId: \"sovendus-voucher-banner\",\n                    timestamp: \"").concat(orderUnixTime, "\",\n                    sessionId: \"").concat(sessionId, "\",\n                    orderId: \"").concat(orderId, "\",\n                    orderValue: \"").concat(netOrderValue, "\",\n                    orderCurrency: \"").concat(currencyCode, "\",\n                    usedCouponCode: \"").concat(usedCouponCode, "\",\n                    integrationType: \"react-native-").concat(versionNumber, "\",\n                });\n                window.sovConsumer = {\n                    consumerSalutation: \"").concat((_b = customerData === null || customerData === void 0 ? void 0 : customerData.salutation) !== null && _b !== void 0 ? _b : "", "\",\n                    consumerFirstName: \"").concat((_c = customerData === null || customerData === void 0 ? void 0 : customerData.firstName) !== null && _c !== void 0 ? _c : "", "\",\n                    consumerLastName: \"").concat((_d = customerData === null || customerData === void 0 ? void 0 : customerData.lastName) !== null && _d !== void 0 ? _d : "", "\",\n                    consumerEmail: \"").concat((_e = customerData === null || customerData === void 0 ? void 0 : customerData.email) !== null && _e !== void 0 ? _e : "", "\",\n                    consumerPhone : \"").concat((_f = customerData === null || customerData === void 0 ? void 0 : customerData.phone) !== null && _f !== void 0 ? _f : "", "\",   \n                    consumerYearOfBirth  : \"").concat((_g = customerData === null || customerData === void 0 ? void 0 : customerData.yearOfBirth) !== null && _g !== void 0 ? _g : "", "\",   \n                    consumerDateOfBirth  : \"").concat((_h = customerData === null || customerData === void 0 ? void 0 : customerData.dateOfBirth) !== null && _h !== void 0 ? _h : "", "\",   \n                    consumerStreet: \"").concat((_j = customerData === null || customerData === void 0 ? void 0 : customerData.streetName) !== null && _j !== void 0 ? _j : "", "\",\n                    consumerStreetNumber: \"").concat((_k = customerData === null || customerData === void 0 ? void 0 : customerData.streetNumber) !== null && _k !== void 0 ? _k : "", "\",\n                    consumerZipcode: \"").concat((_l = customerData === null || customerData === void 0 ? void 0 : customerData.zipcode) !== null && _l !== void 0 ? _l : "", "\",\n                    consumerCity: \"").concat((_m = customerData === null || customerData === void 0 ? void 0 : customerData.cityName) !== null && _m !== void 0 ? _m : "", "\",\n                    consumerCountry: \"").concat((_o = customerData === null || customerData === void 0 ? void 0 : customerData.country) !== null && _o !== void 0 ? _o : "", "\",\n                };\n            </script>\n            <script type=\"text/javascript\" src=\"https://api.sovendus.com/sovabo/common/js/flexibleIframe.js\" async=true></script>\n        </body>\n    </html>\n  ");
    var handleMessage = function (event) {
        var message = event.nativeEvent.data;
        if (message.startsWith("height")) {
            var newHeight = parseInt(message.replace("height", ""), 10);
            if (newHeight > 100 && newHeight !== webViewHeight) {
                setWebViewHeight(newHeight);
                setDoneLoading(true);
            }
        }
        else if (message.startsWith("openUrl")) {
            var url = message.replace("openUrl", "");
            openUrlInBrowser(url);
        }
    };
    var openUrlInBrowser = function (url) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, react_native_2.Linking.canOpenURL(url)];
                case 1:
                    if (_a.sent()) {
                        react_native_2.Linking.openURL(url);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(react_native_1.View, { style: { height: webViewHeight } },
        react_1.default.createElement(react_native_webview_1.default, { ref: webViewRef, originWhitelist: ["*"], source: { html: sovendusHtml }, style: { height: doneLoading ? webViewHeight : 1 }, onMessage: handleMessage, javaScriptEnabled: true, domStorageEnabled: true, scrollEnabled: false, onLoad: function () { return setDoneLoading(true); } }),
        !doneLoading && (react_1.default.createElement(react_native_1.View, { style: {
                height: webViewHeight - 1,
                justifyContent: "center",
                alignItems: "center",
            } }, customProgressIndicator ? (customProgressIndicator) : (react_1.default.createElement(react_native_1.ActivityIndicator, null))))));
};
exports.SovendusAppBanner = SovendusAppBanner;
