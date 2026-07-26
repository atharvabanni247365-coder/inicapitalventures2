import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  submittedAt?: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  message,
  submittedAt = new Date().toLocaleString(),
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Architectural Inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={headerSection}>
            <Heading style={brandTitle}>
              AURA<span style={{ color: '#C5A880' }}>.</span> ARCHITECTS
            </Heading>
            <Text style={headerSub}>New Project Inquiry Received</Text>
          </Section>

          <Hr style={divider} />

          {/* Details */}
          <Section style={contentSection}>
            <Text style={label}>SENDER NAME</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>SENDER EMAIL</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>SUBMISSION TIMESTAMP</Text>
            <Text style={value}>{submittedAt}</Text>

            <Hr style={dividerSubtle} />

            <Text style={label}>PROJECT INQUIRY / MESSAGE</Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              Sent securely via Aura Architects Platform Server Actions & Resend.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#F8F8F8',
  fontFamily: 'HelveticaNeue, Helvetica, Arial, sans-serif',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#000000',
  borderRadius: '16px',
  margin: '0 auto',
  padding: '40px',
  maxWidth: '600px',
  border: '1px solid rgba(197, 168, 128, 0.3)',
};

const headerSection = {
  textAlign: 'center' as const,
  marginBottom: '20px',
};

const brandTitle = {
  color: '#F8F8F8',
  fontSize: '28px',
  fontWeight: 'bold',
  letterSpacing: '-0.5px',
  margin: '0 0 4px 0',
};

const headerSub = {
  color: '#C5A880',
  fontSize: '12px',
  letterSpacing: '2px',
  textTransform: 'uppercase' as const,
  fontWeight: '600',
  margin: 0,
};

const divider = {
  borderColor: 'rgba(197, 168, 128, 0.3)',
  margin: '24px 0',
};

const dividerSubtle = {
  borderColor: 'rgba(211, 211, 211, 0.15)',
  margin: '20px 0',
};

const contentSection = {
  color: '#F8F8F8',
};

const label = {
  color: '#C5A880',
  fontSize: '10px',
  fontWeight: 'bold',
  letterSpacing: '1.5px',
  textTransform: 'uppercase' as const,
  marginBottom: '4px',
};

const value = {
  color: '#F8F8F8',
  fontSize: '15px',
  marginTop: 0,
  marginBottom: '16px',
};

const messageBox = {
  color: '#F8F8F8',
  fontSize: '14px',
  lineHeight: '1.6',
  backgroundColor: '#1A1A1A',
  padding: '16px',
  borderRadius: '8px',
  borderLeft: '4px solid #C5A880',
  whiteSpace: 'pre-wrap' as const,
};

const footerSection = {
  textAlign: 'center' as const,
  marginTop: '20px',
};

const footerText = {
  color: 'rgba(248, 248, 248, 0.5)',
  fontSize: '11px',
};
