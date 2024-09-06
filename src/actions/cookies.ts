import { setCookie, destroyCookie } from 'nookies';
import { redirect } from 'next/navigation';

import { HOME_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME } from '../lib/constants';

// Função para criar o cookie
export async function createCookie(usuario: string, ctx = undefined) {
  console.log("Criação do cookie");
  
  setCookie(ctx, SESSION_COOKIE_NAME, usuario, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 dia
    path: '/',
  });

  redirect(HOME_ROUTE);
}

// Função para remover o cookie
export async function removeCookie(ctx = undefined) {
  console.log("Remoção do cookie");
  
  destroyCookie(ctx, SESSION_COOKIE_NAME, {
    path: '/',
  });

  redirect(ROOT_ROUTE);
}
