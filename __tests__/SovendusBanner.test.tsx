import React from 'react';
import { render } from '@testing-library/react-native';
import SovendusBanner from '../src/SovendusBanner';

describe('SovendusBanner', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<SovendusBanner 
      trafficSourceNumber={1}
      trafficMediumNumber={1}
      orderUnixTime={Date.now()}
      sessionId="test-session-id"
      orderId="test-order-id"
      netOrderValue={100}
      currencyCode="USD"
      usedCouponCode="TESTCOUPON"
    />);
    
    // Add assertions based on what the component is expected to render
    expect(getByText(/sovendus/i)).toBeTruthy(); // Example assertion
  });

  it('renders correctly with custom props', () => {
    const { getByText } = render(<SovendusBanner 
      trafficSourceNumber={2}
      trafficMediumNumber={2}
      orderUnixTime={Date.now()}
      sessionId="custom-session-id"
      orderId="custom-order-id"
      netOrderValue={200}
      currencyCode="EUR"
      usedCouponCode="CUSTOMCOUPON"
      padding={10}
      backgroundColor="#f0f0f0"
    />);
    
    // Add assertions based on what the component is expected to render
    expect(getByText(/sovendus/i)).toBeTruthy(); // Example assertion
  });
});