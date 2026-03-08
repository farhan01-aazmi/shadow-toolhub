import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StructuredData from "@/components/seo/StructuredData";
import { getPostBySlug, getProgrammaticPosts } from '@/lib/blog/generator';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPostBySlug((await params).slug);
    if (!post) return { title: 'Article Not Found' };

    return {
        title: `${post.title} | Shadow ToolHub Blog`,
        description: post.excerpt,
        keywords: post.tags,
        alternates: {
            canonical: `https://nevy.in/blog/${post.slug}`,
        }
    };
}

export async function generateStaticParams() {
    const posts = await getProgrammaticPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetailPage({ params }: Props) {
    const post = await getPostBySlug((await params).slug);
    if (!post) notFound();

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "datePublished": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://nevy.in/blog/${post.slug}`
        },
        "publisher": {
            "@type": "Organization",
            "name": "Shadow Event ToolHub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://nevy.in/logo.png"
            }
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://nevy.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://nevy.in/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://nevy.in/blog/${post.slug}`
            }
        ]
    };

    return (
        <div className="article-container">
            <StructuredData data={articleSchema} />
            <StructuredData data={breadcrumbSchema} />
            <nav className="breadcrumb">
                <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{post.title}</span>
            </nav>

            <Link href="/blog" className="back-link">
                <ArrowLeft size={16} /> Back to Insights
            </Link>

            <article className="article-main card glass">
                <header className="article-header">
                    <div className="post-meta">
                        <span className="category-tag">{post.category}</span>
                        <span className="date-meta"><Calendar size={14} /> {new Date(post.date).toLocaleDateString()}</span>
                        <span className="author-meta"><User size={14} /> {post.author}</span>
                    </div>
                    <h1 className="article-title">{post.title}</h1>
                    <p className="article-excerpt">{post.excerpt}</p>
                </header>

                <div
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <footer className="article-footer">
                    <div className="tags-list">
                        {post.tags.map(tag => (
                            <span key={tag} className="tag-item"><Tag size={12} /> {tag}</span>
                        ))}
                    </div>

                    <div className="share-section">
                        <span>Share this article:</span>
                        <div className="share-links">
                            <button title="Share on Twitter"><Twitter size={18} /></button>
                            <button title="Share on Facebook"><Facebook size={18} /></button>
                            <button title="Share on LinkedIn"><Linkedin size={18} /></button>
                        </div>
                    </div>
                </footer>
            </article>

        </div>
    );
}
