import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Palette, Shield, FileCode, Cpu, Layers, Flame } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'Tailored Color System',
      description: 'Built with a bespoke palette: Pure Black (#000000), Champagne Gold (#C5A880), Deep Anthracite (#1A1A1A), Alabaster (#F8F8F8), and Warm Platinum (#D3D3D3).',
    },
    {
      icon: FileCode,
      title: 'Integrated MDX Blog Engine',
      description: 'Full-featured content pipeline with dynamic search filtering, estimated reading times, tag taxonomies, and interactive Table of Contents.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security Architecture',
      description: 'Enforces strict HTTP headers, CSP policies, Zod input validation schemas, and automated secret scanning.',
    },
    {
      icon: Layers,
      title: 'Kebab-Case File Enforcement',
      description: 'Guarantees zero case-sensitivity conflicts during Linux CI/CD deployments by enforcing lower-case hyphenated paths across all modules.',
    },
    {
      icon: Cpu,
      title: 'Next.js App Router Optimization',
      description: 'Leveraging Server Components, streaming SSR, dynamic metadata API, and automatic WebP image compression.',
    },
    {
      icon: Flame,
      title: 'High-End Micro-Animations',
      description: 'Silky glassmorphic hover interactions, gold lighting halo effects, and fluid responsive drawer transitions.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-alabaster relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-gold">
            CORE PLATFORM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-anthracite">
            Precision Architecture Meets Editorial Elegance
          </h2>
          <p className="text-anthracite/70 text-base">
            Every component is engineered with meticulous attention to visual detail, security rules, and code organization.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={idx} hoverEffect className="group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center mb-6 group-hover:bg-accent-gold transition-colors duration-300">
                    <Icon className="w-6 h-6 text-accent-gold group-hover:text-brand-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-anthracite mb-3 group-hover:text-accent-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-anthracite/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
