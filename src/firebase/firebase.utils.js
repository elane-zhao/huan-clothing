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

// create customized data fields for a user document
export const createUserProfileDocument = async (
  userAuth,
  additionalData,
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  //   console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // DON'T forget the 'await' keyword as Databse CRUD operations are all 'async'!!!
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(`Error creating user`, error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
