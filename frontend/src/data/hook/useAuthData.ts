"use client";

import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

const useAuthData = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAppData must be used within an AppProvider');
    }
    return context;
};

export default useAuthData;
