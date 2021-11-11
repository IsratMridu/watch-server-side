import React from 'react';
import { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router';
import useAuth from '../Context/useAuth';


const Purchase = () => {
    const phoneRef = useRef();
    const locationRef = useRef(); 
    const {id} = useParams();
    const {user} = useAuth();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/purchase/${id}`)
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[id])

    const placeOrder = (e) =>{
        e.preventDefault();

        const orderInfo = {
            productId: product?._id,
            title: product?.title,
            brand: product?.brand,
            type: product?.type,
            image:product?.image,
            description: product?.description,
            email: user?.email,
            name: user?.displayName,
            phone: phoneRef.current.value,
            location: locationRef.current.value,
            status: 'Pending'

        }

        fetch('http://localhost:5000/confirmOrder',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(orderInfo)
        })
        .then(res =>res.json())
        .then(data => console.log(data))


    }

    // console.log(id);
    return (
        <div>
            <div className='container mx-auto row g-0 mt-4'>

                <div className='col-lg-7 col-md-7 col-sm-12 col-12'>
                <div className="card mb-3">
  <img src={product?.image} className="card-img-top w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Name: {product?.title}</h5>
    <p className="card-text">Category: {product?.type}</p>
    <p className="card-text">Brand: {product?.brand}</p>
    <p className="card-text">Description: {product?.description}</p>
    
    <p className="card-text">Price: {product?.price}</p>
    <p className="card-text"><small className="text-muted">Product Id: {product?._id}</small></p>
  </div>
</div>


                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                    <form className='text-center mt-4' onSubmit={placeOrder}>
                        <label className='px-2'>User Email:</label>
                        <input type='text' className='w-50' defaultValue={user?.email}  />
                        <br/>
                        <label className='px-2'>User Name:</label>
                        <input type='text' className='w-50' defaultValue={user?.displayName}  />
                        <br/>
                        <label className='px-2'>User Number:</label>
                        <input type='text' className='w-50' placeholder='Enter Phone Number' ref={phoneRef} />
                        <br/>
                        <label className='px-2'>User Location:</label>
                        <input type='text' className='w-50' placeholder='Enter Location' ref={locationRef} />
                        <br/>
                        <button className='btn btn-success w-25' type='submit'>Submit</button>

                    </form>

                </div>

            </div>

            




            
        </div>
    );
};

export default Purchase;