"use client";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { Alert } from "@mui/material";

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
        {status === "authenticated" ? (
          <Alert severity="success">
            This is a success alert —sign in succcess!
            <br />
            name= {session?.user?.name}
            <br />
            email={session?.user?.email}
          </Alert>
        ) : (
          <Alert severity="warning">
            This is a warning alert — not sign in!
          </Alert>
        )}
      </>
    );
  } else {
    return null;
  }
}
