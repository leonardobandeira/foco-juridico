"use client"

import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';

const SESSION_COOKIE_NAME = 'admin-foco-juridico-auth'; // O mesmo nome usado para definir o cookie

export default function TestPage() {
  const [cookieValue, setCookieValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Define o cookie para teste
    setCookie(null, SESSION_COOKIE_NAME, 'testValue', {
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: '/',
    });

    // Obtém o cookie
    const cookies = parseCookies();
    const token = cookies[SESSION_COOKIE_NAME];
    console.log('Token:', token);
    setCookieValue(token);
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
      <p>Cookie Value: {cookieValue}</p>
    </div>
  );
}
