import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoScroll from '../VideoScroll';

// Mock requestAnimationFrame and cancelAnimationFrame
global.requestAnimationFrame = jest.fn((callback) => {
  return setTimeout(() => callback(Date.now()), 0);
});

global.cancelAnimationFrame = jest.fn((id) => {
  clearTimeout(id);
});

// Mock window properties and methods
const originalScrollY = window.scrollY;
const originalInnerHeight = window.innerHeight;

// Create mock for HTMLVideoElement
class MockHTMLVideoElement {
  duration = 10;
  currentTime = 0;
  videoWidth = 1280;
  videoHeight = 720;
  style = { transform: '' };
  addEventListener = jest.fn();
  removeEventListener = jest.fn();
  src = '';
}

// Override the element prototype methods that are used
Object.defineProperty(HTMLVideoElement.prototype, 'duration', {
  get: function() { return 10; }
});

describe('VideoScroll component', () => {
  const mockVideoSrc = '/test-video.mp4';
  
  beforeEach(() => {
    // Mock Element.getBoundingClientRect
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      height: 1000,
      width: 500,
      top: 0,
      left: 0,
      bottom: 1000,
      right: 500,
      x: 0,
      y: 0,
      toJSON: () => {}
    }));
    
    // Mock clientHeight, offsetTop
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
      configurable: true,
      value: 600
    });
    
    Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
      configurable: true,
      value: 100
    });
    
    // Set window properties
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 0
    });
    
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 800
    });
  });
  
  afterEach(() => {
    // Restore window properties
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: originalScrollY
    });
    
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: originalInnerHeight
    });
    
    jest.clearAllMocks();
  });
  
  it('renders the video element with the correct source', () => {
    render(<VideoScroll videoSrc={mockVideoSrc} />);
    
    const videoElement = screen.getByText(/(.*)/, { selector: 'video' });
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', mockVideoSrc);
  });
  
  it('displays the progress indicator', () => {
    render(<VideoScroll videoSrc={mockVideoSrc} />);
    
    // Initially progress should be 0%
    expect(screen.getByText('Progress: 0%')).toBeInTheDocument();
  });
  
  it('shows debug information', () => {
    render(<VideoScroll videoSrc={mockVideoSrc} />);
    
    // Should show the initial debug message
    expect(screen.getByText(`Initial video src: ${mockVideoSrc}`)).toBeInTheDocument();
  });
  
  it('properly sets up and cleans up event listeners and animation frame', () => {
    const { unmount } = render(<VideoScroll videoSrc={mockVideoSrc} />);
    
    // Request animation frame should have been called
    expect(requestAnimationFrame).toHaveBeenCalled();
    
    // Unmount to test cleanup
    unmount();
    
    // Cancel animation frame should have been called during cleanup
    expect(cancelAnimationFrame).toHaveBeenCalled();
  });
});