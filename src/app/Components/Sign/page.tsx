"use client";
import Link from "next/link";
import React from "react";

const Sign = () => {
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
            <button className="GFI-btn">
              <img className="btn-png" src="/google.png" alt="" />
            </button>
          </span>
          <div className="alt-container">
            <span> or </span>
            <Link href="/Components/Log"> Login </Link>
          </div>
        </div>
      </main>
      {/* main tag containing the bg image which is blurred to create the ambent effect */}
      <main className="main-ambient"></main>
    </>
  );
};

export default Sign;
