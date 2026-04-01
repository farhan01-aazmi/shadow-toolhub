import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host');
    const url = request.nextUrl.clone();

    // 1. Force Apex to WWW redirect (SEO Standardization)
    // This handles nevy.in -> www.nevy.in for ALL paths including robots.txt
    if (hostname === 'nevy.in' || hostname === 'shadow-toolhub2.vercel.app') {
        url.hostname = 'www.nevy.in';
        url.port = '';
        return NextResponse.redirect(url, 301);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
