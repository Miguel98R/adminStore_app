// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDreXf_Xxg03xu6YHbRIp9tyJYj-4uHwmA",
    authDomain: "crud-store-daf04.firebaseapp.com",
    projectId: "crud-store-daf04",
    storageBucket: "crud-store-daf04.appspot.com",
    messagingSenderId: "798363939546",
    appId: "1:798363939546:web:20324f4576a0fc53c72be3"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase