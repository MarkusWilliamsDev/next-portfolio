import { render, screen } from '@testing-library/react';
import Work from '../Work';

// Mock Next/Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src as string} alt={alt} />
  ),
}));

// Mock images
jest.mock('../assets/emoji.png', () => 'emoji.png');
jest.mock('../assets/SABOR_Logo.webp', () => 'sabor-logo.webp');
jest.mock('../assets/DOE_Logo.png', () => 'doe-logo.png');
jest.mock('../assets/Healing_Paths_Logo.png', () => 'healing-paths-logo.png');
jest.mock('../assets/NACUBO Logo.jpg', () => 'nacubo-logo.jpg');

// Mock React Icons
jest.mock('react-icons/gr', () => ({
  GrReactjs: () => <div data-testid="react-icon" />,
  GrGithub: () => <div data-testid="github-icon" />
}));

jest.mock('react-icons/si', () => ({
  SiJavascript: () => <div data-testid="js-icon" />,
  SiTailwindcss: () => <div data-testid="tailwind-icon" />,
  SiCsharp: () => <div data-testid="csharp-icon" />,
  SiFirebase: () => <div data-testid="firebase-icon" />,
  SiNodedotjs: () => <div data-testid="nodejs-icon" />
}));

jest.mock('react-icons/tb', () => ({
  TbBrandNextjs: () => <div data-testid="nextjs-icon" />,
  TbBrandTypescript: () => <div data-testid="typescript-icon" />
}));

jest.mock('react-icons/fi', () => ({
  FiExternalLink: () => <div data-testid="link-icon" />
}));

// Jest doesn't correctly locate these files, so let's use the full path
jest.mock('/Users/markuswilliams/Developer/next-portfolio/src/app/assets/logos/SitecoreLogo', () => {
  return function SitecoreLogo() { 
    return <div data-testid="sitecore-logo" />; 
  };
}, { virtual: true });

jest.mock('/Users/markuswilliams/Developer/next-portfolio/src/app/assets/logos/SitecoreSearchLogo', () => {
  return function SitecoreSearchLogo() { 
    return <div data-testid="sitecore-search-logo" />; 
  };
}, { virtual: true });

jest.mock('/Users/markuswilliams/Developer/next-portfolio/src/app/assets/logos/SitecoreXMCLogo', () => {
  return function SitecoreXMCLogo() { 
    return <div data-testid="sitecore-xmc-logo" />; 
  };
}, { virtual: true });

describe('Work component', () => {
  beforeEach(() => {
    render(<Work />);
  });

  it('renders the section title correctly', () => {
    expect(screen.getByText('My Work')).toBeInTheDocument();
  });

  it('renders all projects with their names', () => {
    const expectedProjects = [
      'Gif Guesser',
      'NACUBO',
      'San Antonio Board of Realtors (SABOR)',
      'Department of Energy Office of Science',
      'Healing Paths'
    ];

    expectedProjects.forEach(project => {
      expect(screen.getByText(project)).toBeInTheDocument();
    });
  });

  it('displays project images with correct alt text', () => {
    const altTexts = [
      'Gif Guesser logo',
      'NACUBO logo',
      'San Antonio Board of Realtors (SABOR) logo',
      'Department of Energy Office of Science logo',
      'Healing Paths logo'
    ];

    altTexts.forEach(alt => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });

  it('includes correct links for projects', () => {
    // Check for GitHub link (only present for some projects)
    const githubLink = screen.getByRole('link', { name: /View code/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/MarkusWilliamsDev/Gif-Guesser');
    expect(githubLink).toHaveAttribute('target', '_blank');

    // Check for demo links
    const demoLinks = screen.getAllByRole('link', { name: /Demo/i });
    expect(demoLinks).toHaveLength(5); // All projects have demo links
    
    // Check specific project links
    expect(demoLinks[0]).toHaveAttribute('href', 'https://gifguesser.com/');
    expect(demoLinks[1]).toHaveAttribute('href', 'https://www.nacubo.org/search-results');
  });

  it('displays "Powered by" section with technology icons for each project', () => {
    const poweredBySections = screen.getAllByText('Powered by');
    expect(poweredBySections).toHaveLength(5); // Each project has a "Powered by" section
  });
});