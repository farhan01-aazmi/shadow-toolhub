import { Metadata } from 'next';
import Link from 'next/link';
import { getProgrammaticPosts } from '@/lib/blog/generator';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: "Nevy.in Blog - Insights, Tips & Tutorials",
    description: "Stay updated with the latest trends in finance, crypto, and web performance. Expert guides on how to use our tools for maximum benefit.",
    alternates: {
        canonical: "https://nevy.in/blog",
    },
};

export default async function BlogListingPage() {
    const posts = await getProgrammaticPosts();

    return (
        <div className="blog-container">
            <header className="blog-header">
                <h1 className="gradient-text">Insights & Guides</h1>
                <p className="blog-intro">
                    Expert analysis and tutorials to help you master our suite of tools and
                    stay ahead in the fast-paced USA markets.
                </p>
            </header>

            <div className="posts-grid">
                {posts.map((post) => (
                    <article key={post.slug} className="post-card card glass">
                        <div className="post-meta">
                            <span className="category-tag">{post.category}</span>
                            <span className="date-meta"><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <h2 className="post-title">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <div className="post-footer">
                            <span className="author-meta"><User size={14} /> {post.author}</span>
                            <Link href={`/blog/${post.slug}`} className="read-more">
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    );
}
