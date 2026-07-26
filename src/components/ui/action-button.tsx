'use client';

import React from 'react';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'black' | 'outline-platinum' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  variant = 'gold',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-gold/50 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs tracking-wider uppercase',
    md: 'px-6 py-2.5 text-sm tracking-wide',
    lg: 'px-8 py-3.5 text-base tracking-wide',
  };

  const variantStyles = {
    gold: 'bg-accent-gold text-brand-black hover:bg-accent-gold-hover hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0',
    black: 'bg-brand-black text-alabaster border border-accent-gold/30 hover:border-accent-gold hover:text-accent-gold hover:-translate-y-0.5',
    'outline-platinum': 'border border-accent-platinum text-anthracite hover:border-accent-gold hover:text-accent-gold bg-transparent',
    ghost: 'text-anthracite hover:text-accent-gold hover:bg-accent-platinum/20',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
