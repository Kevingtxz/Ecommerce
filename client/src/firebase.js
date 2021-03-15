import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBt2-DRzitIbBoHb9MAMGcaScyN-MFGvBo",
    authDomain: "ecommerce-fe630.firebaseapp.com",
    projectId: "ecommerce-fe630",
    storageBucket: "ecommerce-fe630.appspot.com",
    messagingSenderId: "332215396492",
    appId: "1:332215396492:web:246ea9272d35b2df1473a9"
};
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
