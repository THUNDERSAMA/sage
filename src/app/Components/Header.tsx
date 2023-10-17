"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [vw, setVW] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setVW(window.innerWidth);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <>
      <div
        className="headerContainer"
        style={
          vw <= 750
            ? { flexDirection: "column", height: "7rem", paddingBlock: 10 }
            : { position: "relative" }
        }
      >
        {vw > 750 ? (
          <>
            <span className="headerOptions">
              <Link href="/Components/Community">Community</Link>
              <Link href="/Components/Blogs">Blogs</Link>
            </span>
            <span className="headerTitle">Project Sage</span>
            <span className="headerOptions">
              <Link href="/Components/Evalue">Evaluation</Link>
              <Link href="/Components/Libr">Library</Link>
            </span>
          </>
        ) : (
          <>
            <span className="headerTitle">Project Sage</span>
            <span className="headerOptions">
              <Link href="/Components/Community">Community</Link>
              <Link href="/Components/Blogs">Blogs</Link>
              <Link href="/Components/Evalue">Evaluation</Link>
              <Link href="/Components/Libr">Library</Link>
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
