import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBV2L8xdR2OBDhyUxoTk0fx6Mlwqrt58o",
    authDomain: "instagram-d-55073.firebaseapp.com",
    projectId: "instagram-d-55073",
    storageBucket: "instagram-d-55073.appspot.com",
    messagingSenderId: "330192141086",
    appId: "1:330192141086:web:c664c103389e5e3316270f"
});

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}