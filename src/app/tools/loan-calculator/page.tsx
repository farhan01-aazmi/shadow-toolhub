import { Metadata } from 'next';
import LoanCalculatorComponent from './LoanCalculatorComponent';
import { ShieldCheck, TrendingUp, DollarSign, Calculator } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "Loan & Mortgage Calculator - Monthly Payment Estimator | Nevy.in",
    description: "Free online loan calculator to estimate monthly payments, total interest, and complete payoff schedules for mortgages, auto loans, and personal loans.",
    keywords: ["loan calculator", "mortgage calculator", "monthly payment estimator", "interest rate calculator", "personal loan calculator", "auto loan calculator"],
    openGraph: {
        images: [
            {
                url: 'https://nevy.in/og/og-loan-calculator.png',
                width: 1200,
                height: 630,
                alt: 'Loan Calculator',
            }
        ],
    }
};

export default function LoanCalculatorPage() {
    return (
        <div className="tool-container">
            <header className="tool-header">
                <h1 className="gradient-text">Loan & Mortgage Calculator</h1>
                <p className="tool-intro">
                    Plan your financial future with precision. Calculate monthly payments for home, auto, or personal loans
                    and visualize the impact of interest rates and loan terms on your total cost.
                </p>
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Professional Loan & Mortgage Calculator",
                    "operatingSystem": "All",
                    "applicationCategory": "FinanceApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Accurate loan payment estimator for mortgages and auto loans.",
                    "featureList": [
                        "Monthly payment calculation",
                        "Total interest projection",
                        "Payoff schedule visualization"
                    ]
                }} />
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How is monthly loan payment calculated?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Monthly payments are calculated using the standard amortization formula, taking into account the principal amount, annual interest rate, and the loan term in months."
                            }
                        }
                    ]
                }} />
            </header>

            <LoanCalculatorComponent />

            <section className="seo-benefits-grid card glass">
                <h2>Expert Financial Planning Tools</h2>
                <div className="benefits-row">
                    <div className="benefit-item">
                        <DollarSign size={24} className="text-primary" />
                        <div>
                            <h3>Accurate Estimates</h3>
                            <p>Our formulas follow standard banking practices to give you precise monthly payment projections.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <TrendingUp size={24} className="text-secondary" />
                        <div>
                            <h3>Interest Insights</h3>
                            <p>See exactly how much you're paying in interest over the life of the loan to make informed borrowing decisions.</p>
                        </div>
                    </div>
                    <div className="benefit-item">
                        <ShieldCheck size={24} className="text-accent" />
                        <div>
                            <h3>Secure & Anonymous</h3>
                            <p>Your financial data never leaves your browser. We don't store or track your calculation history.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="info-content card glass">
                <h2>How to Use This Calculator</h2>
                <div className="guide-grid">
                    <div className="guide-step">
                        <h4>1. Loan Amount</h4>
                        <p>Enter the total amount you plan to borrow. For mortgages, this is your purchase price minus the down payment.</p>
                    </div>
                    <div className="guide-step">
                        <h4>2. Interest Rate</h4>
                        <p>Enter the annual percentage rate (APR) offered by your lender. Small changes in rate can mean big changes in total cost.</p>
                    </div>
                    <div className="guide-step">
                        <h4>3. Loan Term</h4>
                        <p>Choose the duration of the loan in years. Longer terms have lower monthly payments but higher total interest costs.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
