import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'light',
  className = '',
  hoverEffect = true,
}) => {
  const baseCard = variant === 'dark' ? 'glass-card-dark text-alabaster' : 'glass-card text-anthracite';
  const hoverClass = hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent-gold/40' : '';

  return (
    <div className={`rounded-2xl p-6 relative overflow-hidden ${baseCard} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
