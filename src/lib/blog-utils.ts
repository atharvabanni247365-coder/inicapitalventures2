import { BlogPost } from '@/types/blog-types';
import { client, postsQuery, postBySlugQuery } from '@/sanity/sanity-client';

const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Architecting Modern Next.js Applications with Luxury Aesthetics',
    date: '2026-07-20',
    excerpt: 'Explore best practices for structuring Next.js App Router applications with curated Tailwind CSS token systems and glassmorphic designs.',
    author: {
      name: 'Elena Rostova',
      role: 'Principal Frontend Architect',
      avatar: '/images/avatar-1.jpg',
    },
    tags: ['Next.js', 'Architecture', 'Design System'],
    readingTime: '5 min read',
    featured: true,
    content: `
# Architecting Modern Next.js Applications

Building top-tier web applications requires a deliberate blend of strong architecture, strict security boundaries, and responsive aesthetics.

## Design Token Precision
When creating high-end web applications, generic colors (plain red, default blue) fall flat. Instead, curated palettes like Champagne Gold (#C5A880) against Pure Black (#000000) and Alabaster (#F8F8F8) convey sophistication.

### Key Architectural Pillars
- Strict Kebab-Case Naming: Enforce lower-case hyphenated paths across all components.
- Server Components First: Leverage Next.js Server Components for data fetching.
- Security Headers & CSP: Protect against XSS and clickjacking using strict HSTS, X-Frame-Options, and Content-Security-Policy headers.

## Conclusion
A well-crafted modern design system elevates the digital brand identity while delivering exceptional performance metrics.
    `,
  },
  {
    slug: 'mastering-tailwind-css',
    title: 'Mastering Custom Color Palettes and Micro-Interactions in Tailwind CSS',
    date: '2026-07-15',
    excerpt: 'Learn how to extend Tailwind CSS config with HSL tailored tokens, ambient lighting effects, and sleek hover animations.',
    author: {
      name: 'Marcus Vance',
      role: 'Lead UI/UX Designer',
      avatar: '/images/avatar-2.jpg',
    },
    tags: ['Tailwind CSS', 'UI/UX', 'Micro-Animations'],
    readingTime: '4 min read',
    featured: false,
    content: `
# Mastering Custom Color Palettes in Tailwind CSS

Tailwind CSS provides unmatched flexibility when extending core utility classes for custom color roles.

## Implementing Champagne Gold & Warm Platinum
By defining tokenized variables in tailwind.config.ts, design changes propagate cleanly across your UI primitives.

### Micro-Interactions
Elevate buttons and glassmorphic cards with dynamic hover states and gold-tinted drop shadows.
    `,
  },
  {
    slug: 'luxury-web-design-trends',
    title: 'Luxury Web Design Trends for 2026: Glassmorphism and Editorial Typography',
    date: '2026-07-10',
    excerpt: 'An inside look at editorial layout aesthetics, ambient background lighting, and dark mode elegance in modern digital products.',
    author: {
      name: 'Aria Thorne',
      role: 'Design Strategist',
      avatar: '/images/avatar-3.jpg',
    },
    tags: ['Design', 'Trends', 'Luxury'],
    readingTime: '6 min read',
    featured: false,
    content: `
# Luxury Web Design Trends for 2026

Modern web applications are moving away from noisy minimalism toward intentional, editorial luxury aesthetics.
    `,
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'dummy-project-id' && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'dummy_project_id') {
      const sanityPosts = await client.fetch(postsQuery);
      if (sanityPosts && sanityPosts.length > 0) {
        return sanityPosts.map((p: any) => ({
          slug: p.slug,
          title: p.title,
          date: p.publishedAt ? new Date(p.publishedAt).toISOString().split('T')[0] : '2026-07-26',
          excerpt: p.excerpt || '',
          author: {
            name: p.author?.name || 'Aura Editorial',
            role: p.author?.role || 'Staff Writer',
            avatar: p.author?.image || '/images/avatar-1.jpg',
          },
          tags: p.tags || ['Sanity CMS'],
          readingTime: '4 min read',
          featured: false,
          content: p.excerpt || '',
          body: p.body,
        }));
      }
    }
  } catch (error) {
    console.warn('Sanity fetch failed or project ID unconfigured; displaying fallback posts.', error);
  }
  return SAMPLE_POSTS;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'dummy-project-id' && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'dummy_project_id') {
      const p = await client.fetch(postBySlugQuery, { slug });
      if (p) {
        return {
          slug: p.slug,
          title: p.title,
          date: p.publishedAt ? new Date(p.publishedAt).toISOString().split('T')[0] : '2026-07-26',
          excerpt: p.excerpt || '',
          author: {
            name: p.author?.name || 'Aura Editorial',
            role: p.author?.role || 'Staff Writer',
            avatar: p.author?.image || '/images/avatar-1.jpg',
          },
          tags: p.tags || ['Sanity CMS'],
          readingTime: '5 min read',
          featured: false,
          content: p.excerpt || '',
          body: p.body,
        };
      }
    }
  } catch (error) {
    console.warn(`Sanity fetch for slug ${slug} failed; falling back.`, error);
  }
  return SAMPLE_POSTS.find((post) => post.slug === slug);
}
