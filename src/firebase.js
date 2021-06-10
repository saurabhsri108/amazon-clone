import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAI8VgrK66v5SLX7iGU3hxfP9EWjzPqg4M',
  authDomain: 'clone-22598.firebaseapp.com',
  projectId: 'clone-22598',
  storageBucket: 'clone-22598.appspot.com',
  messagingSenderId: '738606767135',
  appId: '1:738606767135:web:4faa79224053907b02c92a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
