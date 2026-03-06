import { MetadataRoute } from 'next';
import { commonCurrencies } from '@/lib/api/currency';
import { getTopCoins } from '@/lib/api/crypto';
import { getProgrammaticPosts } from '@/lib/blog/generator';

// Force fresh generation every hour — prevents stale cache
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // CRITICAL: This MUST be nevy.in — the verified domain in Google Search Console
    const baseUrl = 'https://nevy.in';

    // Static routes — includes ALL pages on the site
    const staticRoutes = [
        '',
        '/tools/currency-converter',
        '/tools/crypto-tracker',
        '/tools/image-optimizer',
        '/tools/loan-calculator',
        '/tools/word-counter',
        '/tools/meta-generator',
        '/blog',
        '/about',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.9,
    }));

    // Blog posts
    const posts = await getProgrammaticPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Currency pairs (top 20 pairs for efficiency in sitemap)
    const currencyPairs = commonCurrencies.flatMap((from) =>
        commonCurrencies.filter(to => to !== from).slice(0, 3).map((to) => ({
            url: `${baseUrl}/tools/currency-converter/${from.toLowerCase()}-to-${to.toLowerCase()}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.6,
        }))
    );

    // Crypto coins
    const coins = await getTopCoins(50);
    const cryptoRoutes = coins.map((coin) => ({
        url: `${baseUrl}/tools/crypto-tracker/${coin.id}`,
        lastModified: new Date(),
        changeFrequency: 'hourly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...cryptoRoutes, ...currencyPairs];
}
