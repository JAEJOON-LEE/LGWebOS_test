import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9Tx_Btm1IQNhSGf9hcnZqEKKxoTGSRc8",
    authDomain: "webos-8f5bd.firebaseapp.com",
    projectId: "webos-8f5bd",
    storageBucket: "webos-8f5bd.appspot.com",
    messagingSenderId: "472019661630",
    appId: "1:472019661630:web:3157e23b961f2240d4f26f",
    measurementId: "G-KPY9JM10G9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };