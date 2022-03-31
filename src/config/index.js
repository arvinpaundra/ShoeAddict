import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDePARx1abCs4hfOD3AjUtX0jgij3ePzzI',
  authDomain: 'shoeaddict-963cc.firebaseapp.com',
  projectId: 'shoeaddict-963cc',
  storageBucket: 'shoeaddict-963cc.appspot.com',
  messagingSenderId: '633236450684',
  appId: '1:633236450684:web:d8d6d8a3146b0c77a1c8f9',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
