import type { Metadata } from 'next';
import './globals.css';
import { NavBar } from '@/components/common/nav-bar';
import { FooterSection } from '@/components/common/footer-section';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Aura Architects | Luxury Next.js & Tailwind Platform',
  description: 'Modern Next.js web application built with a curated luxury palette, editorial MDX/Sanity blog engine, and strict security compliance.',
  keywords: ['Next.js', 'Tailwind CSS', 'Luxury Web Design', 'Sanity CMS', 'Frontend Architecture'],
  authors: [{ name: 'Aura Architects' }],
  openGraph: {
    title: 'Aura Architects | Luxury Next.js Platform',
    description: 'Bespoke Next.js engineering with Champagne Gold design systems and strict kebab-case file architecture.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased selection:bg-accent-gold selection:text-brand-black">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <FooterSection />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
