// app/api/auth/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { setCookie } from 'nookies';
import { SESSION_COOKIE_NAME } from '@/lib/constants';

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ error: 'Token inválido' }, { status: 400 });
  }

  setCookie({ res: NextResponse }, SESSION_COOKIE_NAME, token, {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 60 * 60 * 24, 
    path: '/', 
  });

  return NextResponse.json({ message: 'Login bem-sucedido' }, { status: 200 });
}
