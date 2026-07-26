import React from 'react';
import { HeroBanner } from '@/components/home/hero-banner';
import { FeatureGrid } from '@/components/home/feature-grid';
import { StatsCounter } from '@/components/home/stats-counter';
import { ContactSection } from '@/components/home/contact-section';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Stats Counter Bar */}
      <StatsCounter />

      {/* Core Feature Showcase */}
      <FeatureGrid />

      {/* Contact & Inquiries Section */}
      <ContactSection />
    </div>
  );
}
