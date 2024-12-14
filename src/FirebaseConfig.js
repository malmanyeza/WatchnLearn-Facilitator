// Import the necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvc2rK6TDuYalnRtl_8I8M70YAysDRItk",
  authDomain: "wathnlearntest02.firebaseapp.com",
  projectId: "wathnlearntest02",
  storageBucket: "wathnlearntest02.firebasestorage.app",
  messagingSenderId: "597254930875",
  appId: "1:597254930875:web:820a2f55feb6b8c481849e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth with browser persistence
const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

// Uncomment to use emulators in development mode
// if (process.env.NODE_ENV === "development") {
//   console.log("Using Firebase emulators...");
//   connectFirestoreEmulator(db, "localhost", 8080);
//   connectAuthEmulator(auth, "http://localhost:9099");
// }

export { auth, db, app };
