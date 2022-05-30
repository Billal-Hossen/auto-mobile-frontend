import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializatonFirebase=()=>{
  initializeApp(firebaseConfig);
  
}
export default initializatonFirebase;