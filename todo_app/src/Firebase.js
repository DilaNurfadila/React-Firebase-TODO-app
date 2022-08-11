// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHGsQYbHMT5vEaVjUs3q4FrB6kMzBKB5k",
    authDomain: "todo-app-cp-f8f58.firebaseapp.com",
    projectId: "todo-app-cp-f8f58",
    storageBucket: "todo-app-cp-f8f58.appspot.com",
    messagingSenderId: "837540792102",
    appId: "1:837540792102:web:b8f18287d33aa59d62a3e7",
    measurementId: "G-F4DSFPQC8Q"
})

const db = firebaseApp.firestore()

export default db