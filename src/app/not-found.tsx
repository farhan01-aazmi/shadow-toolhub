import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container px-5 py-24 max-w-4xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="mb-4">
        <span className="text-amber font-mono text-sm tracking-widest uppercase">// ERROR 404</span>
      </div>
      
      <h1 className="text-7xl mb-6 font-bold text-gradient">Page Not Found</h1>
      
      <p className="text-sub text-lg mb-10 max-w-xl mx-auto leading-relaxed">
        The tool or guide you&apos;re looking for has been moved or doesn&apos;t exist. 
        Don&apos;t worry, we have 70+ other free utilities that work perfectly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link href="/" className="bg-amber text-[var(--bg)] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
          Return Home
        </Link>
        <Link href="/all-tools" className="bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] px-8 py-3 rounded-full font-bold hover:border-amber transition-colors">
          Browse All Tools
        </Link>
      </div>
      
      <div className="mt-16 text-sub text-sm">
        <p>If you believe this is a broken link, please <Link href="/contact" className="hover:text-amber transition-colors underline">contact us</Link>.</p>
      </div>
    </div>
  );
}
