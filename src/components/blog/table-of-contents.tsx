'use client';

import React from 'react';
import { TocItem } from '@/types/blog-types';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="glass-card p-6 rounded-2xl border-accent-gold/30 sticky top-28 space-y-4">
      <div className="flex items-center space-x-2 text-anthracite border-b border-accent-platinum/50 pb-3">
        <List className="w-4 h-4 text-accent-gold" />
        <h4 className="text-xs font-bold uppercase tracking-widest text-anthracite">
          Table of Contents
        </h4>
      </div>

      <nav className="space-y-2 text-xs">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-anthracite/70 hover:text-accent-gold transition-colors leading-normal ${
              item.level === 3 ? 'pl-4 border-l border-accent-platinum/60' : 'font-medium'
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};
