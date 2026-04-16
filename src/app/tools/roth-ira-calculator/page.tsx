import { Metadata } from 'next';
import { DollarSign, TrendingUp, ShieldCheck, Calculator } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "Roth IRA Calculator 2024 - Free Tax-Free Growth Estimator | Tech Resolutions",
    description: "Calculate your Roth IRA growth and tax-free withdrawals. See how much tax-free retirement income you can generate with our free Roth IRA calculator.",
    keywords: ["roth ira calculator", "roth ira contribution", "tax-free retirement", "retirement calculator", "roth ira growth calculator"],
    alternates: {
        canonical: 'https://www.nevy.in/tools/roth-ira-calculator',
    },
};

export default function RothIRACalculatorPage() {
    return (
        <div className="tool-container px-4 py-12 max-w-6xl mx-auto">
            <header className="tool-header mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">Roth IRA Calculator 2024</h1>
                <p className="tool-intro text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Plan your tax-free retirement. See how your Roth IRA can grow and calculate your tax-free withdrawals in retirement.
                </p>

                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Roth IRA Calculator",
                    "operatingSystem": "All",
                    "applicationCategory": "FinanceApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Calculate Roth IRA growth and tax-free retirement income."
                }} />
            </header>

            <div className="card glass p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Calculator className="text-primary" />
                    Roth IRA Contribution Limits 2024
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                        <span>Under 50</span>
                        <span className="font-bold text-foreground">$7,000 / year</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                        <span>50 and older</span>
                        <span className="font-bold text-foreground">$8,000 / year</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Income limit (Single)</span>
                        <span className="font-bold text-foreground">&lt; $161,000</span>
                    </li>
                </ul>
            </div>

            <div className="seo-content-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20 text-sm leading-relaxed text-muted-foreground">
                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-success" />
                        Tax-Free Growth
                    </h3>
                    <p>
                        Roth IRAs offer tax-free growth. Unlike traditional IRAs where you pay taxes on withdrawals, your money grows completely tax-free.
                    </p>
                </article>

                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="text-secondary" />
                        No Required Distributions
                    </h3>
                    <p>
                        Unlike 401ks and traditional IRAs, Roth IRAs have no required minimum distributions. Your money can grow for as long as you want.
                    </p>
                </article>

                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <DollarSign className="text-primary" />
                        Early Withdrawal Options
                    </h3>
                    <p>
                        You can withdraw your contributions (not earnings) at any time without taxes or penalties.
                    </p>
                </article>
            </div>
        </div>
    );
}