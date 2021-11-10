import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const {handleEmail, handlePassword, handleLogin} = useFirebase();
    return (
        <div>
           <form onSubmit={handleLogin}>
               <input type='email' required placeholder='Enter Email' onBlur={handleEmail}/>
               <br/>
               <input type='password' required placeholder='Enter password' onBlur={handlePassword}/>
               <br/>
               <input type='submit' required value='Submit' />
               
           </form>
        </div>
    );
};

export default Login;