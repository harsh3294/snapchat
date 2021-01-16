import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABbFKn8saxGl5XMMEEVbAiV8o_watYDRc",
  authDomain: "snapchat-488c6.firebaseapp.com",
  projectId: "snapchat-488c6",
  storageBucket: "snapchat-488c6.appspot.com",
  messagingSenderId: "354545259791",
  appId: "1:354545259791:web:ced02ee634d5b6f7b61a7a",
  measurementId: "G-WC9L30N4NN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
