"use client";

import { useState, useEffect } from 'react';
import { ArrowRightLeft, TrendingUp, Info } from 'lucide-react';
import { commonCurrencies, getCurrencyName } from '@/lib/api/currency';

interface Props {
  initialRates: { [key: string]: number };
}

export default function ConverterComponent({ initialRates }: Props) {
  const [amount, setAmount] = useState<number>(1);
  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('EUR');
  const [rates, setRates] = useState(initialRates);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    if (rates[to] && rates[from]) {
      const converted = (amount / rates[from]) * rates[to];
      setResult(converted);
    }
  }, [amount, from, to, rates]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="converter-card card glass">
      <div className="converter-header">
        <div className="icon-badge">
          <ArrowRightLeft size={20} className="text-primary" />
        </div>
        <div>
          <h3>Instant Conversion</h3>
          <p className="text-muted">Real-time rates updated hourly</p>
        </div>
      </div>

      <div className="converter-form">
        <div className="input-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            className="styled-input"
          />
        </div>

        <div className="selection-row">
          <div className="input-group flex-1">
            <label>From</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="styled-select">
              {commonCurrencies.map(c => (
                <option key={c} value={c}>{c} - {getCurrencyName(c)}</option>
              ))}
            </select>
          </div>

          <button className="swap-btn" onClick={swap} title="Swap Currencies">
            <ArrowRightLeft size={18} />
          </button>

          <div className="input-group flex-1">
            <label>To</label>
            <select value={to} onChange={(e) => setTo(e.target.value)} className="styled-select">
              {commonCurrencies.map(c => (
                <option key={c} value={c}>{c} - {getCurrencyName(c)}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="result-area">
          <div className="result-label">{amount} {getCurrencyName(from)} =</div>
          <div className="result-value gradient-text">
            {result.toLocaleString(undefined, { maximumFractionDigits: 4 })} {to}
          </div>
          <div className="conversion-rate">
            1 {from} = {(rates[to] / rates[from]).toFixed(6)} {to}
          </div>
        </div>
      </div>

      <div className="converter-footer">
        <div className="info-item">
          <TrendingUp size={16} className="text-primary" />
          <span>Market Mid-Point Rate</span>
        </div>
        <div className="info-item">
          <Info size={16} className="text-muted" />
          <span>No hidden fees, 100% free tool</span>
        </div>
      </div>

    </div>
  );
}
