import { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: "Contact Us | Nevy.in",
    description: "Get in touch with the Nevy.in team for support, business inquiries, or feedback.",
};

export default function ContactPage() {
    return (
        <div className="legal-container">
            <header className="legal-header">
                <h1 className="gradient-text">Contact Us</h1>
                <p className="legal-intro">We're here to help you get the most out of our tools.</p>
            </header>

            <div className="legal-content contact-grid">
                <div className="card glass">
                    <h2>Get in Touch</h2>
                    <p>
                        Whether you have a question about one of our tools, want to suggest a new feature,
                        or need technical support, our team is ready to assist you.
                    </p>

                    <div className="contact-info">
                        <div className="info-item">
                            <Mail className="text-primary" />
                            <div>
                                <strong>Email Support</strong>
                                <p>support@nevy.in</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Clock className="text-secondary" />
                            <div>
                                <strong>Response Time</strong>
                                <p>We typically reply within 24-48 hours during business days.</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin className="text-accent" />
                            <div>
                                <strong>Headquarters</strong>
                                <p>Digital First (Global)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card shadow-sm">
                    <h2>Send a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <select id="subject">
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Feature Request</option>
                                <option>Business Partnership</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                        </div>
                        <button type="button" className="action-button">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
}
