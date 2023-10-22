"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Header = () => {
  // const [vw, setVW] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleSize = () => {
  //     setVW(window.innerWidth);
  //   };
  //   if (typeof window !== "undefined") {
  //     handleSize();
  //     window.addEventListener("resize", handleSize);
  //   }
  //   return () => {
  //     if (typeof window !== "undefined") {
  //       window.removeEventListener("resize", handleSize);
  //     }
  //   };
  // }, [vw]);

  return (
    <div className="headerContainer">
      <span className="headerTitle">Project Sage</span>
      <span className="headerOptions">
        <Link href="/Store">
          <StorefrontOutlinedIcon />
          Store
        </Link>
        <Link href="/Community">
          <PeopleOutlinedIcon />
          Online
        </Link>
        <Link href="/Blogs">
          <BookOutlinedIcon />
          Blogs
        </Link>
        <Link href="/Evalue">
          <EmojiObjectsOutlinedIcon />
          Tests
        </Link>
        <Link href="/Libr">
          <LocalLibraryOutlinedIcon />
          Library
        </Link>
      </span>
      <span className="account">
        <PersonOutlineOutlinedIcon />
      </span>
    </div>
  );
};

export default Header;
