import Header from "@/app/Components/Header";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link href="/Store" className="back">
          {"<"}
          <p>book details</p>
        </Link>
        {/* <span className="material-symbols-outlined">menu</span> */}
      </div>

      <div className="row">
        <div className="col-1">
          {/* <Image
              src={"/backdrop.jpg"}
              alt="img"
              width={300}
              height={400}
              quality={1}
            /> */}
          <div className="wrapper">
            <Image
              src={"/backdrop.jpg"}
              alt="img"
              width={300} // fetch width from image metadata (pds)
              height={400} // fetch width from image metadata (pds)
              placeholder="blur"
              blurDataURL="data:image/backdrop.jpg"
            />
          </div>
        </div>
        <div className="col-2">
          <p className="name">BELOVED</p>
          <p className="writer">Toni Morrison</p>
          <p className="price">$200</p>
          <p className="details">
            Beloved, novel by Toni Morrison, published in 1987 and winner of the
            1988 Pulitzer Prize for fiction. The work examines the destructive
            legacy of slavery as it chronicles the life of a Black woman named
            Sethe, from her pre-Civil War days as a slave in Kentucky to her
            time in Cincinnati, Ohio, in 1873.
          </p>
          <div className="button">
            <div className="button1">
              {/* <span className="material-symbols-outlined">download</span> */}
              Download
            </div>
            <div className="button2">Order Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Product() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
