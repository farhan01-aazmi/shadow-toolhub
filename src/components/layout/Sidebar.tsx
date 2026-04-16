import Link from 'next/link';
import { TrendingUp, Zap, Clock, Calculator, DollarSign } from 'lucide-react';
import AdSenseUnit from '@/components/ads/AdSenseUnit';

export default function Sidebar() {
  const trending = [
    { name: 'US Income Tax Calculator', link: '/tools/us-income-tax-calculator' },
    { name: 'Mortgage Calculator', link: '/tools/mortgage-calculator' },
    { name: 'EMI Calculator', link: '/tools/emi-calculator' },
    { name: 'Password Generator', link: '/tools/password-generator' },
    { name: 'Compound Interest', link: '/tools/compound-interest-calculator' },
    { name: 'Image Compressor', link: '/tools/image-compressor' }
  ];

  const financeTools = [
    { name: 'Currency Converter', link: '/tools/currency-converter' },
    { name: 'Crypto Tracker', link: '/tools/crypto-tracker' },
    { name: 'Paycheck Calculator', link: '/tools/california-paycheck-calculator' },
    { name: 'GST Calculator', link: '/tools/gst-calculator' }
  ];

  return (
    <aside className="sidebar">
      <div className="side-sec rv">
        <div className="side-hd">
          <TrendingUp size={16} className="amber" />
          <span>Trending Now</span>
        </div>
        <div className="side-list">
          {trending.map(item => (
            <Link key={item.name} href={item.link} className="side-item">
              <span>{item.name}</span>
              <Zap size={14} className="side-ico" />
            </Link>
          ))}
        </div>
      </div>

      <div style={{ margin: '20px 0', padding: '10px' }}>
        <AdSenseUnit type="rectangle" />
      </div>

      <div className="side-sec rv">
        <div className="side-hd">
          <DollarSign size={16} className="text-success" />
          <span>Finance Tools</span>
        </div>
        <div className="side-list">
          {financeTools.map(item => (
            <Link key={item.name} href={item.link} className="side-item">
              <span>{item.name}</span>
              <Calculator size={14} className="side-ico" />
            </Link>
          ))}
        </div>
      </div>

      <div className="side-sec rv" style={{ marginTop: '30px' }}>
        <div className="side-hd">
          <Clock size={16} />
          <span>Quick Access</span>
        </div>
        <p style={{ fontSize: '0.82rem', color: 'var(--sub)', padding: '0 15px', lineHeight: '1.6' }}>
          Tech Resolutions utilities are optimized for 2026 performance standards. No signup, no tracking.
        </p>
      </div>
    </aside>
  );
}
