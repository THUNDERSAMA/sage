"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const Header = () => {
  const [vw, setVW] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setVW(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      handleSize();
      window.addEventListener("resize", handleSize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleSize);
      }
    };
  }, [vw]);

  return (
    <>
      <div
        className="headerContainer"
        style={
          vw <= 750
            ? { flexDirection: "column", height: "4rem", paddingBlock: 10 }
            : { position: "relative" }
        }
      >
        {vw > 750 ? (
          <>
            <span className="headerTitle">Project Sage</span>
            <span className="headerOptions">
              <Link href="/Store">Store</Link>
              <Link href="/Community">Online</Link>
              <Link href="/Blogs">Blogs</Link>
              <Link href="/Evalue">Tests</Link>
              <Link href="/Libr">Library</Link>
            </span>
          </>
        ) : (
          <>
            <span className="headerTitle">Project Sage</span>
            <span className="footerOptions">
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
          </>
        )}
      </div>
    </>
  );
};

export default Header;
