import React from 'react';
import Link from 'next/link';
import { ActionButton } from '@/components/ui/action-button';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-alabaster">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-full bg-brand-black text-accent-gold flex items-center justify-center mx-auto shadow-gold-glow">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="text-5xl font-serif font-bold text-anthracite">404</h1>
        <h2 className="text-xl font-semibold text-anthracite">Architectural Path Not Found</h2>
        <p className="text-sm text-anthracite/70">
          The requested route does not exist or has been relocated within our kebab-case directory structure.
        </p>
        <div className="pt-4">
          <Link href="/">
            <ActionButton variant="gold" size="md">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Return Home</span>
            </ActionButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
