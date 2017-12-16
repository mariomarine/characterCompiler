import firebase from 'firebase';
import { firebase_key } from './secrets.js'

var config = {
    apiKey: firebase_key,
    authDomain: "character-compiler.firebaseapp.com",
    databaseURL: "https://character-compiler.firebaseio.com",
    projectId: "character-compiler",
    storageBucket: "",
    messagingSenderId: "732543137021"
    };
firebase.initializeApp(config);

export default firebase;

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

