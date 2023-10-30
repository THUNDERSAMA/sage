import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import BookCard from "./BookCard";

const BookCarousel = (props: any) => {
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
  ];
  return (
    <section className="bookSection" id={props.id}>
      <button className="scLeft" onClick={scrollToLeft}>
        <KeyboardArrowLeftRoundedIcon />
      </button>
      <p>{props.title}</p>
      <button className="scRight" onClick={scrollToRight}>
        <KeyboardArrowRightRoundedIcon />
      </button>
      <div className="bookSectionSlider" ref={containerRef}>
        {bookInfo.map((book: any, index: any) => (
          <BookCard
            key={index}
            name={book.name}
            author={book.author}
            imageLink={book.img}
          />
        ))}
      </div>
    </section>
  );
};

export default BookCarousel;
