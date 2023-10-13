"use client";
import Link from "next/link";
import React, { useState } from "react";

const Pass = () => {
  const [otpCheck, setOtpCheck] = useState(true);
  return (
    <>
      {/* card with all the contents */}
      <main className="main-container" id="pass">
        {/* logo and title */}
        <div className="main-text">
          <img src="/sage.svg" alt="" />
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
          <button
            className="otp-btn"
            style={otpCheck ? {} : { borderRadius: "2px" }}
            onClick={() => setOtpCheck(false)}
          >
            Request OTP
          </button>
          <input
            type="text"
            maxLength={6}
            className={`second-ip otp ${otpCheck && "ghost"}`}
            placeholder="OTP"
            required
            // onkeydown="return /[A-Z0-9]/i.test(event.key)"
            // oninput="this.value = this.value.toUpperCase()"
          />
          {/* OTP feild only accepts alpha-numeric characters */}
          <br />
          <input
            type="password"
            className="first-ip"
            placeholder="new password"
            required
          />
          <input
            type="password"
            className="second-ip"
            placeholder="confirm new password"
            required
          />
          <button className="sb-btn">Reset</button>
          <div className="alt-container">
            <span> or </span>
            <Link href="/Components/Login">Try login</Link>
          </div>
          <div></div>
        </div>
      </main>
      {/* main tag containing the bg image which is blurred to create the ambent effect */}
      <main className="main-ambient"></main>
    </>
  );
};

export default Pass;
