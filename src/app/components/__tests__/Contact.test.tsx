import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

// Mock React Icons
jest.mock('react-icons/gr', () => ({
  GrLinkedin: () => <div data-testid="linkedin-icon" />,
  GrMail: () => <div data-testid="mail-icon" />,
  GrGithub: () => <div data-testid="github-icon" />
}));

describe('Contact component', () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it('renders all contact cards with correct links', () => {
    // Check LinkedIn card
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/markus-williams-dev/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    
    // Check Email card
    expect(screen.getByText('Email')).toBeInTheDocument();
    const emailLink = screen.getByRole('link', { name: /Email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:markuswilliamsdev@gmail.com');
    expect(emailLink).toHaveAttribute('target', '_blank');
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
    
    // Check GitHub card
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/MarkusWilliamsDev');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
  });

  it('renders a section with contact id', () => {
    const section = screen.getByTestId('contact-section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('id', 'contact');
  });
});