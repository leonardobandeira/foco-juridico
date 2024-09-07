import { setCookie, destroyCookie } from 'nookies';

import { SESSION_COOKIE_NAME } from '../lib/constants';

// Função para criar o cookie
export function createCookie(usuario: string, ctx = undefined) {
  console.log("Criação do cookie");
  setCookie(ctx, SESSION_COOKIE_NAME, usuario, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 dia
    path: '/',
  });
}

// Função para remover o cookie
export function removeCookie(ctx = undefined) {
  console.log("Remoção do cookie");
  destroyCookie(ctx, SESSION_COOKIE_NAME, {
    path: '/',
  });
}
