import { render, screen } from '@testing-library/react';
import Playground from '../Playground';

// Mock Next/Link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Playground component', () => {
  beforeEach(() => {
    render(<Playground />);
  });

  it('renders the section title correctly', () => {
    expect(screen.getByText('Code Playground')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    expect(screen.getByText(/Code playgrounds are a great way for me to learn new technologies and to practice my skills/i)).toBeInTheDocument();
  });

  it('renders a link to the playground page', () => {
    const link = screen.getByRole('link', { name: /view all playgrounds/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/playground');
  });
});