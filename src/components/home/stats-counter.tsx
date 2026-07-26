import React from 'react';
import { GlassCard } from '@/components/ui/glass-card';

export const StatsCounter: React.FC = () => {
  const stats = [
    { label: 'Lighthouse Score Target', value: '100%' },
    { label: 'Security Policy Compliance', value: 'A+' },
    { label: 'Kebab-Case File Enforcement', value: '100%' },
    { label: 'Build Execution Time', value: '< 1.2s' },
  ];

  return (
    <section className="py-12 bg-brand-black text-alabaster border-y border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <GlassCard key={idx} variant="dark" hoverEffect={false} className="text-center py-8">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-accent-gold mb-2">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-alabaster/70 font-medium">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
