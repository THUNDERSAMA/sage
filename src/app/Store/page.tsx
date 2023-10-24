"use client";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { Alert } from "@mui/material";






export default function Home() {
  return (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />


  <section className='header'>
    <a href="#">Sage <i className='fas fa-book'></i></a>
    
    <form action="" className='search-form'>
      <input type="search" placeholder='Search any books' id='search-box'/>
      <label htmlFor="search-box" className='fas fa-search'></label>
    </form>
    
    <div className='icons'>
      <div id='search-btn' className='fas fa-search'></div>
      <a href="#" className='fas fa-heart'></a>
      <a href="#" className='fas fa-shopping-cart'></a>
      <div id='login-btn' className='fas fa-user'></div>
    </div>
  </section>


  <section className='home' id='home'>
    <div className='row'>
      <div className='content'>
        <h3>(New Arrivals or Recommended or offer)</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga blanditiis suscipit voluptates. Cupiditate ipsa eum quod nesciunt animi nam labore earum dolor odit neque similique debitis laborum, rem, velit quibusdam.</p>
        <button className='btn'>shop now</button>
      </div>

      <div className='books-slider'>
        <div className='wraper'>
          
          <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
          <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
          <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
          <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
          <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
          <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>

        </div>
      </div>
    </div>
  </section>


  <section className="featured" id="featured">

    <h1 className="heading"><span>featured books</span></h1>
    <div className="featured-slider">


        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <a href="#" className='fas fa-search'></a>
            <a href="#" className='fas fa-heart'></a>
            <a href="#" className='fas fa-eye'></a>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="content">
            <h3>featured books</h3>
            <div className="price">Rs 150 <span>Rs200</span></div>
            <a href="#" className='btn'>add to cart</a>
          </div>
        </div>

    </div>
  </section>



  <section className='icons-container'>
    <div className='icons'>
      <i className='fas fa-plane'></i>
      <div className='content'>
        <h3>Free Shipping</h3>
        <p>order over Rs100</p>
      </div>
    </div>

    <div className='icons'>
      <i className='fas fa-lock'></i>
      <div className='content'>
        <h3>Secure payment</h3>
        <p>100 secure payments</p>
      </div>
    </div>

    <div className='icons'>
      <i className='fas fa-redo-alt'></i>
      <div className='content'>
        <h3>easy returns</h3>
        <p>10 days returns</p>
      </div>
    </div>

    <div className='icons'>
      <i className='fas fa-headset'></i>
      <div className='content'>
        <h3>24/7 support</h3>
        <p>call us anytime</p>
      </div>
    </div>
  </section>

    </>)
}







export default function Store() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/Sign");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <>
        <Header />
        <div>Store</div>
        {status === "authenticated" ? (
          <Alert severity="success">
            This is a success alert —sign in succcess!
            <br />
            name= {session?.user?.name}
            <br />
            email={session?.user?.email}
          </Alert>
        ) : (
          <Alert severity="warning">
            This is a warning alert — not sign in!
          </Alert>
        )}
      </>
    );
  } else {
    return null;
  }
}
