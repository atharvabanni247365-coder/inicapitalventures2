'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';

const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-anthracite mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-serif font-bold text-anthracite mt-8 mb-4 border-b border-accent-platinum/50 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-serif font-semibold text-anthracite mt-6 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent-gold pl-4 py-2 my-6 italic text-anthracite/80 bg-accent-gold/10 rounded-r-xl">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="text-base text-anthracite/85 leading-relaxed my-4">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent-gold underline hover:text-brand-black transition-colors"
      >
        {children}
      </a>
    ),
    code: ({ children }: any) => (
      <code className="bg-brand-black text-accent-gold px-2 py-0.5 rounded font-mono text-xs">
        {children}
      </code>
    ),
  },
};

export const SanityPortableText = ({ value }: { value: any }) => {
  return <PortableText value={value} components={components} />;
};
