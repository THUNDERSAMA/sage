import Link from "next/link";
import React from "react";
import Image from "next/image";

const BookCard = (props: any) => {
  return (
    <Link href="/Store/Product" className="itemBox">
      <div className="imgBox">
        <Image src={props.imageLink} alt="" width={200} height={300} />
      </div>
      <div className="itemDetails">
        <div className="name">{props.name}</div>
        <div className="desc">{props.author}</div>
      </div>
    </Link>
  );
};

export default BookCard;
