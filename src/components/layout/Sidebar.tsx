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
        name: 'Finance Tools',
        icon: <Calculator size={16} />,
        tools: [
            { name: 'Currency Converter', href: '/tools/currency-converter' },
            { name: 'Loan Calculator', href: '/tools/loan-calculator' },
        ]
    },
    {
        name: 'Digital Assets',
        icon: <Coins size={16} />,
        tools: [
            { name: 'Live Crypto Tracker', href: '/tools/crypto-tracker' },
        ]
    },
    {
        name: 'Web & Media',
        icon: <Code size={16} />,
        tools: [
            { name: 'Image Optimizer', href: '/tools/image-optimizer' },
            { name: 'Word Counter', href: '/tools/word-counter' },
            { name: 'Meta Tag Generator', href: '/tools/meta-generator' },
        ]
    }
];

export default function Sidebar() {
    return (
        <aside className="sidebar">
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

                <div className="expert-vault-sidebar card" style={{ marginTop: 'auto', padding: '16px', fontSize: '12px' }}>
                    <div style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Zap size={14} /> EXPERT VAULT
                    </div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.4' }}>
                        Tools built for performance and accuracy. No tracking, 100% private.
                    </p>
                </div>
            </div>

        </aside>
    );
}
