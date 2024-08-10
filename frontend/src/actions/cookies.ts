'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HOME_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME } from '../lib/constants';

export async function createCookie(usuario: string) {
  cookies().set(SESSION_COOKIE_NAME, usuario, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
    path: '/',
  });

  redirect(HOME_ROUTE);
}

export async function removeCookie() {
  cookies().delete(SESSION_COOKIE_NAME);

  redirect(ROOT_ROUTE);
}