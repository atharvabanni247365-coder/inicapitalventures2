'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { ActionButton } from '@/components/ui/action-button';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-alabaster relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-gold">
            START A CONVERSATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-anthracite">
            Initiate Your Architectural Inquiry
          </h2>
          <p className="text-anthracite/70 text-sm">
            Connect with our principal architects for bespoke digital platform developments.
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12 border-accent-gold/40 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center mx-auto text-brand-black">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-anthracite">
                Inquiry Successfully Received
              </h3>
              <p className="text-sm text-anthracite/70 max-w-md mx-auto">
                Thank you for reaching out. Our principal architect will review your project scope and respond within 24 hours.
              </p>
              <ActionButton variant="black" size="sm" onClick={() => setSubmitted(false)}>
                Send Another Message
              </ActionButton>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-anthracite">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Julian Vance"
                    required
                    className="w-full bg-white border border-accent-platinum/60 rounded-xl px-4 py-3 text-sm text-anthracite focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-anthracite">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="julian@example.com"
                    required
                    className="w-full bg-white border border-accent-platinum/60 rounded-xl px-4 py-3 text-sm text-anthracite focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-anthracite">
                  Project Scope / Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Describe your architectural requirements, timeframe, and technical goals..."
                  required
                  className="w-full bg-white border border-accent-platinum/60 rounded-xl px-4 py-3 text-sm text-anthracite focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-anthracite/60">
                  <CheckCircle className="w-4 h-4 text-accent-gold" />
                  <span>Encrypted via HTTPS & Security Headers</span>
                </div>

                <ActionButton variant="gold" size="lg" type="submit" disabled={loading} className="w-full sm:w-auto">
                  <span>{loading ? 'Sending...' : 'Submit Inquiry'}</span>
                  <Send className="w-4 h-4 ml-2" />
                </ActionButton>
              </div>

            </form>
          )}
        </GlassCard>

      </div>
    </section>
  );
};
