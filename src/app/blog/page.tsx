'use client';

import React, { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog-types';
import { getAllPosts } from '@/lib/blog-utils';
import { PostCard } from '@/components/blog/post-card';
import { SearchFilterBar } from '@/components/blog/search-filter-bar';
import { Sparkles, BookOpen } from 'lucide-react';

export default function BlogListingPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  const availableTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  );

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <div className="py-16 md:py-24 bg-alabaster min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL PUBLISHING ENGINE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-anthracite">
            Insights & Architecture
          </h1>
          <p className="text-anthracite/75 text-base sm:text-lg">
            Deep dives into Next.js App Router engineering, custom design tokens, web security, and luxury UI craftsmanship.
          </p>
        </div>

        {/* Search & Filter Component */}
        <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
          availableTags={availableTags}
        />

        {/* Featured Post Highlight (when no active filter) */}
        {!searchQuery && !selectedTag && featuredPost && (
          <PostCard post={featuredPost} featured />
        )}

        {/* Post Grid */}
        {filteredPosts.length > 0 ? (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-anthracite/60 mb-6 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-accent-gold" />
              <span>All Articles ({filteredPosts.length})</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery || selectedTag ? filteredPosts : regularPosts).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white/50 rounded-2xl border border-accent-platinum/40">
            <p className="text-anthracite/60 text-base">
              No articles matched your search query &ldquo;{searchQuery}&rdquo;.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
