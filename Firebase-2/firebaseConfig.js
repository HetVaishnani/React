// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiPU_Xwq3BnkpgtrbmTnEhu_p9PwKTvnU",
  authDomain: "fir-project-cbe46.firebaseapp.com",
  projectId: "fir-project-cbe46",
  storageBucket: "fir-project-cbe46.firebasestorage.app",
  messagingSenderId: "405313490979",
  appId: "1:405313490979:web:a69b8d2dad54fd4b8ae196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

