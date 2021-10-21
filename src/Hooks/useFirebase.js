import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("error", error);
  console.log("user", user);

  const auth = getAuth();

  const signInUsingGoogle = (history, redirect_URI) => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);

      toast.success("Login Successfully back to home", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      history.push(redirect_URI);
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const signUpWithEmail = (email, password, history, redirect_URI) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        history.push(redirect_URI);
        toast.success("Successfully create account", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const signInWithEmail = (email, password, history, redirect_URI) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        history.push(redirect_URI);
        toast.success("Login Successfully back to home", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.error("Logged Out!");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
      setIsLoading(false);
    });
  }, [auth]);

  return {
    signInUsingGoogle,
    signUpWithEmail,
    signInWithEmail,
    setIsLoading,
    isLoading,
    setError,
    setUser,
    logOut,
    error,
    user,
  };
};

export default useFirebase;
