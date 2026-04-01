import Link from 'next/link';
import { TrendingUp, Zap, Clock } from 'lucide-react';

export default function Sidebar() {
  const trending = [
    { name: 'EMI Calculator', link: '/tools/emi-calculator' },
    { name: 'Password Generator', link: '/tools/password-generator' },
    { name: 'Image Compressor', link: '/tools/image-compressor' },
    { name: 'PDF to Word', link: '/tools/pdf-to-word' },
    { name: 'Word Counter', link: '/tools/advanced-word-counter' },
    { name: 'Color Picker', link: '/tools/color-picker' }
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
