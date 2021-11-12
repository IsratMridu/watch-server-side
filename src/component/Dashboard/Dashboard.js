import React, { useState } from 'react';
import useAuth from '../Context/useAuth';






const Dashboard = () => {
    const {user, admin, handleLogOut} = useAuth();
    const [control,setControl] = useState('My Orders');
    // console.log(control);
    
    return (
        <div className='pb-5'>
            <h1 className='py-5 text-center text-danger'>Welcome To Dashboard {user.email}</h1>

            <div className='row mx-auto container'>
                <div className='col-lg-3 col-md-3 col-sm-12 col-12 '>
                  {
                      !admin && 
                      <div className='d-flex flex-column'>

                 
                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Pay')}>Pay</button>

                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('My Orders')}>My Orders</button>
                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Review')}>Review</button>
                      <button className='w-25 my-3 mx-auto btn btn-danger ' onClick={handleLogOut}>Logout</button>

                      </div> 
                  }  

                  {
                      admin && 

                      <div className='d-flex flex-column'>

                 
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Manage All Orders')}>Manage All Orders</button>

                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Add a Product')}>Add a Product</button>
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Make Admin')}>Make Admin</button>
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={()=>setControl('Make Products')}>Manage Products</button>
                      <button className='w-50 my-3 mx-auto btn btn-danger ' onClick={handleLogOut}>Logout</button>

                      </div> 
                  }

                   

                </div>
                <div className='col-lg-9 col-md-9 col-sm-12 col-12'>
                    


                </div>

            </div>
           


           


            
        </div>

        
    );
};

export default Dashboard;