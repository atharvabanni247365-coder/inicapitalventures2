import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog-utils';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { SanityPortableText } from '@/components/blog/sanity-portable-text';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found | Aura Architects',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aura-architects.vercel.app';
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author.name)}`;

  return {
    title: `${post.title} | Aura Architects`,
    description: post.excerpt,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aura-architects.vercel.app';

  // JSON-LD Article Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${baseUrl}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aura Architects',
      url: baseUrl,
    },
    image: `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}&author=${encodeURIComponent(post.author.name)}`,
  };

  // Generate Table of Contents items from headings
  const headingMatches = Array.from((post.content || '').matchAll(/^(##|###)\s+(.+)$/gm));
  const tocItems = headingMatches.map((match) => {
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return {
      id,
      text,
      level: match[1] === '##' ? 2 : 3,
    };
  });

  return (
    <article className="py-16 md:py-24 bg-alabaster min-h-screen">
      {/* Inject JSON-LD Rich Snippet Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/blog">
            <ActionButton variant="outline-platinum" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back to All Articles</span>
            </ActionButton>
          </Link>
        </div>

        {/* Header Block */}
        <div className="max-w-4xl space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-anthracite/60">
            <div className="flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-accent-gold" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-accent-gold" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-anthracite leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-anthracite/80 leading-relaxed font-light">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-accent-platinum/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-black flex items-center justify-center text-accent-gold font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-anthracite">{post.author.name}</div>
                <div className="text-xs text-anthracite/60">{post.author.role}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-accent-gold/15 text-brand-black text-xs font-medium flex items-center space-x-1"
                >
                  <Tag className="w-3 h-3 text-accent-gold" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Body & TOC Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-accent-platinum/60">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-6 text-anthracite/90 leading-relaxed">
            {post.body ? (
              <SanityPortableText value={post.body} />
            ) : (
              post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-serif font-bold text-anthracite mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  const text = paragraph.replace('## ', '');
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h2 key={index} id={id} className="text-2xl font-serif font-bold text-anthracite mt-8 mb-4 border-b border-accent-platinum/50 pb-2">
                      {text}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  const text = paragraph.replace('### ', '');
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h3 key={index} id={id} className="text-xl font-serif font-semibold text-anthracite mt-6 mb-3">
                      {text}
                    </h3>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const codeLines = paragraph.split('\n');
                  const codeContent = codeLines.slice(1, -1).join('\n');
                  return (
                    <div key={index} className="my-6 rounded-xl bg-brand-black p-4 text-alabaster font-mono text-xs overflow-x-auto border border-accent-gold/30">
                      <pre>{codeContent}</pre>
                    </div>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').map((item) => item.replace('- ', ''));
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4 pl-2 text-sm">
                      {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-base text-anthracite/80 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })
            )}
          </div>

          {/* TOC Sidebar */}
          <div className="hidden lg:block lg:col-span-4">
            <TableOfContents items={tocItems} />
          </div>

        </div>

      </div>
    </article>
  );
}
