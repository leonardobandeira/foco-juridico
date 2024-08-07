"use client";

import { useContext } from 'react'; 
import AppContext from '../context/AppContext';

const useAppData = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppData must be used within an AppProvider');
    }
    return context;
};

export default useAppData;
