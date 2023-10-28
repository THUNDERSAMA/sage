import Header from "@/app/Components/Header";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link href="/Store" className="back">
          {"<"}
          <span>Store</span>
        </Link>
      </div>

      <section className="row">
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
              src="https://picsum.photos/800/1200.webp"
              alt="img"
              width={300} // fetch width from image metadata (pds)
              height={400} // fetch width from image metadata (pds)
              placeholder="blur"
              blurDataURL="data:image/backdrop.jpg"
            />
          </div>
        </div>
        <div className="col-2">
          <span className="name">Book of Fruits</span>
          <span className="author">Parthib DS</span>
          <span className="price">$200</span>
          <span className="desc">
            Beloved, novel by Toni Morrison, published in 1987 and winner of the
            1988 Pulitzer Prize for fiction. The work examines the destructive
            legacy of slavery as it chronicles the life of a Black woman named
            Sethe, from her pre-Civil War days as a slave in Kentucky to her
            time in Cincinnati, Ohio, in 1873.
          </span>
          <div className="button">
            <div className="button1">Buy Now</div>
            <div className="button2">
              Sponsor
              <OpenInNewIcon />
            </div>
          </div>
          <span className="stock">Only 3 left in stock</span>
        </div>
        <div className="col-3">
          <span style={{ fontSize: 12 }}>Seller</span>
          <span className="seller">Samadas Drit</span>
          <div className="sellerRating">
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
          </div>
          <hr />
          <span style={{ fontSize: 12 }}>Deliver to</span>
          <span className="address" contentEditable spellCheck={false}>
            Mandir ke samne se right lena, sidha jake ek kaali billi dikhegi,
            ruk jana, wahi mera ghar hai
          </span>
        </div>
      </section>
      <hr />
      <hr />
      <section className="relatedBooks">
        <h1>Related Books</h1>
      </section>
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
