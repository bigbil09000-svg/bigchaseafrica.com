import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from '../assets/bigchase-logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/order', label: 'Order Gas' },
    { path: '/services', label: 'Services' },
    { path: '/business', label: 'Business Clients' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImage}
              alt="BIGCHASE AFRICA LIMITED"
              className="h-16 sm:h-20 md:h-24 w-auto max-w-[180px] sm:max-w-[240px] md:max-w-[300px] object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-[#1a2332] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/order">
              <Button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold px-6">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#1a2332]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a2332]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#1a2332] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link to="/order" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#ff6b35] hover:bg-[#e55a2b] text-white font-semibold">
                  Order Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
