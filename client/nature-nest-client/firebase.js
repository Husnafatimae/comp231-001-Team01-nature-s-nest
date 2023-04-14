import firebase from 'firebase/compat/app';

import { getFirestore} from 'firebase/firestore/lite';

import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyAE60vmsp4JOS6K0AiuqBdrs7qyIOzXRa8",
    authDomain: "nature-s-nest-6d43c.firebaseapp.com",
    projectId: "nature-s-nest-6d43c",
    storageBucket: "nature-s-nest-6d43c.appspot.com",
    messagingSenderId: "1007313973975",
    appId: "1:1007313973975:web:b253792c68a107c74ab692",
    measurementId: "G-5TPBFVXMJY"
  };
  
// Initialize Firebase
let app; 
if(firebase.apps.length ===0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = getFirestore(app);


export{ firebase, db };