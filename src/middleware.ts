import { NextRequest, NextResponse } from 'next/server';
import { HOME_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME } from './lib/constants';

const protectedRoutes = [
  '/sobre'
 /*  '/sobre',
  '/alerta',
  '/gerenciar-paineis',
  '/meus-dados',
  '/home', */
];


export default function middleware(request: NextRequest) {
  //const session = request.cookies.get(SESSION_COOKIE_NAME)?.value || '';
  /* if (!session && protectedRoutes.includes(request.nextUrl.pathname)) {
    console.log("Middleware indo para login")
    const loginURL = new URL(ROOT_ROUTE, request.nextUrl.origin);
    return NextResponse.redirect(loginURL);
  }

  if (session && request.nextUrl.pathname === ROOT_ROUTE) {
    console.log("Middleware indo para home")

    const homeURL = new URL(HOME_ROUTE, request.nextUrl.origin);
    return NextResponse.redirect(homeURL);
  } */

  //console.log("Middleware indo normal")
  //return NextResponse.next();
}
