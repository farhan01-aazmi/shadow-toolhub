"use client";

import { useState, useEffect } from 'react';
import { Calculator, DollarSign, Calendar, Percent, PieChart, Info, Download } from 'lucide-react';

export default function LoanCalculatorComponent() {
    const [amount, setAmount] = useState<number>(250000);
    const [interest, setInterest] = useState<number>(6.5);
    const [years, setYears] = useState<number>(30);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
    const [totalPayment, setTotalPayment] = useState<number>(0);
    const [totalInterest, setTotalInterest] = useState<number>(0);

    useEffect(() => {
        const r = interest / 100 / 12;
        const n = years * 12;

        if (r === 0) {
            const p = amount / n;
            setMonthlyPayment(p);
            setTotalPayment(amount);
            setTotalInterest(0);
        } else {
            const p = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            setMonthlyPayment(p);
            setTotalPayment(p * n);
            setTotalInterest(p * n - amount);
        }
    }, [amount, interest, years]);

    return (
        <div className="calculator-container card glass">
            <div className="calc-header">
                <div className="icon-badge">
                    <Calculator size={20} className="text-primary" />
                </div>
                <div>
                    <h3>Loan & Mortgage Calculator</h3>
                    <p className="text-muted">Estimate your monthly payments and total interest</p>
                </div>
            </div>

            <div className="calc-grid">
                <div className="inputs-section">
                    <div className="input-field">
                        <label><DollarSign size={14} /> Loan Amount</label>
                        <div className="input-wrapper">
                            <span className="prefix">$</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                            />
                        </div>
                        <input
                            type="range"
                            min="1000"
                            max="2000000"
                            step="5000"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className="range-slider primary"
                        />
                    </div>

                    <div className="input-field">
                        <label><Percent size={14} /> Annual Interest Rate</label>
                        <div className="input-wrapper">
                            <input
                                type="number"
                                value={interest}
                                step="0.1"
                                onChange={(e) => setInterest(parseFloat(e.target.value) || 0)}
                            />
                            <span className="suffix">%</span>
                        </div>
                        <input
                            type="range"
                            min="0.1"
                            max="20"
                            step="0.1"
                            value={interest}
                            onChange={(e) => setInterest(parseFloat(e.target.value))}
                            className="range-slider secondary"
                        />
                    </div>

                    <div className="input-field">
                        <label><Calendar size={14} /> Loan Term (Years)</label>
                        <div className="input-wrapper">
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(parseInt(e.target.value) || 1)}
                            />
                            <span className="suffix">Years</span>
                        </div>
                        <div className="term-presets">
                            {[5, 10, 15, 20, 30].map(yr => (
                                <button
                                    key={yr}
                                    className={`preset-btn ${years === yr ? 'active' : ''}`}
                                    onClick={() => setYears(yr)}
                                >
                                    {yr}y
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="results-section">
                    <div className="main-result card">
                        <span className="label">Monthly Payment</span>
                        <span className="value gradient-text">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>

                    <div className="sub-results">
                        <div className="stat-row">
                            <span className="text-muted">Total Principal</span>
                            <span className="font-bold">${amount.toLocaleString()}</span>
                        </div>
                        <div className="stat-row">
                            <span className="text-muted">Total Interest</span>
                            <span className="font-bold text-secondary">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="stat-row total">
                            <span className="text-muted">Total Cost of Loan</span>
                            <span className="font-bold text-primary">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        </div>
                    </div>

                    <div className="visual-breakdown">
                        <div className="progress-bar">
                            <div
                                className="progress-fill principal"
                                style={{ width: `${(amount / totalPayment) * 100 || 0}%` }}
                            ></div>
                            <div
                                className="progress-fill interest"
                                style={{ width: `${(totalInterest / totalPayment) * 100 || 0}%` }}
                            ></div>
                        </div>
                        <div className="legend">
                            <div className="legend-item"><span className="dot principal"></span> Principal</div>
                            <div className="legend-item"><span className="dot interest"></span> Interest</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
