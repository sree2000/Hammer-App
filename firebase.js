import firebase from 'firebase/app'

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDTL4kFzYhpy4RqEQd1FxNC_4uBI1gHzn8",
    authDomain: "hammer-app-8749f.firebaseapp.com",
    projectId: "hammer-app-8749f",
    storageBucket: "hammer-app-8749f.appspot.com",
    messagingSenderId: "747176601834",
    appId: "1:747176601834:web:65c11dec08e6708ab64f93",
    measurementId: "G-ZZDWRBCLZ7"
};

firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const db = firebase.firestore()

export {firebase, db}