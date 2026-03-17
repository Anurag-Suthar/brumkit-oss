import { authMiddleware } from '@repo/auth/edge';

export default authMiddleware({
  publicRoutes: ['/'],
  anonymousRoutes: [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/verify-email',
    '/verify-email-change',
    '/login-demo',
  ],
  protectedRoutes: [
    '/dashboard/*',
    '/profile/*',
    '/notifications/*',
    '/logout',
  ],
  adminRoutes: ['/admin/*'],
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
