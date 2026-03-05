export interface CryptoCoin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
}

export async function getTopCoins(limit: number = 50): Promise<CryptoCoin[]> {
    try {
        const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false&price_change_percentage=24h`,
            {
                next: { revalidate: 300 }, // Cache for 5 minutes (Crypto is volatile)
            }
        );

        if (!res.ok) throw new Error('Failed to fetch crypto data');
        return res.json();
    } catch (error) {
        console.error('Crypto API Error:', error);
        return [];
    }
}

export async function getCoinDetails(id: string): Promise<CryptoCoin | null> {
    try {
        const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&sparkline=false`,
            {
                next: { revalidate: 300 },
            }
        );

        if (!res.ok) throw new Error('Failed to fetch coin details');
        const data = await res.json();
        return data[0] || null;
    } catch (error) {
        console.error('Coin Details API Error:', error);
        return null;
    }
}
