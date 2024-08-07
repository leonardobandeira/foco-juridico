"use client";

import { ReactNode } from 'react';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { AppProvider } from '@/context/AppContext';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <AppProvider>
                        {children}
                    </AppProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
