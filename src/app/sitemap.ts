import { MetadataRoute } from 'next';
import { getProgrammaticPosts } from '@/lib/blog/generator';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nevy.in';
  
  // Static Routes
  const routes = ['', '/all-tools', '/blog', '/about', '/contact', '/privacy-policy', '/terms-of-service', '/disclaimer'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog Posts
  const posts = await getProgrammaticPosts();
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Discover Tool Routes
  const toolsDir = path.join(process.cwd(), 'src/app/tools');
  let toolRoutes: { url: string; lastModified: Date; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" | "always" | "hourly" | "never"; priority: number; }[] = [];
  
  if (fs.existsSync(toolsDir)) {
    const folders = fs.readdirSync(toolsDir, { withFileTypes: true });
    
    // Add base tools (excluding dynamic brackets like [pair])
    toolRoutes = folders
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('['))
      .map(dirent => ({
        url: `${baseUrl}/tools/${dirent.name}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      }));
  }

  return [...routes, ...postRoutes, ...toolRoutes];
}
