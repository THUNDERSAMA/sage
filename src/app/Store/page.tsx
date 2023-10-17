"use client";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router

export default function Store() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/Sign");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <>
        <Header />
        <div>Store</div>
      </>
    );
  } else {
    return null;
  }
}
