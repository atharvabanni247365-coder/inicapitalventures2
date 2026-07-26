import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog-types';
import { GlassCard } from '@/components/ui/glass-card';
import { Clock, ArrowUpRight, Tag } from 'lucide-react';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, featured = false }) => {
  if (featured) {
    return (
      <GlassCard className="relative group p-8 lg:p-10 mb-12 bg-gradient-to-br from-alabaster to-accent-platinum/20 border-accent-gold/40">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full bg-accent-gold text-brand-black text-xs font-semibold tracking-wider uppercase">
                FEATURED EDITORIAL
              </span>
              <div className="flex items-center text-xs text-anthracite/60 space-x-1">
                <Clock className="w-3.5 h-3.5 text-accent-gold" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-anthracite group-hover:text-accent-gold transition-colors leading-tight">
                {post.title}
              </h2>
            </Link>

            <p className="text-anthracite/75 text-base leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-anthracite/5 text-anthracite text-xs font-medium flex items-center space-x-1"
                >
                  <Tag className="w-3 h-3 text-accent-gold" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex lg:flex-col justify-between items-start lg:items-end w-full lg:w-auto border-t lg:border-t-0 pt-4 lg:pt-0 border-accent-platinum/40">
            <span className="text-xs font-mono text-anthracite/50">{post.date}</span>
            <Link
              href={`/blog/${post.slug}`}
              className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-brand-black transition-all duration-300"
            >
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="flex flex-col justify-between group h-full border-accent-platinum/40 hover:border-accent-gold/50">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-anthracite/60">
          <span className="font-mono">{post.date}</span>
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-accent-gold" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-serif font-bold text-anthracite group-hover:text-accent-gold transition-colors leading-snug line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-sm text-anthracite/70 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-accent-platinum/30 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-accent-gold/20 flex items-center justify-center text-xs font-bold text-accent-gold">
            {post.author.name[0]}
          </div>
          <span className="text-xs font-medium text-anthracite">{post.author.name}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-semibold text-accent-gold hover:underline flex items-center"
        >
          <span>Read Article</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
        </Link>
      </div>
    </GlassCard>
  );
};
