"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { Alert } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToRight = () => {
    if (containerRef.current) {
      const currentScrollLeft = containerRef.current.scrollLeft;
      containerRef.current.scrollTo(currentScrollLeft + 250, 0);
    }
  };

  const scrollToLeft = () => {
    if (containerRef.current) {
      const currentScrollLeft = containerRef.current.scrollLeft;
      containerRef.current.scrollTo(currentScrollLeft - 250, 0);
    }
  };

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
            <Link href="#arrivalSection">Shop Now</Link>
          </button>
        </div>
      </section>
      <section className="bookSection" id="arrivalSection">
        <button className="scLeft" onClick={scrollToLeft}>
          <KeyboardArrowLeftRoundedIcon />
        </button>
        <p>New Arrivals!</p>
        <button className="scRight" onClick={scrollToRight}>
          <KeyboardArrowRightRoundedIcon />
        </button>
        <div className="bookSectionSlider" ref={containerRef}>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/800/1200.webp?space"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">Book about fruits</div>
              <div className="desc">Parthib DS</div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/800/1200.webp?earth"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">Book about fruits</div>
              <div className="desc">Parthib DS</div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/800/1200.webp?technology"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">Book about fruits</div>
              <div className="desc">Parthib DS</div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/800/1200.webp?people"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">Book about fruits</div>
              <div className="desc">Parthib DS</div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/800/1200.webp?animals"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">Book about fruits</div>
              <div className="desc">Parthib DS</div>
            </div>
          </Link>
          <Link href="/Store/Product" className="itemBox">
            <div className="imgBox">
              <Image
                src="https://picsum.photos/800/1200.webp?trees"
                alt=""
                width={200}
                height={300}
              />
            </div>
            <div className="itemDetails">
              <div className="name">Book about fruits</div>
              <div className="desc">Parthib DS</div>
            </div>
          </Link>
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
