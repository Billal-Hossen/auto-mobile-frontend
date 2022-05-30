import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initializatonFirebase from "../Pages/Login/Firebase/firebase.init";

initializatonFirebase()
const useFirebase = ()=>{
  const navigate = useNavigate();
  const [user, setUser]= useState({});
  const [isLoading, setIsLoading] = useState(true)
  const auth = getAuth();
  const signInUsingGoogle=()=>{
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      setUser(result.user)
      navigate("/")
    }).finally(()=>setIsLoading(false))

  }
//..................... ovserve user state change................
  useEffect(()=>{
   const unsubscribed= onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      // ...
    } else {
      setUser({})
    }
    setIsLoading(false)
  });
    return ()=> unsubscribed;

  },[] )
  const logOut=()=>{
    setIsLoading(true)
    signOut(auth)
    .then(()=>{
     
    }).finally(()=>setIsLoading(false))

  }

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading
  }
}

export default useFirebase;