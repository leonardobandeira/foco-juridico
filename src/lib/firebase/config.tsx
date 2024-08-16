import { getAuth } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);