'use client';

import React, { useState, useEffect } from 'react';
import { TAX_BRACKETS_SINGLE, TAX_BRACKETS_MARRIED_JOINT, STANDARD_DEDUCTION } from '@/lib/data/us-tax-brackets';
import { DollarSign, Briefcase, FileText, TrendingDown } from 'lucide-react';

export default function USTaxCalculatorComponent() {
  const [income, setIncome] = useState<number>(75000);
  const [filingStatus, setFilingStatus] = useState<'SINGLE' | 'MARRIED_JOINT'>('SINGLE');
  const [taxResult, setTaxResult] = useState({
    totalTax: 0,
    effectiveRate: 0,
    takeHome: 0,
    marginalRate: 0,
    taxableIncome: 0
  });

  const calculateTax = () => {
    const deduction = filingStatus === 'SINGLE' ? STANDARD_DEDUCTION.SINGLE : STANDARD_DEDUCTION.MARRIED_JOINT;
    const taxableIncome = Math.max(0, income - deduction);
    const brackets = filingStatus === 'SINGLE' ? TAX_BRACKETS_SINGLE : TAX_BRACKETS_MARRIED_JOINT;

    let totalTax = 0;
    let marginalRate = 0;

    for (const bracket of brackets) {
      if (taxableIncome > bracket.min) {
        const taxableInBracket = bracket.max ? Math.min(taxableIncome, bracket.max) - bracket.min : taxableIncome - bracket.min;
        totalTax += taxableInBracket * (bracket.rate / 100);
        marginalRate = bracket.rate;
      }
    }

    const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
    const takeHome = income - totalTax;

    setTaxResult({
      totalTax,
      effectiveRate,
      takeHome,
      marginalRate,
      taxableIncome
    });
  };

  useEffect(() => {
    calculateTax();
  }, [income, filingStatus]);

  return (
    <div className="calculator-grid grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
      <div className="input-section card glass p-6">
        <h3 className="mb-6 flex items-center gap-2">
          <Briefcase size={20} className="text-secondary" />
          Tax Information
        </h3>
        
        <div className="form-group mb-6">
          <label className="block text-sm font-medium mb-2">Annual Gross Income ($)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="e.g. 75000"
            />
          </div>
        </div>

        <div className="form-group mb-6">
          <label className="block text-sm font-medium mb-2">Filing Status</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setFilingStatus('SINGLE')}
              className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                filingStatus === 'SINGLE' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background/50 border-border hover:border-primary/50'
              }`}
            >
              Single
            </button>
            <button
              onClick={() => setFilingStatus('MARRIED_JOINT')}
              className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                filingStatus === 'MARRIED_JOINT' ? 'bg-primary text-primary-foreground border-primary' : 'bg-background/50 border-border hover:border-primary/50'
              }`}
            >
              Married (Joint)
            </button>
          </div>
        </div>

        <div className="info-badge p-4 bg-primary/10 border border-primary/20 rounded-xl">
          <p className="text-xs text-primary leading-relaxed font-medium">
            *This calculator uses the 2024 Federal Tax Brackets for the 2025 filing season. Standard deduction of ${filingStatus === 'SINGLE' ? STANDARD_DEDUCTION.SINGLE.toLocaleString() : STANDARD_DEDUCTION.MARRIED_JOINT.toLocaleString()} is automatically applied.
          </p>
        </div>
      </div>

      <div className="result-section card glass p-6 border-primary/20">
        <h3 className="mb-6 flex items-center gap-2">
          <FileText size={20} className="text-primary" />
          Estimated Liability
        </h3>

        <div className="space-y-6">
          <div className="flex justify-between items-end pb-4 border-b border-border/50">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Federal Tax</p>
              <h2 className="text-3xl font-bold tracking-tight text-primary">${taxResult.totalTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Effective Rate</p>
              <p className="text-xl font-semibold">{taxResult.effectiveRate.toFixed(1)}%</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background/40 rounded-xl border border-border/50">
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-bold">Annual Take-Home</p>
              <p className="text-xl font-bold text-success">${taxResult.takeHome.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="p-4 bg-background/40 rounded-xl border border-border/50">
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-bold">Marginal Bracket</p>
              <p className="text-xl font-bold text-secondary">{taxResult.marginalRate}%</p>
            </div>
          </div>

          <div className="p-4 bg-secondary/5 border border-secondary/10 rounded-xl flex items-center gap-4">
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
              <TrendingDown size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Taxable Income (After Deduction)</p>
              <p className="text-lg font-bold">${taxResult.taxableIncome.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
