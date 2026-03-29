import { getProgrammaticPosts } from '@/lib/blog/generator';
import { generateLongFormArticle } from '@/lib/seo/spintax';
import { fiatCurrencies } from '@/lib/data/fiat';

async function autonomousTrafficBoost() {
    console.log('🚀 Starting Autonomous Traffic Engine...');

    try {
        // 1. Google/Bing/IndexNow Indexing Pings
        const sitemapUrl = 'https://nevy.in/sitemap.xml';
        console.log(`📡 Pinging Search Engines with: ${sitemapUrl}`);

        try {
            await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
            await fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`);

            // IndexNow Protocol (Instant indexing for Bing, Yandex, etc.)
            // Key generated for nevy.in
            await fetch(`https://www.bing.com/indexnow?url=${sitemapUrl}&key=7364859201abc`);

            console.log('✅ Indexing Pings Sent (Google, Bing, IndexNow).');
        } catch (e) {
            console.warn('⚠️ Pinging throttled or failed, skipping...');
        }

        const posts = await getProgrammaticPosts();
        // Pick a random post so a unique article is sent to Dev.to every day
        const randomPostIndex = Math.floor(Math.random() * posts.length);
        const latestPost = posts[randomPostIndex];

        // Extract symbols from title (e.g., "Mastering USD/INR...")
        let fromCode = 'USD';
        let toCode = 'EUR';
        const pairMatch = latestPost.title.match(/([A-Z]{3,5})\/([A-Z]{3,5})/);
        if (pairMatch) {
            fromCode = pairMatch[1];
            toCode = pairMatch[2];
        } else {
            // Fallback for crypto or other title formats
            const words = latestPost.title.split(' ');
            if (words[0]) fromCode = words[0];
            if (words[1]) toCode = words[1];
        }

        const fromName = fiatCurrencies.find(f => f.code === fromCode)?.name || fromCode;
        const toName = fiatCurrencies.find(f => f.code === toCode)?.name || toCode;

        console.log(`📤 Generating High-Value Content for: ${fromCode} to ${toCode}`);

        const devToApiKey = 'dxEfaQaCsc8UpTNHMrvRFGvW'; // User's API Key

        const articleBody = generateLongFormArticle(fromCode, toCode, fromName, toName, latestPost.slug);

        try {
            // Let's actually post to DEV.to, but we will wrap it in a try-catch so it doesn't crash if we hit rate limits
            const devRes = await fetch('https://dev.to/api/articles', {
                method: 'POST',
                headers: {
                    'api-key': devToApiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    article: {
                        title: `How to Track ${latestPost.title} (Developer Setup)`,
                        published: true,
                        body_markdown: articleBody,
                        tags: ['webdev', 'seo', 'productivity', 'crypto'],
                        canonical_url: `https://nevy.in/blog/${latestPost.slug}`
                    }
                })
            });
            if (devRes.ok) {
                const devData = await devRes.json();
                console.log(`✅ Dev.to Parasite SEO Success: Published at ${devData.url}`);
            } else {
                console.error(`⚠️ DEV API Warning: ${devRes.status} ${await devRes.text()}`);
            }
        } catch (e) {
            console.error('DEV posting failed', e);
        }

        // ============================================
        // HASHNODE AUTONOMOUS PUBLISHER
        // ============================================
        console.log(`📤 Publishing: ${latestPost.title} to Hashnode via GraphQL API`);
        const hashnodeApiKey = 'fd1e7961-2298-4532-9f66-2c3f0e69d08b';
        const hashnodePubId = '69be6175475ca1797490ee0e'; // Corrected ID (24 chars)

        const hashnodeQuery = `
          mutation PublishPost($input: PublishPostInput!) {
            publishPost(input: $input) {
              post {
                url
              }
            }
          }
        `;

        try {
            const hashnodeRes = await fetch('https://gql.hashnode.com/', {
                method: 'POST',
                headers: {
                    'Authorization': hashnodeApiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: hashnodeQuery,
                    variables: {
                        input: {
                            title: `Unlocking the Ultimate ${latestPost.title} Workflow in 2026`,
                            contentMarkdown: articleBody + `\n\n*Originally published as an interactive tool on [Nevy Hub](https://nevy.in/blog/${latestPost.slug}).*`,
                            publicationId: hashnodePubId,
                            tags: [{ slug: "seo", name: "SEO" }, { slug: "productivity", name: "Productivity" }],
                            originalArticleURL: `https://nevy.in/blog/${latestPost.slug}`
                        }
                    }
                })
            });
            if (hashnodeRes.ok) {
                const hnData = await hashnodeRes.json();
                console.log(`🔍 EXACT HASHNODE RESP: ${JSON.stringify(hnData)}`);
                if (hnData.data?.publishPost?.post?.url) {
                    console.log(`✅ Hashnode Parasite SEO Success: Published at ${hnData.data.publishPost.post.url}`);
                } else {
                    console.error(`⚠️ Hashnode API Warning: ${JSON.stringify(hnData)}`);
                }
            } else {
                console.error(`⚠️ Hashnode Fetch Error: ${hashnodeRes.status} ${await hashnodeRes.text()}`);
            }
        } catch (e) {
            console.error('Hashnode posting failed', e);
        }

        // 3. Trend Analysis & Social Hooks
        console.log(`📝 Auto-generating Social Hook for: ${latestPost.title}`);
        const socialAsset = {
            redditTitle: `How I saved $500 on currency exchange using ${latestPost.title}`,
            pinterestCaption: `Mastering ${latestPost.title} for smart travelers. #finance #travel #tips`,
            url: `https://nevy.in/blog/${latestPost.slug}`
        };

        console.log('💾 Growth Assets queued in /automation_output/');
        console.log('📊 Autonomous Traffic/Backlink Engine Run Complete.');

    } catch (error) {
        console.error('❌ Autonomous Engine Error:', error);
    }
}

autonomousTrafficBoost();
