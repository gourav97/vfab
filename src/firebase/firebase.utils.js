import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCsAi50ofxXcPOObGxILzMbSQhn-5k33DU",
    authDomain: "vfab-db-91f7c.firebaseapp.com",
    projectId: "vfab-db-91f7c",
    storageBucket: "vfab-db-91f7c.appspot.com",
    messagingSenderId: "963770066940",
    appId: "1:963770066940:web:890fa0f7f4deec90f0f479",
    measurementId: "G-LPBY99MKFT"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore = firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;