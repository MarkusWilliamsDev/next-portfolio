import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: { src: string; alt: string; className: string }) => (
    <img src={src as string} alt={alt} className={className} />
  ),
}));

// Mock profile picture
jest.mock('../../assets/Profile_No_BG.png', () => 'profile-picture.png');

// Mock ParticleBackground
jest.mock('../../utils/ParticleBackground', () => ({
  ParticleBackground: () => <div data-testid="particle-background" />
}));

describe('Hero component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('renders the profile picture with correct attributes', () => {
    const profileImage = screen.getByAltText('Markus Williams');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', 'profile-picture.png');
    expect(profileImage).toHaveClass('max-w-full h-44 w-44');
  });

  it('displays the greeting and name correctly', () => {
    expect(screen.getByText('Hi, my name is')).toBeInTheDocument();
    
    // Check for characters in the name - match only individual character spans
    const nameChars = 'Markus Williams'.split('');
    nameChars.forEach(char => {
      if (char !== ' ') { // Skip space character since it's handled differently
        const charElements = screen.getAllByText(char, { selector: 'span' });
        expect(charElements.length).toBeGreaterThan(0);
      }
    });
  });

  it('displays the tagline with animated "detail" word', () => {
    expect(screen.getByText('A developer with an eye for')).toBeInTheDocument();
    
    // Check for all characters in the word "detail"
    const detailChars = 'detail'.split('');
    detailChars.forEach(char => {
      const charElements = screen.getAllByText(char);
      expect(charElements.length).toBeGreaterThan(0);
    });
  });

  it('renders the navigation buttons correctly', () => {
    const workButton = screen.getByRole('link', { name: /View work/i });
    expect(workButton).toBeInTheDocument();
    expect(workButton).toHaveAttribute('href', '#work');
    
    const contactButton = screen.getByRole('link', { name: /Get in touch/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', '#contact');
  });

  it('includes the particle background', () => {
    expect(screen.getByTestId('particle-background')).toBeInTheDocument();
  });
  
  it('renders character spans for animation', () => {
    // Check that there are character spans rendered
    const characterSpans = screen.getAllByText(/[A-Za-z]/, { selector: 'span' }); 
    expect(characterSpans.length).toBeGreaterThan(0);
    
    // Verify at least one span with class related to animation
    const animatedSpans = characterSpans.filter(span => 
      span.className && (
        span.className.includes('duration-300') || 
        span.className.includes('hover:') || 
        span.className.includes('text-indigo')
      )
    );
    expect(animatedSpans.length).toBeGreaterThan(0);
  });
});