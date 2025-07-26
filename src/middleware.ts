// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const response = NextResponse.next();

	// Extract lang from the URL path (e.g., /en/home)
	const pathname = request.nextUrl.pathname;
	const lang = pathname.split('/')[1]; // 'en', 'fr', etc.

	if (lang) {
		response.cookies.set('lang', lang, {
			path: '/',
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production',
			httpOnly: true,
		});
	}

	return response;
}

// Only run on routes like /en/... or /fr/...
export const config = {
	matcher: ['/:lang*'],
};
