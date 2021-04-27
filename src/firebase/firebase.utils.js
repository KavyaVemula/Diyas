import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDEZrFZSMVwnM2RORjmrflWR68zpea0xHA",
  authDomain: "diyas-db.firebaseapp.com",
  projectId: "diyas-db",
  storageBucket: "diyas-db.appspot.com",
  messagingSenderId: "200431594742",
  appId: "1:200431594742:web:c810d427f62515dc4850d7",
  measurementId: "G-M9E33HDLZF"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// // Importing firebase from firebase/app utility; Base import
// import firebase from 'firebase/app';
// import 'firebase/firestore'; // for db
// import 'firebase/auth'; // for authentication

// const config = {
//     apiKey: "AIzaSyDEZrFZSMVwnM2RORjmrflWR68zpea0xHA",
//     authDomain: "diyas-db.firebaseapp.com",
//     projectId: "diyas-db",
//     storageBucket: "diyas-db.appspot.com",
//     messagingSenderId: "200431594742",
//     appId: "1:200431594742:web:c810d427f62515dc4850d7",
//     measurementId: "G-M9E33HDLZF"
//   };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account '}) // This is saying that whenever we use google auth, it should display a prompt
// // We have different pop ups available, like twitter, linkedin etc, but we want google, so passing in provider as input
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;

