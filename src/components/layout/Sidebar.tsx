import Link from 'next/link';
import {
    Calculator,
    Coins,
    Image as ImageIcon,
    Code,
    BarChart3,
    FileText,
    Settings,
    Zap,
    ChevronRight
} from 'lucide-react';

const categories = [
    {
        name: 'Finance',
        icon: <Calculator size={18} />,
        tools: [
            { name: 'Currency Converter', href: '/tools/currency-converter' },
            { name: 'Loan Calculator', href: '/tools/loan-calculator' },
            { name: 'Mortgage Calculator', href: '/tools/mortgage-calculator' },
        ]
    },
    {
        name: 'Crypto',
        icon: <Coins size={18} />,
        tools: [
            { name: 'Live Crypto Prices', href: '/tools/crypto-tracker' },
            { name: 'Crypto Converter', href: '/tools/crypto-converter' },
        ]
    },
    {
        name: 'Software/Web',
        icon: <Code size={18} />,
        tools: [
            { name: 'Image Optimizer', href: '/tools/image-optimizer' },
            { name: 'JSON Formatter', href: '/tools/json-formatter' },
            { name: 'HTML Minifier', href: '/tools/html-minifier' },
        ]
    },
    {
        name: 'SEO/Marketing',
        icon: <BarChart3 size={18} />,
        tools: [
            { name: 'Word Counter', href: '/tools/word-counter' },
            { name: 'Meta Tag Generator', href: '/tools/meta-generator' },
        ]
    }
];

export default function Sidebar() {
    return (
        <aside className="sidebar glass">
            <div className="sidebar-inner">
                {categories.map((category) => (
                    <div key={category.name} className="sidebar-section">
                        <h3 className="section-title">
                            {category.icon}
                            <span>{category.name}</span>
                        </h3>
                        <ul className="tool-list">
                            {category.tools.map((tool) => (
                                <li key={tool.name}>
                                    <Link href={tool.href} className="tool-link">
                                        <span>{tool.name}</span>
                                        <ChevronRight size={14} className="chevron" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </aside>
    );
}
