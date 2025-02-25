import React from 'react';
import { render, screen } from '@testing-library/react';
import ClaudeCodePage from '../page';

// Mock the PlaygroundLayout component
jest.mock('../../PlaygroundLayout', () => {
  return function MockPlaygroundLayout({ children, title, description, blogContent }: any) {
    return (
      <div data-testid="playground-layout">
        <h1 data-testid="page-title">{title}</h1>
        <p data-testid="page-description">{description}</p>
        <div data-testid="blog-content">{blogContent}</div>
        <div data-testid="playground-content">{children}</div>
      </div>
    );
  };
});

// Mock the SyntaxHighlighter component
jest.mock('react-syntax-highlighter', () => ({
  Prism: ({ children }: any) => <pre data-testid="syntax-highlighter">{children}</pre>,
}));

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  vscDarkPlus: {},
}));

describe('ClaudeCodePage', () => {
  it('renders the page with correct components', () => {
    render(<ClaudeCodePage />);
    
    // Check that PlaygroundLayout is rendered with correct props
    expect(screen.getByTestId('playground-layout')).toBeInTheDocument();
    expect(screen.getByTestId('page-title')).toHaveTextContent('Claude Code Playground');
    expect(screen.getByTestId('page-description')).toHaveTextContent(/Showcasing how Claude AI created this entire demo/);
    
    // Check that the playground content is rendered
    expect(screen.getByTestId('playground-content')).toBeInTheDocument();
    
    // Check that the blog content is rendered
    expect(screen.getByTestId('blog-content')).toBeInTheDocument();
  });
  
  it('displays the input and output code examples', () => {
    render(<ClaudeCodePage />);
    
    // Check for the prompt section
    expect(screen.getByText('Prompt:')).toBeInTheDocument();
    
    // Check for the response section
    expect(screen.getByText('Claude\'s Response:')).toBeInTheDocument();
    
    // Check both syntax highlighters are present
    const codeBlocks = screen.getAllByTestId('syntax-highlighter');
    expect(codeBlocks.length).toBe(2);
    
    // Check for some content from input and output
    expect(codeBlocks[0].textContent).toContain('Generate a React component');
    expect(codeBlocks[1].textContent).toContain('function TodoApp()');
  });
  
  it('renders the informational sections', () => {
    render(<ClaudeCodePage />);
    
    // Check for "100% Created by Claude" section
    expect(screen.getByText('100% Created by Claude')).toBeInTheDocument();
    
    // Check for the section headings in the blog content
    expect(screen.getByText('How Claude Created This Entire Playground')).toBeInTheDocument();
    expect(screen.getByText('Code Generation Process')).toBeInTheDocument();
    expect(screen.getByText('Beyond This Demo')).toBeInTheDocument();
    expect(screen.getByText('Meta: Claude Created This Explanation Too')).toBeInTheDocument();
    
    // Check for list items in the UI
    expect(screen.getByText(/Context-aware code generation/)).toBeInTheDocument();
    expect(screen.getByText(/Follows your repository/)).toBeInTheDocument();
  });
});