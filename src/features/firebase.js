import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAA9qpirdDQsm5SHJZNdhOt-GYe1VCOrSo",
    authDomain: "snapchat-clone-1dc84.firebaseapp.com",
    projectId: "snapchat-clone-1dc84",
    storageBucket: "snapchat-clone-1dc84.appspot.com",
    messagingSenderId: "642291895312",
    appId: "1:642291895312:web:97782cc2651a8163ec8e95"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };