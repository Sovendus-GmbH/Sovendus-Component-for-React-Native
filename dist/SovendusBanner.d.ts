import React, { JSX } from "react";
interface SovendusCustomerData {
    salutation?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    yearOfBirth?: number | undefined;
    dateOfBirth?: string | undefined;
    street?: string | undefined;
    streetNumber?: string | undefined;
    zipcode?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
}
interface SovendusBannerProps {
    trafficSourceNumber: number;
    trafficMediumNumber: number;
    orderUnixTime?: number | undefined;
    sessionId?: string | undefined;
    orderId?: string | undefined;
    netOrderValue?: number | undefined;
    currencyCode?: string | undefined;
    usedCouponCode?: string | undefined;
    customerData?: SovendusCustomerData;
    customProgressIndicator?: JSX.Element;
    padding?: number;
    backgroundColor?: string;
}
declare const SovendusBanner: React.FC<SovendusBannerProps>;
export default SovendusBanner;
