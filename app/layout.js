"use client";

import Roboto from "next/font/local";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_context/CartContext";
import { useState } from "react";

const geistSans = Roboto({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = Roboto({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart, openCart, setOpenCart }}>
        <html lang="en">
          {/* <CustomHead /> */}
          <Head>
            <title>Elessi Website store</title>
            <meta
              name="description"
              content="This is a brief description of the page content, which will appear in search results."
            />
          </Head>
          <body
            className={`${geistSans.variable} ${geistMono.variable}   antialiased grid h-screen grid-rows-[auto_1fr_auto]`}
          >
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
