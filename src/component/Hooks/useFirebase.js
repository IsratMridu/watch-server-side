import { useState } from "react";
import initializeFirebase from "../FIrebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





initializeFirebase();

const auth = getAuth();



const useFirebase = () =>{

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    };

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }     

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(email, password);
    }

    const handleRegister = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
      console.log(result.user);
    
  })
        addUserToDatabase(email,password);

        

    }

    const addUserToDatabase = (mail, pass)=>{
       const userInfo ={
           email: mail,
           password: pass
       };

       

    }

   
   


    return{handleEmail, handlePassword, handleLogin, handleRegister}


}

export default useFirebase;
