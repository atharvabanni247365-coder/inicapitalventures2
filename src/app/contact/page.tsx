'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { ActionButton } from '@/components/ui/action-button';
import { sendContactEmail } from '@/app/actions/contact-actions';
import { Send, CheckCircle, AlertCircle, Sparkles, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setErrorMessage(result.error || 'Failed to submit inquiry.');
    }
  };

  return (
    <div className="py-16 md:py-24 bg-alabaster min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold border border-accent-gold/30 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT INQUIRIES & ENGAGEMENT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-anthracite">
            Connect With Our Architects
          </h1>
          <p className="text-anthracite/75 text-base sm:text-lg">
            Have a project in mind or want to discuss technical platform specifications? Send us a direct message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side Cards */}
          <div className="lg:col-span-4 space-y-6">
            <GlassCard variant="dark" hoverEffect={false} className="p-8 space-y-6">
              <h3 className="text-xl font-serif font-bold text-alabaster border-b border-accent-gold/30 pb-3">
                Architectural Studio
              </h3>

              <div className="space-y-4 text-sm text-alabaster/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-alabaster">Headquarters</div>
                    <div>100 Luxury Way, Suite 400</div>
                    <div>San Francisco, CA 94107</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span>contact@auraarchitects.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-gold flex-shrink-0" />
                  <span>+1 (800) 555-AURA</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-accent-gold font-mono flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>SERVER ACTIONS & RESEND PROTECTED</span>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-8">
            <GlassCard className="p-8 sm:p-12 border-accent-gold/40 shadow-xl">
              
              {isSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-accent-gold flex items-center justify-center mx-auto text-brand-black shadow-gold-glow">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-anthracite">
                    Message Sent Successfully
                  </h3>
                  <p className="text-base text-anthracite/75 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your inquiry has been transmitted directly to our inbox via Resend.
                  </p>
                  <div className="pt-4">
                    <ActionButton variant="black" size="md" onClick={() => setIsSuccess(false)}>
                      Send Another Inquiry
                    </ActionButton>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-sm flex items-center space-x-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-anthracite">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g. Julian Vance"
                        required
                        className="w-full bg-white border border-accent-platinum/60 rounded-xl px-4 py-3.5 text-sm text-anthracite focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-anthracite">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="julian@example.com"
                        required
                        className="w-full bg-white border border-accent-platinum/60 rounded-xl px-4 py-3.5 text-sm text-anthracite focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-anthracite">
                      Project Scope & Details *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Describe your architectural requirements, timeframe, and technical goals..."
                      required
                      className="w-full bg-white border border-accent-platinum/60 rounded-xl px-4 py-3.5 text-sm text-anthracite focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-xs text-anthracite/60">
                      <CheckCircle className="w-4 h-4 text-accent-gold" />
                      <span>Encrypted via Next.js Server Actions</span>
                    </div>

                    <ActionButton
                      variant="gold"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      <span>{isSubmitting ? 'Transmitting Email...' : 'Send Message'}</span>
                      <Send className="w-4 h-4 ml-2" />
                    </ActionButton>
                  </div>

                </form>
              )}

            </GlassCard>
          </div>

        </div>

      </div>
    </div>
  );
}
