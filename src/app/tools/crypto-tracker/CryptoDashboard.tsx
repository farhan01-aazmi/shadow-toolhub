"use client";

import { useState } from 'react';
import { Search, TrendingUp, TrendingDown, ChevronRight, BarChart3, Info } from 'lucide-react';
import { CryptoCoin } from '@/lib/api/crypto';
import Link from 'next/link';

interface Props {
    initialCoins: CryptoCoin[];
}

export default function CryptoDashboard({ initialCoins }: Props) {
    const [search, setSearch] = useState('');

    const filteredCoins = initialCoins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: val < 1 ? 4 : 2,
        }).format(val);
    };

    const formatCompact = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            notation: 'compact',
            compactDisplay: 'short',
        }).format(val);
    };

    return (
        <div className="crypto-dashboard">
            <div className="search-bar-container">
                <div className="search-wrapper glass">
                    <Search size={20} className="text-muted" />
                    <input
                        type="text"
                        placeholder="Search Bitcoin, Ethereum, Sol..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="table-container card glass">
                <table className="crypto-table">
                    <thead>
                        <tr>
                            <th className="rank">#</th>
                            <th>Name</th>
                            <th className="text-right">Price</th>
                            <th className="text-right">24h Change</th>
                            <th className="text-right hidden-mobile">Market Cap</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCoins.map((coin) => (
                            <tr key={coin.id} className="coin-row">
                                <td className="rank text-muted">{coin.market_cap_rank}</td>
                                <td>
                                    <div className="coin-info">
                                        <img src={coin.image} alt={coin.name} className="coin-logo" />
                                        <div>
                                            <span className="coin-name">{coin.name}</span>
                                            <span className="coin-symbol text-muted">{coin.symbol.toUpperCase()}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right font-bold">
                                    {formatCurrency(coin.current_price)}
                                </td>
                                <td className={`text-right ${coin.price_change_percentage_24h >= 0 ? 'text-up' : 'text-down'}`}>
                                    <div className="change-cell">
                                        {coin.price_change_percentage_24h >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                    </div>
                                </td>
                                <td className="text-right hidden-mobile text-muted">
                                    ${formatCompact(coin.market_cap)}
                                </td>
                                <td className="text-right">
                                    <Link href={`/tools/crypto-tracker/${coin.id}`} className="view-btn">
                                        Details <ChevronRight size={14} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
