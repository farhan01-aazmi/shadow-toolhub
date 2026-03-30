import { Metadata } from 'next';
import USTaxCalculatorComponent from './USTaxCalculatorComponent';
import { ShieldCheck, TrendingUp, DollarSign, Calculator, HelpCircle } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
    title: "US Income Tax Calculator 2024-2025 - Free Federal Estimator | Tech Resolutions",
    description: "Calculate your 2024 federal income tax liability with our free US tax estimator. Includes standard deduction, marginal rates, and effective tax rate for the 2025 filing season.",
    keywords: ["us income tax calculator", "federal tax estimator", "2024 tax brackets", "irs income tax calculator", "online tax calculator usa", "marginal tax rate", "effective tax rate", "take home pay calculator"],
    alternates: {
        canonical: 'https://www.nevy.in/tools/us-income-tax-calculator',
    },
    openGraph: {
        images: [
            {
                url: 'https://www.nevy.in/og/og-us-tax-calculator.png',
                width: 1200,
                height: 630,
                alt: 'US Income Tax Calculator',
            }
        ],
    }
};

export default function USTaxCalculatorPage() {
    return (
        <div className="tool-container px-4 py-12 max-w-6xl mx-auto">
            <header className="tool-header mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">US Income Tax Calculator 2024-2025</h1>
                <p className="tool-intro text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Estimate your federal income tax liability for the upcoming 2025 filing season. 
                    This tool applies the latest IRS 2024 tax brackets and standard deductions to provide 
                    accurate projections of your marginal and effective tax rates.
                </p>
                
                {/* JSON-LD Schema */}
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Professional US Income Tax Estimator",
                    "operatingSystem": "All",
                    "applicationCategory": "FinanceApplication",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Calculate 2024 federal income tax liability, including deductions and marginal rates.",
                    "featureList": [
                        "Federal tax bracket calculation",
                        "Standard deduction application",
                        "Effective vs Marginal rate comparison",
                        "Take-home pay estimation"
                    ]
                }} />
                
                <StructuredData data={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "How is federal income tax calculated in 2024?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Federal income tax is calculated using a progressive bracket system. Your taxable income (gross income minus deductions) is divided into layers, with each layer taxed at a higher rate ranging from 10% to 37%."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What is the standard deduction for 2024?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "For the 2024 tax year (filing in 2025), the standard deduction is $14,600 for single filers and $29,200 for married couples filing jointly."
                            }
                        }
                    ]
                }} />
            </header>

            <USTaxCalculatorComponent />

            {/* Premium SEO Content Section */}
            <div className="seo-content-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20 text-sm leading-relaxed text-muted-foreground">
                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <DollarSign className="text-success" />
                        Why Use Our Tax Estimator?
                    </h3>
                    <p>
                        Navigating the complex world of the Internal Revenue Service (IRS) can be daunting for even the most financially savvy individuals. Our US Income Tax Calculator is designed to simplify this process, offering a clear and transparent view of your potential federal tax liability. Unlike complex software that requires long signups, Tech Resolutions provides an instant, client-side calculation that ensures your sensitive financial data never leaves your device.
                    </p>
                    <p className="mt-4">
                        By inputting your annual gross income and filing status, you can see exactly how the federal progressive tax system applies to your situation. This transparency allows for better financial planning throughout the year, preventing unpleasant surprises during the April filing season.
                    </p>
                </article>

                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="text-secondary" />
                        Understanding Marginal Rates
                    </h3>
                    <p>
                        A common misconception in the US tax system is that moving into a higher tax bracket increases the tax rate on your entire income. In reality, the American system is progressive. This means only the part of your income that falls within the new bracket is taxed at that higher rate. Our tool helps visualize this by showing both your marginal rate (the tax on your last dollar earned) and your effective rate (the overall percentage of your income paid in taxes).
                    </p>
                    <p className="mt-4">
                        Understanding this distinction is vital for making decisions about bonuses, raises, or overtime work. You can work with confidence knowing that a raise will never result in less take-home pay due to tax bracket shifts.
                    </p>
                </article>

                <article className="p-6 card glass">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-primary" />
                        Private & Secure by Design
                    </h3>
                    <p>
                        Financial privacy is a fundamental right. At Tech Resolutions, we believe you shouldn't have to trade your personal information for a simple calculation. Our US Income Tax Calculator runs entirely in your browser using JavaScript. No information—not your salary, not your filing status—is ever sent to our servers.
                    </p>
                    <p className="mt-4">
                        This approach not only provides the fastest experience possible but also the most secure one. In an era of data breaches and intrusive tracking, Tech Resolutions stands as a privacy-first hub for all your financial utility needs.
                    </p>
                </article>
            </div>

            <section className="comprehensive-guide card glass p-10 mb-20 border-t-2 border-primary/20">
                <h2 className="text-2xl font-bold mb-8 text-center text-foreground uppercase tracking-widest">
                    The 2024 Federal Tax Guide (2025 Filing Season)
                </h2>
                <div className="grid md:grid-cols-2 gap-12 text-muted-foreground leading-loose">
                    <div>
                        <h4 className="text-foreground font-bold mb-4 flex items-center gap-2">
                            <HelpCircle size={18} className="text-secondary" />
                            How Does Deductions Work?
                        </h4>
                        <p>
                            Deductions are expenses the IRS allows you to subtract from your gross income to arrive at your taxable income. For most taxpayers, the **Standard Deduction** is the simplest and most efficient route. In 2024, the IRS increased these amounts to combat inflation, reaching $14,600 for singles and $29,200 for joint filers. These sums represent a baseline of income that the government essentially won't tax, providing a buffer for every American worker.
                        </p>
                        <p className="mt-4">
                            If you have significant expenses like mortgage interest, large medical bills, or charitable contributions, you might choose to "itemize" your deductions instead. However, for over 90% of US filers, the standard deduction remains the best choice.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-foreground font-bold mb-4 flex items-center gap-2">
                            <Calculator size={18} className="text-primary" />
                            What About State Taxes?
                        </h4>
                        <p>
                            While our tool focuses on **Federal Income Tax**, it is important to remember that many states also levy their own income tax. These rates vary wildly, from 0% in states like Florida, Texas, and Washington, to over 13% in California. Generally, state taxes are calculated on your Adjusted Gross Income (AGI). 
                        </p>
                        <p className="mt-4">
                            We are currently expanding Tech Resolutions to include state-specific calculators for all 50 US states. Monitoring your total tax burden—both federal and state—is the first step toward true financial freedom and optimized investment strategies.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
