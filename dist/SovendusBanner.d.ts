import React, { JSX } from "react";
export interface SovendusCustomerData {
    salutation?: "Mr." | "Mrs." | "" | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    yearOfBirth?: number | undefined;
    dateOfBirth?: string | undefined;
    streetName?: string | undefined;
    streetNumber?: string | undefined;
    zipcode?: string | undefined;
    cityName?: string | undefined;
    country?: string | undefined;
}
export interface SovendusBannerProps {
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
export declare const SovendusBanner: React.FC<SovendusBannerProps>;
