import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Register = () => {
    const {handleEmail, handlePassword, handleRegister} = useFirebase();
    return (
        <div>
            <form onSubmit={handleRegister}>
               <input type='email' required placeholder='Enter Email' onBlur={handleEmail}/>
               <br/>
               <input type='password' required placeholder='Enter password' onBlur={handlePassword}/>
               <br/>
               <input type='submit' required value='Submit' />
               
           </form>
            
        </div>
    );
};

export default Register;