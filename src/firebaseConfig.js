// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAB-9mykZMCsCXd6JFoXwCikP1l2BBqeFg',
  authDomain: 'linkedinclone-8683d.firebaseapp.com',
  projectId: 'linkedinclone-8683d',
  storageBucket: 'linkedinclone-8683d.appspot.com',
  messagingSenderId: '907613303051',
  appId: '1:907613303051:web:71a921e999602dbe7bf20e',
  measurementId: 'G-NV1EMW761M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
