import { commonCurrencies } from '@/lib/api/currency';
import { CryptoCoin } from '@/lib/api/crypto';

export interface PinAsset {
    title: string;
    description: string;
    altText: string;
    link: string;
}

export interface RedditTemplate {
    subreddit: string;
    title: string;
    body: string;
}

export class AssetGenerator {
    private baseUrl: string;

    constructor(baseUrl: string = 'https://nevy.in') {
        this.baseUrl = baseUrl;
    }

    /**
     * Generates Pinterest assets for Currency Pairs
     */
    generateCurrencyPins(): PinAsset[] {
        const pairs = ['USD/EUR', 'GBP/USD', 'USD/INR', 'EUR/GBP', 'USD/CAD'];
        return pairs.map(pair => {
            const [from, to] = pair.split('/');
            return {
                title: `Instant ${from} to ${to} Conversion - 100% Free Tool`,
                description: `Need to convert ${from} to ${to}? Use our lightning-fast Currency Converter for real-time rates. No hidden fees. Optimized for mobile. #CurrencyExchange #Finance #Tools`,
                altText: `Graphic showing ${from} to ${to} exchange rate on Nevy.in`,
                link: `${this.baseUrl}/tools/currency-converter/${from.toLowerCase()}-${to.toLowerCase()}`
            };
        });
    }

    /**
     * Generates Pinterest assets for Top Crypto Coins
     */
    generateCryptoPins(coins: CryptoCoin[]): PinAsset[] {
        return coins.slice(0, 5).map(coin => ({
            title: `Live ${coin.name} (${coin.symbol.toUpperCase()}) Price Tracker`,
            description: `Track ${coin.name} prices, market cap, and 24h change in real-time. Stay ahead of the crypto market with Shadow Event's premium dashboard. #Crypto #Bitcoin #Investing`,
            altText: `${coin.name} price chart and data dashboard`,
            link: `${this.baseUrl}/tools/crypto-tracker/${coin.id}`
        }));
    }

    /**
     * Generates Reddit post templates for diverse subreddits
     */
    generateRedditPosts(): RedditTemplate[] {
        return [
            {
                subreddit: 'r/personalfinance',
                title: 'Helpful Tool: Free Loan & Mortgage Calculator with Visual Breakdown',
                body: `Hey everyone, I built a free tool to help estimate monthly payments and total interest for loans/mortgages. It includes a visual breakdown of principal vs interest. Check it out here: ${this.baseUrl}/tools/loan-calculator`
            },
            {
                subreddit: 'r/webdev',
                title: 'Fast Browser-Based Image Optimizer (WebP/JPEG/PNG)',
                body: `I've been working on a suite of utility tools. Just finished an image optimizer that processes everything locally in the browser for maximum privacy and speed. Feedback appreciated! ${this.baseUrl}/tools/image-optimizer`
            }
        ];
    }
}
