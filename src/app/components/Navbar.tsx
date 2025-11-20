'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/#top"
              className="flex-shrink-0 flex items-center"
              aria-label="Go to homepage"
            >
              <span className="text-xl font-bold text-indigo-600 hover:text-purple-800 transition-colors duration-200">
                MW
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex items-center space-x-4" role="menubar">
              <NavLink href="/#work">Work</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
              <PlaygroundLink href="/playground">Playgrounds</PlaygroundLink>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-800 focus:ring-offset-2 transition-colors duration-200"
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="sm:hidden"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/#work" onClick={toggleMenu}>
              Work
            </MobileNavLink>
            <MobileNavLink href="/#contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
            <MobilePlaygroundLink href="/playground" onClick={toggleMenu}>
              Playgrounds
            </MobilePlaygroundLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-slate-600 hover:text-purple-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
      role="menuitem"
    >
      {children}
    </Link>
  );
}

function PlaygroundLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="bg-gray-200 text-slate-600 hover:text-purple-800 hover:bg-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:outline outline-purple-800 transition-all duration-200 text-sm font-medium flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
      role="menuitem"
    >
      <span>{children}</span>
      <FaArrowRight className="w-3 h-3" aria-hidden="true" />
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-slate-600 hover:text-purple-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 justify-center flex"
      role="menuitem"
    >
      {children}
    </Link>
  );
}

function MobilePlaygroundLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="bg-indigo-600 text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
      role="menuitem"
    >
      <span>{children}</span>
      <FaArrowRight className="w-3 h-3" aria-hidden="true" />
    </Link>
  );
}

