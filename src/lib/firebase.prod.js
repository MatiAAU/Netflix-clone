import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to see the database

//we need a config here

const config = {
  apiKey: "AIzaSyDCJZiDdzm5SEJ2bWmxKIkIrzznwPyQ_mc",
  authDomain: "netflix-clone-61a08.firebaseapp.com",
  projectId: "netflix-clone-61a08",
  storageBucket: "netflix-clone-61a08.appspot.com",
  messagingSenderId: "298345942351",
  appId: "1:298345942351:web:f92a449ccc8faae42a893a",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
