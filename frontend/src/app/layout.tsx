"use client";

import { ReactNode } from 'react';
import './globals.css';
/* import { AuthProvider } from '@/data/context/AuthContext';
 */import { AppProvider } from '@/data/context/AppContext';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AppProvider>
                    {children}
                </AppProvider>
            </body>
        </html>
    );
}
