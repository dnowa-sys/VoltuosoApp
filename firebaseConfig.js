// Replace these values with your Firebase project config
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'IzaSyCnBI7EleabBwbW6eN1M23tTWzJYhSrihA',
  authDomain: 'Voltuoso.firebaseapp.com',
  projectId: 'voltuoso-91370',
  storageBucket: 'Voltuoso.appspot.com',
  messagingSenderId: '601405213922',
  appId: '1:601405213922:ios:5b28fcf3b8c01d7533e2bb',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
