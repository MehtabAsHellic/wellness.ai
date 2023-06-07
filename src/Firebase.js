import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBILSTR6WYhCiMojlmgZ1Hp-KsukPvWqoo",
  authDomain: "wellness-3b61a.firebaseapp.com",
  projectId: "wellness-3b61a",
  storageBucket: "wellness-3b61a.appspot.com",
  messagingSenderId: "410986191720",
  appId: "1:410986191720:web:4b2dc0099ab6a3796994dd",
  measurementId: "G-RE26FZ3WDX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};