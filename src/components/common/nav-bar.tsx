'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ActionButton } from '@/components/ui/action-button';
import { Menu, X, Sparkles } from 'lucide-react';

export const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-alabaster/80 border-b border-accent-platinum/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center border border-accent-gold/40 group-hover:border-accent-gold transition-colors">
              <Sparkles className="w-5 h-5 text-accent-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-tight text-anthracite group-hover:text-brand-black">
                AURA<span className="text-accent-gold">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-accent-gold font-medium">
                ARCHITECTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-anthracite/80 hover:text-accent-gold transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <ActionButton variant="black" size="sm">
                Get In Touch
              </ActionButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-anthracite hover:text-accent-gold focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-black text-alabaster border-b border-accent-gold/20 px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-alabaster/90 hover:text-accent-gold transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <ActionButton variant="gold" size="md" className="w-full">
                Get In Touch
              </ActionButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
