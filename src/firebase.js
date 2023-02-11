import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDn2K3-C2qocZ_ATNiKXpO_QaS608pSY-Y',
  authDomain: 'lem-chat-app.firebaseapp.com',
  projectId: 'lem-chat-app',
  storageBucket: 'lem-chat-app.appspot.com',
  messagingSenderId: '813479028728',
  appId: '1:813479028728:web:d426edd762218f758e980d',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getDatabase();
