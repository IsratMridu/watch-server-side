import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../Context/useAuth';
import { useHistory, useLocation } from 'react-router';


const google_icon = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const location = useLocation();
    const history = useHistory(); 
    const redirect_uri = location?.state?.from || '/';
    const {handleEmail, handlePassword, handleLogin, handleGoogleLogin} = useAuth();
   


    const handleGoogleSignin = () =>{
        handleGoogleLogin()
        .then(result =>{
            history.push(redirect_uri);
        })
    }


    return (
        <div>
           <form>
               <input type='email' required placeholder='Enter Email' onBlur={handleEmail}/>
               <br/>
               <input type='password' required placeholder='Enter password' onBlur={handlePassword}/>
               <br/>
               <button type='submit' className='btn btn-danger' onClick={handleLogin}>Submit</button>
               
           </form>

           <br/>
           <br/>
           <br/>
           <button className='btn btn-danger text-white' onClick={handleGoogleSignin}>{google_icon} Login With Google</button>



        </div>
    );
};

export default Login;