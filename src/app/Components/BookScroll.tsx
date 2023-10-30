import React from "react";
import BookCard from "./BookCard";
import Link from "next/link";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

const BookScroll = (props: any) => {
  const bookInfo = [
    {
      name: "Mysterious Dreams",
      author: "Alice Smith",
      img: "https://picsum.photos/800/1200.webp?space",
    },
    {
      name: "Enchanted Secrets",
      author: "Bob Johnson",
      img: "https://picsum.photos/800/1200.webp?earth",
    },
    {
      name: "Whimsical Journey",
      author: "Charlie Brown",
      img: "https://picsum.photos/800/1200.webp?technology",
    },
    {
      name: "Forgotten Legends",
      author: "David Lee",
      img: "https://picsum.photos/800/1200.webp?people",
    },
    {
      name: "Hidden Adventures",
      author: "Ella Garcia",
      img: "https://picsum.photos/800/1200.webp?animals",
    },
    {
      name: "Eternal Mysteries",
      author: "Frank Davis",
      img: "https://picsum.photos/800/1200.webp?trees",
    },
    {
      name: "Top Gear",
      author: "Bella Garcia",
      img: "https://picsum.photos/800/1200.webp?car",
    },
    {
      name: "World of Warships",
      author: "Patricia Davis",
      img: "https://picsum.photos/800/1200.webp?ship",
    },
  ];
  return (
    <section className="bookSectionV" id={props.id}>
      <p>{props.title}</p>
      <div className="bookSectionScroller">
        {bookInfo.map((book: any, index: any) => (
          <BookCard
            key={index}
            name={book.name}
            author={book.author}
            imageLink={book.img}
          />
        ))}
      </div>
      <div className="pageNav">
        {/* <span>Page: </span> */}
        <button>
          <Link href="#">
            <KeyboardArrowLeftRoundedIcon />
          </Link>
        </button>
        <Link href="#">1</Link>
        <Link href="#">2</Link>
        <Link href="#">3</Link>
        <button>
          <Link href="#">
            <KeyboardArrowRightRoundedIcon />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default BookScroll;
