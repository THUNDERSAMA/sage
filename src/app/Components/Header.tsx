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
            ? { flexDirection: "column", paddingBlock: 10 }
            : { position: "relative" }
        }
      >
        {vw > 750 ? (
          <>
            <span className="headerTitle">Project Sage</span>
            <span className="headerOptions">
              <Link href="/Components/Store">Store</Link>
              <Link href="/Components/Community">Online</Link>
              <Link href="/Components/Blogs">Blogs</Link>
              <Link href="/Components/Evalue">Tests</Link>
              <Link href="/Components/Libr">Library</Link>
            </span>
          </>
        ) : (
          <>
            <span className="headerTitle">Project Sage</span>
            <span className="footerOptions">
              <Link href="/Components/Store">
                <StorefrontOutlinedIcon />
                Store
              </Link>
              <Link href="/Components/Community">
                <PeopleOutlinedIcon />
                Online
              </Link>
              <Link href="/Components/Blogs">
                <BookOutlinedIcon />
                Blogs
              </Link>
              <Link href="/Components/Evalue">
                <EmojiObjectsOutlinedIcon />
                Tests
              </Link>
              <Link href="/Components/Libr">
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
