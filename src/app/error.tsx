'use client';

import React from 'react';
import { ActionButton } from '@/components/ui/action-button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-alabaster">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-full bg-brand-black text-amber-500 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8 text-accent-gold" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-anthracite">An Error Occurred</h2>
        <p className="text-sm text-anthracite/70">
          {error?.message || 'An unexpected error was encountered during execution.'}
        </p>
        <div className="pt-4">
          <ActionButton variant="gold" size="md" onClick={() => reset()}>
            <RefreshCw className="w-4 h-4 mr-2" />
            <span>Try Again</span>
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
