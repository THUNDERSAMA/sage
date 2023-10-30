"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { Alert } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import BookCarousel from "../Components/BookCarousel";
import BookScroll from "../Components/BookScroll";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

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
          <h3>Welcome to the book store!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            blanditiis suscipit voluptates. Cupiditate ipsa eum quod nesciunt
            animi nam labore earum dolor odit neque similique debitis laborum,
            rem, velit quibusdam.
          </p>
          <div className="promoBtn">
            Go to: <Link href="#arrivalSection">New Arrivals</Link>
            <Link href="#popularSection">Popular</Link>
            <Link href="#trendingSection">Trending</Link>
            <Link href="#allSection">All Books</Link>
          </div>
        </div>
      </section>
      <BookCarousel title="New Arrivals!" id="arrivalSection" />
      <BookCarousel title="Popular Books" id="popularSection" />
      <BookCarousel title="Trending Books" id="trendingSection" />
      <BookScroll title="All Books" id="allSection" />
      <Link href="#" className="backToTop">
        <KeyboardDoubleArrowUpIcon />
        Back To Top
      </Link>
    </section>
  );
}

export default function Store() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      console.log("store");
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
