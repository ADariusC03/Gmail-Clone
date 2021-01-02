import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-Li9qnfuRNldP8AeyVDaYozI9mWGtrDY",
    authDomain: "mock-mail.firebaseapp.com",
    projectId: "mock-mail",
    storageBucket: "mock-mail.appspot.com",
    messagingSenderId: "919940583586",
    appId: "1:919940583586:web:a7b7ca539f0e10bab687fb",
    measurementId: "G-JK9TV2DSBW"
  };

  // after the typing in the import and the const girebaseConfig
  // use npm install --save firebase, in the terminal.
  // add the following below.

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // db is the firebase database
  const db = firebaseApp.firestore();

 // authentication in the app
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }; 