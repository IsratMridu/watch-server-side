import React from 'react';
import useAuth from '../Context/useAuth';


const Register = () => {
    const {handleEmail, handlePassword, handleRegister, handleName} = useAuth();
    return (
        <div>
            <form onSubmit={handleRegister}>
               <input type='text' required placeholder='Enter Name' onBlur={handleName}/>
               <br/>
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