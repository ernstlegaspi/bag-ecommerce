import { NextRequest, NextResponse } from "next/server"

export const config = {
	matcher: ['/', '/admin']
}

export function middleware(request: NextRequest) {
	const isAuthenticated = request.cookies.get('next-auth.session-token')
	const pathname = request.nextUrl.pathname

	if(isAuthenticated && pathname === '/') {
		return NextResponse.redirect(new URL('/admin', request.url))
	}

	if(!isAuthenticated && pathname !== '/') {
		return NextResponse.redirect(new URL('/', request.url))
	}
}
