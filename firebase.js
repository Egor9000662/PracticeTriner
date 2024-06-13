// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3KOq-r4wS_TBQKachlp1hC35ma8hnJAc",
    authDomain: "itgirlspracticetrainer.firebaseapp.com",
    projectId: "itgirlspracticetrainer",
    storageBucket: "itgirlspracticetrainer.appspot.com",
    messagingSenderId: "742916163763",
    appId: "1:742916163763:web:dd7e3162d344999d8008c6",
    measurementId: "G-BZF62LE9SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
