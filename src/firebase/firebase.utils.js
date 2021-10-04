import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyCKPyq0yP0ZDVVpIS_7cK0SBDwhV4vpSeU',
  authDomain: 'huan-db.firebaseapp.com',
  projectId: 'huan-db',
  storageBucket: 'huan-db.appspot.com',
  messagingSenderId: '888763805068',
  appId: '1:888763805068:web:81f104658d303795963aa9',
  measurementId: 'G-WTRR9XDW2T',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
