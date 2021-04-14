import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAFkRsURkWmVa3jjp4Jjh__ucP_nI4kaNw",
    authDomain: "blood-bowl-76b6b.firebaseapp.com",
    databaseURL: "https://blood-bowl-76b6b-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "blood-bowl-76b6b",
    storageBucket: "blood-bowl-76b6b.appspot.com",
    messagingSenderId: "734441205665",
    appId: "1:734441205665:web:ab58e67b8141d9103625e0",
    measurementId: "G-ZQSHB35R50"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase