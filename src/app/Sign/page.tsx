"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Alert } from "@mui/material";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const Sign = () => {
  const router = useRouter();
  const { status, data: session, update } = useSession();
  // useEffect(() => {
  console.log(session);
  // }, [status, router]);
  // update({ status: "authenticated" });
  // console.log(session);

  useEffect(() => {
    if (status === "authenticated") {
      console.log("sign in");
      router.push("/Store");
    }
  }, [status, router]);
  const userName = useRef("");
  const pass = useRef("");
  const email = useRef("");
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      email: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <main className="main-background">
      {/* card with all the contents */}
      <main className="main-container" id="sign">
        {/* logo and title */}
        <div className="main-text">
          {/* <img src="/sage.svg" alt="" /> */}
          <span>Project Sage</span>
        </div>
        {/* every i/o fields and buttons */}

        <div className="auth-container">
          <input
            type="text"
            className="first-ip"
            placeholder="name"
            required
            onChange={(e) => (userName.current = e.target.value)}
          />
          <input
            type="text"
            placeholder="email or mobile"
            required
            onChange={(e) => (email.current = e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            onChange={(e) => (pass.current = e.target.value)}
          />
          <input
            type="password"
            className="second-ip"
            placeholder="confirm password"
            required
          />
          {/* <input
                type="text"
                placeholder="referral code (optional)"
                className="refer-ip"
                // onkeydown="return /[A-Z0-9]/i.test(event.key)"
                // onChange={(e) => e.target.value.toUpperCase()}
              /> */}
          <span className="btn-container">
            <button className="sb-btn" onClick={onSubmit}>
              Sign Up
            </button>
            <button className="GFI-btn" onClick={() => signIn("google")}>
              <Image
                className="btn-png"
                src="/google.png"
                alt=""
                width={20}
                height={20}
              />
            </button>
          </span>
          <div className="alt-container">
            <span> or </span>
            <Link href="/Login"> Login </Link>
          </div>
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
        </div>
      </main>
      {/* main tag containing the bg image which is blurred to create the ambent effect */}

      <main className="main-ambient" />
    </main>
  );
};

export default Sign;
