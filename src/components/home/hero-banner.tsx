import React from 'react';
import Link from 'next/link';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Ambient background gold glow blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Glass Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border-accent-gold/40 mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-accent-gold" />
          <span className="text-xs font-semibold uppercase tracking-widest text-anthracite">
            NEXT.JS & TAILWIND ARCHITECTURE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-anthracite tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
          Architecting <span className="gold-gradient-text">Luxury Digital</span> Experiences
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-anthracite/75 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Crafted with pure black authority, champagne gold precision, and an integrated editorial MDX publishing engine.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/blog">
            <ActionButton variant="gold" size="lg" className="w-full sm:w-auto">
              <span>Explore Editorial Blog</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </ActionButton>
          </Link>
          <Link href="#features">
            <ActionButton variant="black" size="lg" className="w-full sm:w-auto">
              <span>View Architecture Specs</span>
            </ActionButton>
          </Link>
        </div>

        {/* Trust & Spec Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-accent-platinum/60">
          <div className="flex items-center justify-center space-x-3 text-anthracite/80">
            <ShieldCheck className="w-5 h-5 text-accent-gold" />
            <span className="text-xs font-medium tracking-wide">Strict Security Policy</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-anthracite/80">
            <Zap className="w-5 h-5 text-accent-gold" />
            <span className="text-xs font-medium tracking-wide">Sub-100ms Page Loads</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-anthracite/80">
            <Sparkles className="w-5 h-5 text-accent-gold" />
            <span className="text-xs font-medium tracking-wide">Strict Kebab-Case Files</span>
          </div>
        </div>

      </div>
    </section>
  );
};
