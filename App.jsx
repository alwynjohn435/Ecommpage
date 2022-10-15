import React from "react";
import pic from '../Images/iphone.jpg'
import pic1 from '../Images/rating.png1.jpg'
import pic2 from '../Images/cart.png'

export default function App(){


return(
    <>
<nav className="navbar bg-primary fixed-top">
  <div className="container-fluid">
  <h3 className="px-5">Mazinda</h3>
    <form className="d-flex my-1" role="search">
      <input className="form-control   text-center mx-5"  type="search" placeholder="Search on Mazinda" aria-label="Search"/>
      <img src={pic2} style={{height:"50px"}}/>
    </form>

  </div>
  
</nav>

<img src={pic} class="rounded mx-auto d-block img-fluid my-5 py-5"></img>
<hr/>

<p className="mx-5 fw-bold">iphone 14 Pro Max (256 GB)(8 GB RAM)</p>
<strike className="text-secondary mx-5">1,30,999</strike> <h3 className="mx-5">1,30,999</h3>
<hr/>
<p className="mx-5 fw-bold">Description</p>

<p className="fw-light text-center" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    
    <hr/>

    <p className="mx-5 fw-bold">Information</p>
    <p className="fw-light text-center" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <hr/>

    <p className="mx-5 fw-bold">Reviews</p>
<h3 className="mx-5">Akash Khurana</h3>
    <img src={pic1}  className=" img-fluid w-25 mx-5 "></img> 4.5/5.0
    <h3 className="text-primary fw-light mx-5" >Superb Quality and best service</h3>
    <h3 className="mx-5">Gurdev Singh</h3>
    <img src={pic1}  className=" img-fluid w-25 mx-5"/> 4.0/5.0
    <h3 className="text-primary fw-light mx-5" >My new phone</h3>
    <h3 className="mx-5">Rishiika Sandal</h3>
    <img src={pic1}  className=" w-25 img-fluid mx-5"/> 4.0/5.0
    <h3 className="text-primary fw-light mx-5" >Loved it !!!!</h3>

<hr/>
<button type="button" className="btn btn-outline-danger mx-4">ADD TO CART</button><button type="button" className="btn btn-danger">BUY NOW</button>
    </>
)


}