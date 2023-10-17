"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     //  router.push("/Store");
  //   }
  // }, [status]);
  if (status === "authenticated") {
    router.push("/Store");
  }
  return (
    <main className="main-background">
      {/* card with all the contents */}
      <main className="main-container" id="log">
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
            placeholder="email or mobile"
            required
          />
          <input
            type="password"
            className="second-ip"
            placeholder="password"
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
            <button className="sb-btn">Login</button>
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
            <a href="/Components/Sign">Join us</a>
            <span> | </span>
            <Link href="/Components/Pass">Forgot password?</Link>
          </div>
        </div>
      </main>
      {/* main tag containing the bg image which is blurred to create the ambent effect */}
      <main className="main-ambient" />
    </main>
  );
};

export default Login;
