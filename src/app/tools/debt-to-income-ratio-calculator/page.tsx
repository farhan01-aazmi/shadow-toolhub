import { Metadata } from 'next';
import { Percent, TrendingUp, ShieldCheck } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "Debt to Income Ratio Calculator - DTI Calculator 2024 | Tech Resolutions",
    description: "Calculate your debt to income ratio instantly. Check if you qualify for mortgages, auto loans, and credit cards with our free DTI calculator.",
    keywords: ["debt to income ratio calculator", "DTI calculator", "mortgage DTI", "qualify for loan", "debt ratio calculator"],
    alternates: {
        canonical: 'https://www.nevy.in/tools/debt-to-income-ratio-calculator',
    },
};

export default function DTICalculatorPage() {
    return (
        <div className="tool-container px-4 py-12 max-w-6xl mx-auto">
            <header className="tool-header mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">Debt to Income Ratio Calculator</h1>
                <p className="tool-intro text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Calculate your DTI ratio instantly. Lenders use this to decide if you qualify for loans.
                </p>

                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Debt to Income Ratio Calculator",
                    "operatingSystem": "All",
                    "applicationCategory": "FinanceApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Calculate debt to income ratio for loan approval."
                }} />
            </header>

            <div className="card glass p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Percent className="text-primary" />
                    What is a Good DTI Ratio?
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                        <span>Excellent</span>
                        <span className="font-bold text-success">&lt; 20%</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                        <span>Good</span>
                        <span className="font-bold text-primary">20% - 36%</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                        <span>Fair</span>
                        <span className="font-bold text-secondary">37% - 43%</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Poor</span>
                        <span className="font-bold text-red-500">&gt; 43%</span>
                    </li>
                </ul>
            </div>

            <div className="seo-content-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-20 text-sm leading-relaxed text-muted-foreground">
                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="text-secondary" />
                        How to Calculate
                    </h3>
                    <p>
                        DTI = (Monthly Debt Payments ÷ Gross Monthly Income) × 100. Include all minimum monthly payments: mortgage, auto loans, credit cards, student loans.
                    </p>
                </article>

                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-success" />
                        Improving Your DTI
                    </h3>
                    <p>
                        Pay down debts, avoid new credit, and increase income to improve your DTI ratio and qualify for better loan rates.
                    </p>
                </article>
            </div>
        </div>
    );
}