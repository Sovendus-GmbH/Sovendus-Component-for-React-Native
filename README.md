# Sovendus Component for React Native

## Installation

To install the package, use your favorite package manager:

```bash
npm install sovendus-react-native
```

or

```bash
yarn add sovendus-react-native
```

## Use the component in your React Native App

Use the component on you checkout success / thank you page and make sure to pass all the required data:

[Click here for detailed information on the parameters and which ones are required.](https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Parameter)

```tsx
<SovendusBanner
  trafficSourceNumber={YOUR_TRAFFIC_SOURCE_NUMBER} // replace with your trafficSourceNumber
  trafficMediumNumber={YOUR_TRAFFIC_MEDIUM_NUMBER} // replace with your trafficMediumNumber
  orderId={"order-123"}
  netOrderValue={12.4}
  currencyCode={"EUR"}
  sessionId={"Session32323"}
  usedCouponCode={"TestVoucherCode"}
  orderUnixTime={Date.now()}
  customerData={
    salutation: "Mr.",
    firstName: "Test",
    lastName: "Tester",
    email: "test@sovendus.com",
    phone: "+49123456789",
    yearOfBirth: 199,
    dateOfBirth: "01.12.2020",
    street: "Streetname",
    streetNumber: "12",
    city: "Reisbach",
    zipcode: "94419",
    country: "DE",
  }
/>
```
