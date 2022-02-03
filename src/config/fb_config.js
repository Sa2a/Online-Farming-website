// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/firestore';


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvOeUjau709OLu0QSoa80FIDAETRA2INQ",
  authDomain: "onlinefarming-f9428.firebaseapp.com",
  projectId: "onlinefarming-f9428",
  storageBucket: "onlinefarming-f9428.appspot.com",
  messagingSenderId: "496372913164",
  appId: "1:496372913164:web:0956ac8d7ac4b06211ca29",
  measurementId: "G-4D3PBGN5MG"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const db = firebase.firestore(firebaseApp);

export{
    db
};