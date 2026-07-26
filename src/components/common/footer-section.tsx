'use client';

import React from 'react';
import Link from 'next/link';
import { ActionButton } from '@/components/ui/action-button';
import { Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-brand-black text-alabaster border-t border-accent-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-accent-gold flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-black" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-alabaster">
                AURA<span className="text-accent-gold">.</span>
              </span>
            </div>
            <p className="text-alabaster/70 text-sm leading-relaxed max-w-sm">
              Architecting luxury digital experiences with bespoke Next.js engineering, Champagne Gold design systems, and uncompromised security standards.
            </p>
            <div className="flex items-center space-x-2 text-xs text-accent-gold font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>SECURITY CERTIFIED & STRICT KEBAB-CASE ARCHITECTURE</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-accent-gold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-alabaster/80">
              <li>
                <Link href="/" className="hover:text-accent-gold transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-accent-gold transition-colors">
                  Showcase & Features
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent-gold transition-colors">
                  Editorial Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-gold transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-accent-gold">
              Stay Informed
            </h3>
            <p className="text-xs text-alabaster/70">
              Subscribe to receive our latest insights on frontend architecture and web design trends.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-accent-platinum/60" />
                <input
                  type="email"
                  placeholder="enter your email address"
                  className="w-full bg-anthracite/80 border border-accent-platinum/30 rounded-full py-2.5 pl-10 pr-4 text-sm text-alabaster placeholder-alabaster/40 focus:outline-none focus:border-accent-gold transition-colors"
                  required
                />
              </div>
              <ActionButton variant="gold" size="sm" className="w-full">
                <span>Subscribe Now</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </ActionButton>
            </form>
          </div>
        </div>

        {/* Bottom copyright & legals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-alabaster/50 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Aura Architects. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent-gold transition-colors">
              Security Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
