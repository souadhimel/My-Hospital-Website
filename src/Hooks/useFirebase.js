import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useEffect, useState } from "react";
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //Google Sign in button

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  // holding info after login
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  //disappear info after log out
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  //submit click after putting email & password
  const handleUserRegister = (email, password, name) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return {
    handleGoogleLogin,
    user,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
  };
};

export default useFirebase;
