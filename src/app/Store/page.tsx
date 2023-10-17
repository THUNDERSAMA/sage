"use client";
import React from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router"; // Import useRouter from next/router

export default function Page() {
  const router = useRouter();
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Header />
        <div>Store</div>
      </>
    );
  } else {
    router.push("/Sign");
    return null;
  }
}
