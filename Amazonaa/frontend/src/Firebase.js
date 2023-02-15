import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIZ90hPFGpgQBFo1rW7MMchBJCVo1jTVQ",
    authDomain: "clone-pabbu.firebaseapp.com",
    projectId: "clone-pabbu",
    storageBucket: "clone-pabbu.appspot.com",
    messagingSenderId: "1083048274966",
    appId: "1:1083048274966:web:bc3f15162a01d90ce95937",
    measurementId: "G-MBBQ5VWE8G"
});

const auth = firebase.auth();

export {auth};