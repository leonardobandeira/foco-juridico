import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyB-DMl_4BsacFzV8_eHFee-T6EciTh56MQ",
    authDomain: "foco-juridico.firebaseapp.com",
    projectId: "foco-juridico",
    storageBucket: "foco-juridico.appspot.com",
    messagingSenderId: "88310424877",
    appId: "1:88310424877:web:5c050c9113792512c59fa4",
    //apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    //authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    //projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default firebase;
