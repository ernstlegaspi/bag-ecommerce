import { NextRequest, NextResponse } from "next/server"

import { clientError } from "./lib/statusCodes"

export const config = {
	matcher: ['/', '/admin', '/api/bag']
}

export function middleware(request: NextRequest) {
	const isAuthenticated = request.cookies.get('next-auth.session-token')
	const pathname = request.nextUrl.pathname

	if(isAuthenticated && pathname === '/') {
		return NextResponse.redirect(new URL('/admin', request.url))
	}

	if(!isAuthenticated) {
		switch(pathname) {
			case '/admin':
				return NextResponse.redirect(new URL('/', request.url))
			case '/api/bag':
				return clientError({ code: 401 })
		}
	}
}
