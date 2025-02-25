import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

// Mock React Icons
jest.mock('react-icons/gr', () => ({
  GrReactjs: () => <div data-testid="react-icon" />
}));

jest.mock('react-icons/si', () => ({
  SiJavascript: () => <div data-testid="js-icon" />,
  SiTailwindcss: () => <div data-testid="tailwind-icon" />,
  SiCsharp: () => <div data-testid="csharp-icon" />,
  SiNodedotjs: () => <div data-testid="nodejs-icon" />,
  SiOpenai: () => <div data-testid="openai-icon" />
}));

jest.mock('react-icons/tb', () => ({
  TbBrandNextjs: () => <div data-testid="nextjs-icon" />,
  TbBrandTypescript: () => <div data-testid="typescript-icon" />
}));

// Mock Sitecore logos
jest.mock('../../assets/logos/SitecoreLogo', () => {
  return () => <div data-testid="sitecore-logo" />;
});

jest.mock('../../assets/logos/SitecoreSearchLogo', () => {
  return () => <div data-testid="sitecore-search-logo" />;
});

jest.mock('../../assets/logos/SitecoreXMCLogo', () => {
  return () => <div data-testid="sitecore-xmc-logo" />;
});

jest.mock('../../assets/logos/SitecoreCDPLogo', () => {
  return () => <div data-testid="sitecore-cdp-logo" />;
});

describe('Skills component', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it('renders the section heading correctly', () => {
    expect(screen.getByText('Skilled with')).toBeInTheDocument();
  });

  it('renders all technology cards with correct names', () => {
    // Check for all technology names
    const expectedTechnologies = [
      'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'Tailwind',
      'NodeJS', 'C# .NET', 'OpenAI', 'Sitecore', 'Sitecore XM Cloud',
      'Sitecore Search', 'Sitecore CDP'
    ];

    expectedTechnologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders the correct number of technology cards', () => {
    // Get all the card elements
    const cards = screen.getAllByRole('generic').filter(
      element => element.className && element.className.includes('p-6 m-2 sm:m-4')
    );
    
    // Should be 12 technologies as defined in the logos array
    expect(cards.length).toBe(12);
  });
});