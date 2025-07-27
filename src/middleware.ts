import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Redirect root "/" to "/en"
	if (pathname === '/') {
		const url = request.nextUrl.clone();
		url.pathname = '/en';
		return NextResponse.redirect(url);
	}

	const response = NextResponse.next();

	// Extract language from pathname like /en, /fr, etc.
	const lang = pathname.split('/')[1];

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

// Match all routes so we can catch "/"
export const config = {
	matcher: ['/((?!_next|api|favicon.ico).*)'], // exclude static and API routes
};
