import { commonCurrencies } from '@/lib/api/currency';
import { getProgrammaticPosts } from '@/lib/blog/generator';
import { fiatCurrencies } from '@/lib/data/fiat';

// Revalidate every 6 hours — Google can cache and read this properly
export const revalidate = 21600;

// Top 50 crypto coins hardcoded so sitemap doesn't fail if API is down
const CRYPTO_COINS = [
    'bitcoin', 'ethereum', 'tether', 'binancecoin', 'solana', 'ripple', 'usd-coin',
    'staked-ether', 'dogecoin', 'cardano', 'tron', 'avalanche-2', 'shiba-inu',
    'polkadot', 'chainlink', 'bitcoin-cash', 'near', 'uniswap', 'litecoin',
    'pepe', 'internet-computer', 'dai', 'aptos', 'stellar', 'ethereum-classic',
    'hedera-hashgraph', 'render-token', 'filecoin', 'cosmos', 'immutable-x',
    'optimism', 'arbitrum', 'the-graph', 'injective-protocol', 'vechain',
    'maker', 'theta-token', 'fantom', 'aave', 'algorand', 'flow', 'axie-infinity',
    'the-sandbox', 'decentraland', 'eos', 'neo', 'iota', 'kava', 'zcash', 'dash'
];

export async function GET() {
    const baseUrl = 'https://www.nevy.in';
    const today = new Date().toISOString().split('T')[0];

    // 1. Static pages — highest priority
    const staticRoutes = [
        { path: '', priority: '1.0', freq: 'daily' },
        { path: '/tools/currency-converter', priority: '0.9', freq: 'daily' },
        { path: '/tools/crypto-tracker', priority: '0.9', freq: 'daily' },
        { path: '/tools/image-optimizer', priority: '0.9', freq: 'weekly' },
        { path: '/tools/loan-calculator', priority: '0.9', freq: 'weekly' },
        { path: '/tools/word-counter', priority: '0.9', freq: 'weekly' },
        { path: '/tools/meta-generator', priority: '0.9', freq: 'weekly' },
        { path: '/tools/us-income-tax-calculator', priority: '0.9', freq: 'weekly' },
        { path: '/blog', priority: '0.8', freq: 'daily' },
        { path: '/about', priority: '0.5', freq: 'monthly' },
        { path: '/contact', priority: '0.5', freq: 'monthly' },
        {path: '/privacy-policy/', priority: '0.3', freq: 'yearly'},
        {path: '/terms-of-service/', priority: '0.3', freq: 'yearly'},
    ];

    // 2. Blog posts
    let blogRoutes: { path: string; priority: string; freq: string }[] = [];
    try {
        const posts = await getProgrammaticPosts();
        blogRoutes = posts.map(post => ({
            path: `/blog/${post.slug}`,
            priority: '0.7',
            freq: 'weekly',
        }));
    } catch { /* fail silently — don't break sitemap */ }

    // 3. Currency pairs — always available (no API dependency)
    const currencyPairs = commonCurrencies.flatMap(from =>
        commonCurrencies.filter(to => to !== from).slice(0, 3).map(to => ({
            path: `/tools/currency-converter/${from.toLowerCase()}-to-${to.toLowerCase()}`,
            priority: '0.6',
            freq: 'daily',
        }))
    );

    // 4. Crypto coins — hardcoded list (no API dependency)
    const cryptoRoutes = CRYPTO_COINS.map(coin => ({
        path: `/tools/crypto-tracker/${coin}`,
        priority: '0.6',
        freq: 'daily',
    }));

    // 5. Mass Programmatic Pages (The 10k Core)
    // To prevent API timeouts in Vercel, we output the top ~1000 highest traffic permutations.
    // The rest of the 9,000+ will be crawled via our Hub & Spoke HTML Directory.
    const massConvertRoutes: { path: string; priority: string; freq: string }[] = [];

    // Top 30 Major Fiats against all other fiats (30 * 100 = 3,000 links)
    // This provides a massive surface area for Google indexing
    const majorFiats = fiatCurrencies.slice(0, 30).map(f => f.code);
    majorFiats.forEach(from => {
        fiatCurrencies.slice(0, 100).forEach(to => {
            if (from !== to.code) {
                massConvertRoutes.push({
                    path: `/convert/${from.toLowerCase()}-to-${to.code.toLowerCase()}`,
                    priority: '0.5',
                    freq: 'weekly'
                });
            }
        });
    });

    // (Removed Crypto-to-Fiat combinations since Currency Converter tool is Fiat only)

    const allRoutes = [...staticRoutes, ...blogRoutes, ...currencyPairs, ...cryptoRoutes, ...massConvertRoutes];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map((r: any) => `  <url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=21600, stale-while-revalidate=43200',
        },
    });
}
