import {
  type User,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword as signInWithEmailPass,
  signOut as signOutFirebase,
} from 'firebase/auth';

import { firebaseAuth } from './config';

// Função para monitorar mudanças no estado de autenticação
export function onAuthStateChanged(callback: (authUser: User | null) => void) {
  return _onAuthStateChanged(firebaseAuth, callback);
}

// Função para login com Google
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(firebaseAuth, provider);

    if (!result || !result.user) {
      throw new Error('Google sign in failed');
    }
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
}

// Função para logout com Google
export async function signOutWithGoogle() {
  try {
    await signOutFirebase(firebaseAuth);
  } catch (error) {
    console.error('Error signing out with Google', error);
  }
}

// cadastro com e-mail e senha
export async function cadastrar(email: string, senha: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, senha);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing up with email and password', error);
  }
}

// login com email e senha
export async function signInWithEmailAndPass(email: string, senha: string) {
  try {
    const userCredential = await signInWithEmailPass(firebaseAuth, email, senha);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in with email and password', error);
  }
}

// logout de email e senha
export async function signOutWithEmailAndPass() {
  try {
    await signOutFirebase(firebaseAuth);
  } catch (error) {
    console.error('Error signing out with email and password', error);
  }
}
