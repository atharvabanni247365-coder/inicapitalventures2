'use server';

import { Resend } from 'resend';
import React from 'react';
import { EmailTemplate } from '@/components/email/email-template';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  // Validate form inputs
  if (!name || !email || !message) {
    return {
      success: false,
      error: 'Please fill in all required fields (Name, Email, Message).',
    };
  }

  if (!email.includes('@') || !email.includes('.')) {
    return {
      success: false,
      error: 'Please enter a valid email address.',
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || apiKey === 'dummy_resend_api_key') {
    console.log('[Resend Server Action] Simulated email send for:', { name, email, message });
    return {
      success: true,
      message: 'Inquiry received (Development Mode: Resend API Key unconfigured).',
    };
  }

  try {
    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: 'Aura Architects Inquiries <onboarding@resend.dev>',
      to: [process.env.CONTACT_NOTIFICATION_EMAIL || 'bannigravity@gmail.com'],
      subject: `New Architectural Inquiry from ${name}`,
      react: React.createElement(EmailTemplate, { name, email, message }),
      replyTo: email,
    });

    if (data.error) {
      return {
        success: false,
        error: data.error.message || 'Failed to dispatch email via Resend.',
      };
    }

    return {
      success: true,
      message: 'Your inquiry has been transmitted directly to our principal architects.',
    };
  } catch (error: any) {
    console.error('[Resend Error]', error);
    return {
      success: false,
      error: error?.message || 'An unexpected error occurred while sending your message.',
    };
  }
}
