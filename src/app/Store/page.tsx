"use client";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { Alert } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <section className="mainStore">
      <section className="header">
        <form action="" className="search-form">
          <input type="search" placeholder="Search books" id="search-box" />
        </form>
      </section>

      <section className="home" id="home">
        <div className="promo">
          <h3>New Arrivals, Recommendations and Offers!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            blanditiis suscipit voluptates. Cupiditate ipsa eum quod nesciunt
            animi nam labore earum dolor odit neque similique debitis laborum,
            rem, velit quibusdam.
          </p>
          <button className="shopnowBtn">
            <Link href="#featured">Shop Now</Link>
          </button>
        </div>

        <div className="booksSlider">
          <Link href="/Store/Product">
            <Image
              src="https://picsum.photos/seed/picsum/200/300?random=1"
              alt="img"
              width={200}
              height={300}
            />
          </Link>
          <Link href="/Store/Product">
            <Image
              src="https://picsum.photos/seed/picsum/200/300?random=1"
              alt="img"
              width={200}
              height={300}
            />
          </Link>
          <Link href="/Store/Product">
            <Image
              src="https://picsum.photos/seed/picsum/200/300?random=1"
              alt="img"
              width={200}
              height={300}
            />
          </Link>
          <Link href="/Store/Product">
            <Image
              src="https://picsum.photos/seed/picsum/200/300?random=1"
              alt="img"
              width={200}
              height={300}
            />
          </Link>
        </div>
      </section>
      <hr />
      <section className="featured" id="featured">
        <p>Featured books</p>
        <div className="featuredSlider">
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/200/300"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">
                Book about fruits that gives you knowledge about doctors
              </div>
              <div className="priceWrap">
                <span className="price">₹ 150</span>
                <span className="offer">₹ 200</span>
              </div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/200/300"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">
                Book about fruits that gives you knowledge about doctors
              </div>
              <div className="priceWrap">
                <span className="price">₹ 150</span>
                <span className="offer">₹ 200</span>
              </div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/200/300"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">
                Book about fruits that gives you knowledge about doctors
              </div>
              <div className="priceWrap">
                <span className="price">₹ 150</span>
                <span className="offer">₹ 200</span>
              </div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/200/300"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">
                Book about fruits that gives you knowledge about doctors
              </div>
              <div className="priceWrap">
                <span className="price">₹ 150</span>
                <span className="offer">₹ 200</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <hr />
      <section className="storeDetails">
        <div className="content">
          <p>Free Shipping</p>
          <p>order over Rs100</p>
        </div>
        <div className="content">
          <p>Secure</p>
          <p>100 secure payments</p>
        </div>
        <div className="content">
          <p>Easy Returns</p>
          <p>10 days returns</p>
        </div>
        <div className="content">
          <p>24/7 Support</p>
          <p>call us anytime</p>
        </div>
      </section>
    </section>
  );
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
        <Home />
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
