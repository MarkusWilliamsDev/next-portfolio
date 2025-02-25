import React from 'react';
import { render, screen } from '@testing-library/react';
import PlaygroundLayout from '../PlaygroundLayout';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock react-icons
jest.mock('react-icons/fi', () => ({
  FiArrowLeft: () => <span data-testid="arrow-left-icon" />,
}));

describe('PlaygroundLayout', () => {
  const mockProps = {
    title: 'Test Playground',
    description: 'This is a test description',
    children: <div data-testid="playground-content">Playground Content</div>,
    blogContent: <div data-testid="blog-content">Blog Content</div>,
  };

  it('renders the layout with the correct title and description', () => {
    render(<PlaygroundLayout {...mockProps} />);
    
    expect(screen.getByText('Test Playground')).toBeInTheDocument();
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('displays the back link to the playground page', () => {
    render(<PlaygroundLayout {...mockProps} />);
    
    const backLink = screen.getByText('Back to Playgrounds');
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/playground');
    expect(screen.getByTestId('arrow-left-icon')).toBeInTheDocument();
  });

  it('renders the children and blog content', () => {
    render(<PlaygroundLayout {...mockProps} />);
    
    expect(screen.getByTestId('playground-content')).toBeInTheDocument();
    expect(screen.getByText('Playground Content')).toBeInTheDocument();
    
    expect(screen.getByTestId('blog-content')).toBeInTheDocument();
    expect(screen.getByText('Blog Content')).toBeInTheDocument();
  });

  it('has the correct section headings', () => {
    render(<PlaygroundLayout {...mockProps} />);
    
    expect(screen.getByText('Playground')).toBeInTheDocument();
  });
});