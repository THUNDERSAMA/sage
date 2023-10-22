import NextAuthProvider from "./Provider";
import "./globals.css";
import "./css/header.css";
import "./css/auth.css";
import "./css/product.css";
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
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
