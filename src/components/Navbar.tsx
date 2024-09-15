"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <header className="bg-white shadow">
      <nav className="mx-5 flex max-w-7xl items-center justify-between p-6 lg:px-2">
        <div className="flex justify-center">
          <Link href="/" className=" flex items-center">
            <img src="/logo1.png" className=" " alt="" />
            <p className="text-xl text-blue-600 font-semibold">INTEGRATED PROJECT TRACKING AND COORDINATION HUB</p>
          </Link>
        </div>
        

        {status !== "authenticated" ? (
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in
          </Link>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <Link
              href="https://free-frindly-chat-bot.vercel.app/"
              className="text-sm font-semibold leading-6 text-gray-900 bg-blue-400 rounded p-2 px-4"
            >
              Chat AI
            </Link>
            <Link
              href="/organizations"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Organizations
            </Link>
            <div
              onClick={(event) => {
                event.preventDefault();
                signOut();
              }}
              className="font-semibold text-sm cursor-pointer"
            >
              Logout
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
