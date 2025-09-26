"use client";

import React from "react";
import { Book, CircleUserRound, Code, Timer } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left leading-[1.1]">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#7928ca]">
            Jonathan's Portfolio!
          </span>
        </h1>
        <p className="text-lg text-center sm:text-center max-w-[700px]">
          Portfolio website made possible with <i>Next.js</i> and <i>Tailwind CSS</i> ! Check back regularly for updates. 
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/portfolio"
          >
            <CircleUserRound size={16} aria-hidden className="w-5 h-5"/>
            Enter Portfolio
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[220px]"
            href="/blog"
          >
            <Book size={16} aria-hidden className="w-5 h-5 mr-2"/>
            Check out my blog!
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/autobio"
        >
          <Book size={16} aria-hidden /> 
          About Me!
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jonathanzari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Code size={16} aria-hidden className="w-5 h-5"/>
          Link to Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Timer size={16} aria-hidden className="w-5 h-5"/>
          Pomodoro Website!
        </a>
      </footer>
    </div>
  );
}
