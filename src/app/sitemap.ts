```typescript
import { MetadataRoute } from 'next';
import { commonCurrencies } from '@/lib/api/currency';
import { getTopCoins } from '@/lib/api/crypto';
import { getProgrammaticPosts } from '@/lib/blog/generator';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://nevy.in';

    // Static routes
    const staticRoutes = [
        '',
        '/tools/currency-converter',
        '/tools/crypto-tracker',
        '/tools/image-optimizer',
        '/tools/loan-calculator',
        '/blog',
    ].map((route) => ({
        url: `${ baseUrl }${ route } `,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }));

    // Blog posts
    const posts = await getProgrammaticPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${ baseUrl } /blog/${ post.slug } `,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Currency pairs (top 20 pairs for efficiency in sitemap)
    const currencyPairs = commonCurrencies.flatMap((from) =>
        commonCurrencies.filter(to => to !== from).slice(0, 3).map((to) => ({
            url: `${ baseUrl } /tools/currency - converter / ${ from.toLowerCase() } -to - ${ to.toLowerCase() } `,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.6,
        }))
    );

    // Crypto coins
    const coins = await getTopCoins(50);
    const cryptoRoutes = coins.map((coin) => ({
        url: `${ baseUrl } /tools/crypto - tracker / ${ coin.id } `,
        lastModified: new Date(),
        changeFrequency: 'hourly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...cryptoRoutes, ...currencyPairs];
}
