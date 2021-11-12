import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import "./Homepage.css";


const Homepage = () => {
  
  const [products,setProducts] = useState([]);
  const [reviews,setReviews] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/allProducts')
    .then(res=> res.json())
    .then(data => setProducts(data))
  },[])

  const slicedProduct = products.slice(0,6);
  // console.log(slicedProduct);

  useEffect(()=>{
    fetch('http://localhost:5000/findReview')
    .then(res=>res.json())
    .then(data=> setReviews(data))
  },[])

  



  


  return (
    
    
    <div className='bg-success'>
      
      
      
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0075/1832/2770/files/slider__3_2000x.jpg?v=1559292337" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0075/1832/2770/files/slider__2_2000x.jpg?v=1559288774" className="d-block img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0075/1832/2770/files/slider__1_2000x.jpg?v=1559284541" className="d-block img-fluid" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <div className='py-5'>
        <h1 className='py-4 text-center text-white'>Our Premium Watches Collection</h1>

        <div className=' container mx-auto row gx-0 gy-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          
            {
              slicedProduct.map(sliced =>
                <div className="card" key={sliced._id}>
  <img src={sliced.image} className="card-img-top w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Title: {sliced.title}</h5>
    <h5 className="card-title">Price: ${sliced.price}</h5>
    <p className="card-text">Category: {sliced.type}</p>
    <Link to={`/purchase/${sliced._id}`}>
            <button className='btn btn-success'>Purchase</button>

        </Link>
    
  </div>
</div>)
            }

          


        </div>


      </div>

      <div className='py-5'>
      <h1 className='pb-5 text-center text-white'>Feedbacks From Our valuable Customers</h1>
        <div className='container row gx-0 gy-4 mx-auto row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
          {
            reviews.map(review =>
              <div className="card" key={review._id}>
  
  <div className="card-body">
    <h5 className="card-title">User Email: {review.email}</h5>
    {/* <h5 className="card-title">User Name: {review.displayName}</h5> */}
    <p className="card-text">Comment: {review.comment}</p>
    <h4>Rating: <Rating
    
   
    initialRating={review.rating}
    readonly
    
   
    
    />
     
     
    </h4>
    
    
  </div>
  
</div>)
          }

        </div>


      </div>




    </div>
  );
};

export default Homepage;
