// app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

function Nav() {
  const [openMenu, setOpenMenu] =
    useState<null | "works" | "idea" | "people">(null);

  const toggleMenu = (menu: "works" | "idea" | "people") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
      <Link
        href="/"
        className="font-semibold tracking-wide text-[#7fff00] hover:text-white transition"
        onClick={closeMenu}
      >
        NEXT GEN
      </Link>

      <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
        {/* Works */}
        <div className="relative">
          <button
            className="hover:text-white flex items-center gap-1"
            onClick={() => toggleMenu("works")}
          >
            Works
            <span className="text-xs">
              {openMenu === "works" ? "▴" : "▾"}
            </span>
          </button>
          {openMenu === "works" && (
            <div className="absolute left-1/2 top-full z-20 w-44 -translate-x-1/2 pt-2">
              <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                <Link
                  href="/academy"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                  onClick={closeMenu}
                >
                  Next Gen Academy
                </Link>
                <Link
                  href="/ventures"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                  onClick={closeMenu}
                >
                  Next Gen Ventures
                </Link>
                <Link
                  href="/studio"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                  onClick={closeMenu}
                >
                  Next Gen Summit
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Idea */}
        <div className="relative">
          <button
            className="hover:text-white flex items-center gap-1"
            onClick={() => toggleMenu("idea")}
          >
            Idea
            <span className="text-xs">
              {openMenu === "idea" ? "▴" : "▾"}
            </span>
          </button>
          {openMenu === "idea" && (
            <div className="absolute left-1/2 top-full z-20 w-40 -translate-x-1/2 pt-2">
              <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                <Link
                  href="/mission"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                  onClick={closeMenu}
                >
                  Mission
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* People */}
        <div className="relative">
          <button
            className="hover:text-white flex items-center gap-1"
            onClick={() => toggleMenu("people")}
          >
            People
            <span className="text-xs">
              {openMenu === "people" ? "▴" : "▾"}
            </span>
          </button>
          {openMenu === "people" && (
            <div className="absolute left-1/2 top-full z-20 w-36 -translate-x-1/2 pt-2">
              <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                <Link
                  href="/team"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                  onClick={closeMenu}
                >
                  Team
                </Link>
                <Link
                  href="/career"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                  onClick={closeMenu}
                >
                  Career
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      {/* Top: logo + socials + columns */}
      <div className="mx-auto max-w-6xl px-6 py-10 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Logo + Socials */}
          <div className="space-y-4">
            <div className="text-lg font-semibold tracking-wide">
              <span className="text-[#7fff00]">Next</span> Gen
            </div>

            {/* Social media links */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7fff00] transition"
              >
                Facebook
              </a>
              <a
                href="https://www.threads.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7fff00] transition"
              >
                Threads
              </a>
              <a
                href="https://instagram.com/nextgen.kr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7fff00] transition"
              >
                Instagram
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7fff00] transition"
              >
                X
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#7fff00] transition"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="grid gap-8 text-sm text-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <p className="font-semibold text-white">Programs</p>
              <Link href="/academy" className="block hover:text-[#7fff00]">
                Next Gen Academy
              </Link>
              <Link href="/studio" className="block hover:text-[#7fff00]">
                Next Gen Summit
              </Link>
              <Link href="/ventures" className="block hover:text-[#7fff00]">
                Next Gen Ventures
              </Link>
              <Link href="/blog" className="block hover:text-[#7fff00]">
                Blog
              </Link>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white">Community</p>
              <Link href="/mission" className="block hover:text-[#7fff00]">
                Mission
              </Link>
              <Link href="/team" className="block hover:text-[#7fff00]">
                Team
              </Link>
              <Link href="/career" className="block hover:text-[#7fff00]">
                Careers
              </Link>
              <a
                href="mailto:hello@nextgen.kr"
                className="block hover:text-[#7fff00]"
              >
                Contact
              </a>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white">Company</p>
              <p className="text-zinc-400 text-xs uppercase tracking-[0.18em]">
                Next Gen Corp.
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                서울특별시 강남구 테헤란로 201
                <br />
                (역삼동, 아주빌딩 2층)
              </p>
              <p className="text-xs text-zinc-500">
                Email:{" "}
                <a
                  href="mailto:hello@nextgen.kr"
                  className="hover:text-[#7fff00]"
                >
                  hello@nextgen.kr
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white">Legal</p>
              <Link
                href="/terms"
                className="block text-left text-zinc-400 hover:text-[#7fff00]"
              >
                Terms of service
              </Link>
              <Link
                href="/privacy"
                className="block text-left text-zinc-400 hover:text-[#7fff00]"
              >
                Privacy policy
              </Link>
              <Link
                href="/cookies"
                className="block text-left text-zinc-400 hover:text-[#7fff00]"
              >
                Cookie policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: locale + copy */}
      <div className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-3 text-[11px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <button className="underline underline-offset-2 hover:text-[#7fff00]">
            South Korea (한국어)
          </button>
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Next Gen Corp. All rights reserved. Built
            by the creator & founder generation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon backdrop accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7fff00 0%, rgba(127,255,0,0) 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7fff00 0%, rgba(127,255,0,0) 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7fff00]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7fff00]/70 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(127,255,0,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,255,0,.35)_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <Nav />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        {/* Mission Hero */}
        <section className="pt-10 sm:pt-16 pb-16 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#7fff00]">
            Mission
          </p>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.05]">
            Crash the{" "}
            <span
              className="text-[#7fff00]"
              style={{
                textShadow:
                  "0 0 20px rgba(127,255,0,1), 0 0 40px rgba(127,255,0,.9)",
              }}
            >
              Gerontocracy
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
            Next Gen은 기득권의 느린 의사결정과 올드 머니가 지배하던 시대를 넘어,
            10·20대 창업가와 크리에이터가 직접 경제·문화·도시를 설계하는
            세대를 만들기 위해 존재합니다. 미디어, 교육, 자본, 커뮤니티를 한 번에
            다루는 스택으로, 다음 세대를 위한 인프라를 구축합니다.
          </p>
        </section>

   
       
      </div>

      <Footer />
    </main>
  );
}
