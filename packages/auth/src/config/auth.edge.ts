import NextAuth from 'next-auth';

import { authConfig } from './auth.config';

/**
 * Edge-compatible Auth.js instance
 *
 * This instance does not include the database adapter or database-heavy providers,
 * making it safe to use in Next.js Middleware and Edge Runtime.
 */
const nextAuthEdge = NextAuth(authConfig);

export const auth = nextAuthEdge.auth;
export const signIn: typeof nextAuthEdge.signIn = nextAuthEdge.signIn;
export const signOut: typeof nextAuthEdge.signOut = nextAuthEdge.signOut;
export const handlers = nextAuthEdge.handlers;
