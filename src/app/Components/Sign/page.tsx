"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Alert } from "@mui/material";
const Sign = () => {
  const { status, data: session } = useSession();

  return (
    <>
      {/* card with all the contents */}
      <main className="main-container" id="sign">
        {/* logo and title */}
        <div className="main-text">
          <img src="/sage.svg" alt="" />
          <span>Project Sage</span>
        </div>
        {/* every i/o fields and buttons */}

        <div className="auth-container">
          <input type="text" className="first-ip" placeholder="name" required />
          <input type="text" placeholder="email or mobile" required />
          <input type="password" placeholder="password" required />
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
            <button className="sb-btn">Sign Up</button>
            <button className="GFI-btn" onClick={() => signIn("google")}>
              <img className="btn-png" src="/google.png" alt="" />
            </button>
          </span>
          <div className="alt-container">
            <span> or </span>
            <Link href="/Components/Login"> Login </Link>
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

      <main className="main-ambient"></main>
    </>
  );
};

export default Sign;
