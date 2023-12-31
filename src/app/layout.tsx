import NextAuthProvider from "./Provider";
import "./globals.css";
import "./css/header.css";
import "./css/auth.css";
import "./css/product.css";
import "./css/store.css";
import "./css/checkout.css";

import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAGE",
  description: "Generated by CNA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <html lang="en">
        <body
        // className={poppins.className}
        >
          <NextAuthProvider>{children}</NextAuthProvider>
        </body>
      </html>
    </>
  );
}
