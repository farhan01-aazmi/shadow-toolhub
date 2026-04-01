import { Metadata } from 'next';
import Link from 'next/link';
import { getProgrammaticPosts } from '@/lib/blog/generator';

export const metadata: Metadata = {
    title: "Tech Resolutions Blog — Insights, Tips & Tutorials",
    description: "Stay updated with the latest trends in finance, crypto, and web performance. Expert guides on how to use our tools for maximum benefit.",
    alternates: {
        canonical: "https://www.nevy.in/blog",
    },
};

export default async function BlogListingPage() {
    const posts = await getProgrammaticPosts();

    // Deduplicate by slug — show each article only once
    const seen = new Set<string>();
    const uniquePosts = posts.filter(post => {
        if (seen.has(post.slug)) return false;
        seen.add(post.slug);
        return true;
    });

    // Category color mapping
    const catColors: Record<string, string> = {
        'Finance': 'c1',
        'Crypto': 'c2',
        'Web': 'c3',
        'Privacy': 'c4',
        'Authority Insights': 'c1',
    };

    return (
        <div className="blog-listing-page">
            {/* ── HERO HEADER ── */}
            <section className="blog-hero">
                <div className="blog-hero-bg" aria-hidden="true">BLOG</div>
                <div className="rv2">
                    <div className="sec-lbl">// blog &amp; guides</div>
                    <h1 className="blog-hero-title">
                        Insights<br />
                        <span className="out">that</span><br />
                        <span className="acc">matter.</span>
                    </h1>
                </div>
                <p className="blog-hero-desc">
                    Expert analysis and tutorials to help you master our suite of 70+ free tools and stay ahead in today&apos;s fast-paced digital world.
                </p>
            </section>

            {/* ── ARTICLES GRID ── */}
            <div className="blog-listing-container">
                <div className="blog-hd">
                    <div>
                        <div className="sec-lbl">// all articles</div>
                        <div className="sec-ttl" style={{ fontSize: '1.4rem' }}>Latest Articles</div>
                    </div>
                    <span className="link-all" style={{ opacity: 0.5 }}>
                        {uniquePosts.length} Articles
                    </span>
                </div>

                <div className="bgrid">
                    {uniquePosts.map((post, i) => (
                        <Link
                            key={post.slug}
                            className={`bpost ${i === 0 ? 'wide' : ''}`}
                            href={`/blog/${post.slug}`}
                        >
                            <div className="barr">↗</div>
                            <div>
                                <div className="bmeta">
                                    <span className={`bcat ${catColors[post.category] || 'c1'}`}>
                                        {post.category}
                                    </span>
                                    <span className="bdate">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>
                                <div className="btitle">{post.title}</div>
                            </div>
                            <div>
                                <div className="bexc">{post.excerpt}</div>
                                <div className="blog-author">
                                    {post.author}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="blog-cta-bar">
                    <div className="blog-cta-inner">
                        <div>
                            <div className="sec-lbl">// explore</div>
                            <div className="blog-cta-text">Discover 70+ free tools built for speed, privacy, and precision.</div>
                        </div>
                        <Link href="/all-tools" className="btn-a">All Tools →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
