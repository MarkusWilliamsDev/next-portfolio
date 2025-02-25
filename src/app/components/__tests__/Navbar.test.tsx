import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => {
    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  };
});

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />,
  X: () => <div data-testid="close-icon" />
}));

describe('Navbar component', () => {
  it('renders the logo with correct link', () => {
    render(<Navbar />);
    
    const logo = screen.getByText('MW');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const playgroundsLink = screen.getByRole('link', { name: 'Playgrounds' });
    const workLink = screen.getByRole('link', { name: 'Work' });
    const contactLink = screen.getByRole('link', { name: 'Contact' });
    
    expect(homeLink).toBeInTheDocument();
    expect(playgroundsLink).toBeInTheDocument();
    expect(workLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(playgroundsLink).toHaveAttribute('href', '/playground');
    expect(workLink).toHaveAttribute('href', '/#work');
    expect(contactLink).toHaveAttribute('href', '/#contact');
  });

  it('renders menu button on mobile view', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByRole('button', { name: 'Open main menu' });
    expect(menuButton).toBeInTheDocument();
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Navbar />);
    
    // Menu should be closed initially - verify mobile menu not visible
    expect(screen.queryByText('Home', { selector: 'div.sm\\:hidden a' })).not.toBeInTheDocument();
    
    // Click the menu button to open
    const menuButton = screen.getByRole('button', { name: 'Open main menu' });
    fireEvent.click(menuButton);
    
    // Menu should be open now with mobile links visible in a div with class sm:hidden
    const mobileMenu = screen.getByText('Home', { selector: 'div.sm\\:hidden a' });
    expect(mobileMenu).toBeInTheDocument();
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    
    // Click again to close
    fireEvent.click(menuButton);
    
    // Mobile menu should be closed
    expect(screen.queryByText('Home', { selector: 'div.sm\\:hidden a' })).not.toBeInTheDocument();
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('updates menu state when link is clicked', () => {
    render(<Navbar />);
    
    // Open the menu
    const menuButton = screen.getByRole('button', { name: 'Open main menu' });
    fireEvent.click(menuButton);
    
    // Click a mobile link
    const mobileContact = screen.getByText('Contact', { selector: 'div.sm\\:hidden a' });
    expect(mobileContact).toBeInTheDocument();
    
    // Trigger click on mobile link
    fireEvent.click(mobileContact);
    
    // Menu should be closed - mobile links not visible
    expect(screen.queryByText('Home', { selector: 'div.sm\\:hidden a' })).not.toBeInTheDocument();
  });
});