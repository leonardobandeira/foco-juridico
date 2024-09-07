import { getAuth } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB-DMl_4BsacFzV8_eHFee-T6EciTh56MQ",
  authDomain: "foco-juridico.firebaseapp.com",
  projectId: "foco-juridico",
  storageBucket: "foco-juridico.appspot.com",
  messagingSenderId: "88310424877",
  appId: "1:88310424877:web:5c050c9113792512c59fa4",
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDatabase = getDatabase(firebaseApp);
