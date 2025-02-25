import React from 'react';
import { render, screen } from '@testing-library/react';
import GeolocationDisplay from '../GeolocationDisplay';

// Mock lucide-react
jest.mock('lucide-react', () => ({
  MapPin: () => <div data-testid="map-pin-icon" />,
}));

describe('GeolocationDisplay', () => {
  const mockGeolocationData = {
    country: 'US',
    countryName: 'United States',
    city: 'San%20Francisco',
    region: 'California'
  };

  it('renders the component with location data', () => {
    render(<GeolocationDisplay geolocationData={mockGeolocationData} />);
    
    // Check for the heading
    expect(screen.getByText('Your Location')).toBeInTheDocument();
    
    // Check for the map icon
    expect(screen.getByTestId('map-pin-icon')).toBeInTheDocument();
  });

  it('displays the correct location information', () => {
    render(<GeolocationDisplay geolocationData={mockGeolocationData} />);
    
    // Check for country display
    expect(screen.getByText(/Country:/)).toBeInTheDocument();
    expect(screen.getByText(/United States/)).toBeInTheDocument();
    expect(screen.getByText(/\(US\)/)).toBeInTheDocument();
    
    // Check for region display with proper formatting
    expect(screen.getByText(/Region:/)).toBeInTheDocument();
    expect(screen.getByText(/California/)).toBeInTheDocument();
    
    // Check for city display with proper formatting (spaces are properly decoded)
    expect(screen.getByText(/City:/)).toBeInTheDocument();
    expect(screen.getByText(/San Francisco/)).toBeInTheDocument();
  });

  it('renders the location disclaimer', () => {
    render(<GeolocationDisplay geolocationData={mockGeolocationData} />);
    
    expect(screen.getByText(/This information is based on your IP address/)).toBeInTheDocument();
  });

  it('handles encoded city and region names', () => {
    const encodedData = {
      country: 'UK',
      countryName: 'United Kingdom',
      city: 'New%20York%20City',
      region: 'New%20York'
    };
    
    render(<GeolocationDisplay geolocationData={encodedData} />);
    
    // Verify that spaces are decoded - use more specific queries to avoid ambiguity
    const cityText = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && 
             element.textContent?.includes('City:') && 
             element.textContent.includes('New York City');
    });
    expect(cityText).toBeInTheDocument();
    
    const regionText = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'p' && 
             element.textContent?.includes('Region:') && 
             element.textContent.includes('New York');
    });
    expect(regionText).toBeInTheDocument();
  });
});