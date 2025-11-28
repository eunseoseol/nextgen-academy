// app/blog/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

function Nav() {
  const [openMenu, setOpenMenu] = useState<null | "works" | "idea" | "people">(null);

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
            <span className="text-xs">{openMenu === "works" ? "▴" : "▾"}</span>
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
            <span className="text-xs">{openMenu === "idea" ? "▴" : "▾"}</span>
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
            <span className="text-xs">{openMenu === "people" ? "▴" : "▾"}</span>
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

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7fff00 0%, rgba(127,255,0,0) 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -right-24 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7fff00 0%, rgba(127,255,0,0) 70%)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(127,255,0,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,255,0,.35)_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <Nav />

      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-24 sm:pt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7fff00]">
          Blog
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">
          Creator Economy, Next Gen, 그리고 우리의 기록
        </h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base text-zinc-300 leading-relaxed">
          이곳은 Next Gen 팀이 실험하면서 배우는 것들, 크리에이터 이코노미 인사이트,
          서밋/아카데미/벤처스 비하인드 등을 기록하는 공간입니다.
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 text-sm text-zinc-300">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            Coming Soon
          </p>
          <p className="mt-3">
            아직 블로그는 준비 중입니다. 먼저 인스타그램에서{" "}
            <a
              href="https://instagram.com/nextgen.kr"
              target="_blank"
              rel="noreferrer"
              className="text-[#7fff00] hover:underline"
            >
              @nextgen.kr
            </a>{" "}
            계정을 팔로우하면, 가장 먼저 소식을 받아볼 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
