import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

// Custom provider wrapping - this would be useful if your app has providers
// such as ThemeProvider, Redux Provider, etc.
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

// Custom render function that includes the providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override the render method with our custom one
export { customRender as render };