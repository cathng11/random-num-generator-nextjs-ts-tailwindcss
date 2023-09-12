import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid'

export function middleware(request: NextRequest) {
  const nonce = uuidv4();
  const csp = `script-src 'nonce-${nonce}';`;

  // Clone the request headers
  const requestHeaders = new Headers(request.headers);

  // Set the CSP header so that Next.js can read it and generate tags with the nonce
  requestHeaders.set('content-security-policy', csp);

  // Create new response
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders
    }
  });

  // Also set the CSP header in the response so that it is outputted to the browser
  response.headers.set('content-security-policy', csp);

  return response;
}