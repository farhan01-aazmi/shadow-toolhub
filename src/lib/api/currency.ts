export interface ExchangeRates {
    base: string;
    date: string;
    rates: { [key: string]: number };
}

export async function getLatestRates(base: string = 'USD'): Promise<ExchangeRates | null> {
    try {
        // Using a reliable free public API for initial setup
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour for performance and SEO
        });

        if (!res.ok) throw new Error('Failed to fetch currency data');
        return res.json();
    } catch (error) {
        console.error('Currency API Error:', error);
        return null;
    }
}

export const commonCurrencies = [
    'USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'AED', 'SAR', 'PKR'
];

export function getCurrencyName(code: string): string {
    const names: { [key: string]: string } = {
        USD: 'US Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
        INR: 'Indian Rupee',
        JPY: 'Japanese Yen',
        CAD: 'Canadian Dollar',
        AUD: 'Australian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        AED: 'UAE Dirham',
        SAR: 'Saudi Riyal',
        PKR: 'Pakistani Rupee',
    };
    return names[code] || code;
}
