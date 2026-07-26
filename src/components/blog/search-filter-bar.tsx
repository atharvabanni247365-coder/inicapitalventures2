'use client';

import React from 'react';
import { Search, Tag } from 'lucide-react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
  availableTags: string[];
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedTag,
  onTagSelect,
  availableTags,
}) => {
  return (
    <div className="space-y-6 mb-12">
      {/* Search Input Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="w-5 h-5 absolute left-4 top-3.5 text-anthracite/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles by title, architectural concept, or keywords..."
          className="w-full bg-white/80 border border-accent-platinum/60 rounded-full py-3 pl-12 pr-4 text-sm text-anthracite placeholder-anthracite/40 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all shadow-sm"
        />
      </div>

      {/* Tag Filtering Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => onTagSelect(null)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
            selectedTag === null
              ? 'bg-brand-black text-accent-gold border border-accent-gold'
              : 'bg-white/60 text-anthracite/70 border border-accent-platinum/40 hover:border-accent-gold'
          }`}
        >
          All Topics
        </button>

        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(selectedTag === tag ? null : tag)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center space-x-1 ${
              selectedTag === tag
                ? 'bg-accent-gold text-brand-black font-semibold'
                : 'bg-white/60 text-anthracite/70 border border-accent-platinum/40 hover:border-accent-gold'
            }`}
          >
            <Tag className="w-3 h-3" />
            <span>{tag}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
