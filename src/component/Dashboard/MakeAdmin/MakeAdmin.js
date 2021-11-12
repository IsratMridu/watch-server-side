import React, { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef();
    const makeUserAdmin = (e) =>{
        e.preventDefault();
        const userEmail = {
            
            email: emailRef.current.value
  
        }

       fetch('http://localhost:5000/addRole',{
           method: 'PUT',
           headers:{
                'content-type':'application/json'
           },
           body: JSON.stringify(userEmail)
       })
       .then(res =>res.json())
       .then(data => {
           if(data.modifiedCount>0){
               alert('User Role Update Successfully');
               e.target.reset();
           }
       })

    }


    return (
        <div>
            <form className='text-center py-5' onSubmit={makeUserAdmin}>
                <input placeholder='Enter User Email:' type='email' required ref={emailRef}  />
                <button type='submit' className='btn btn-success'>Submit</button>

            </form>
            
        </div>
    );
};

export default MakeAdmin;