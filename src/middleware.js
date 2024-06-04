import { NextResponse, userAgent } from 'next/server'

export function middleware(request) {

  const { device } = userAgent(request)
  const viewport = device?.type === 'mobile' ? 'mobile' : 'desktop'

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-device-type", viewport)

  return NextResponse.next({request: {headers: requestHeaders}})
  
}

export const config = {matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']}