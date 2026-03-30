import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Nevy.in',
  description: 'Get in touch with the Nevy.in team for support, business inquiries, or tool suggestions.',
  alternates: {
    canonical: 'https://www.nevy.in/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>
        We're here to help. Whether you have a question about our tools, want to suggest a new feature, or are interested in advertising on Nevy.in, we'd love to hear from you.
      </p>

      <div className="card glass" style={{ marginTop: '40px', padding: '40px' }}>
        <h2>Email Us</h2>
        <p style={{ marginTop: '10px' }}>
          For all inquiries, please reach out to us at:
        </p>
        <a href="mailto:support@nevy.in" className="btn-a" style={{ display: 'inline-block', marginTop: '20px' }}>
          support@nevy.in
        </a>
      </div>

      <p style={{ marginTop: '40px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        We aim to respond to all inquiries within 24-48 business hours.
      </p>
    </div>
  );
}
