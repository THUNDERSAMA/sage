"use client";
import React from "react";
import Header from "./Components/Header";
import dynamic from "next/dist/shared/lib/dynamic";
import Sign from "./Sign/page";

// const DynamicComponentWithNoSSR = dynamic(() => import("./Sign/page"), {
//   ssr: false,
// });

// Hi this is Parthib, this above function is used to revoke server side
// rendering of the Header component. You can replace the currently viewed
// component below inside the default export.

export default function Home() {
  return <Sign />;
}
