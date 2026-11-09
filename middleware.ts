import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get language from cookie, fallback to English
  const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en'
  
  // Clone the request headers and inject the resolved locale
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)

  // Pass the locale header down to Server Components without changing the URL
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
}
