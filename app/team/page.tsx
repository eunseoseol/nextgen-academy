// app/blog/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

function Nav() {
  const [openMenu, setOpenMenu] = useState<null | "works" | "idea" | "people">(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (menu: "works" | "idea" | "people") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <div className="sticky top-0 z-40 border-b border-zinc-800 bg-black/70 backdrop-blur-xl">
      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-wide text-[#7fff00] hover:text-white transition"
          onClick={closeAll}
        >
          NEXT GEN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          {/* Works */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-white"
              onClick={() => toggleMenu("works")}
            >
              Works
              <span className="text-xs">{openMenu === "works" ? "▴" : "▾"}</span>
            </button>
            {openMenu === "works" && (
              <div className="absolute left-1/2 top-full z-50 w-44 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                  <Link
                    href="/academy"
                    className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                    onClick={closeAll}
                  >
                    Next Gen Academy
                  </Link>
                  <Link
                    href="/ventures"
                    className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                    onClick={closeAll}
                  >
                    Next Gen Ventures
                  </Link>
                  <Link
                    href="/studio"
                    className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                    onClick={closeAll}
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
              className="flex items-center gap-1 hover:text-white"
              onClick={() => toggleMenu("idea")}
            >
              Idea
              <span className="text-xs">{openMenu === "idea" ? "▴" : "▾"}</span>
            </button>
            {openMenu === "idea" && (
              <div className="absolute left-1/2 top-full z-50 w-40 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                  <Link
                    href="/mission"
                    className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                    onClick={closeAll}
                  >
                    Mission
                  </Link>
                  <Link
                    href="/blog"
                    className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                    onClick={closeAll}
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
              className="flex items-center gap-1 hover:text-white"
              onClick={() => toggleMenu("people")}
            >
              People
              <span className="text-xs">{openMenu === "people" ? "▴" : "▾"}</span>
            </button>
            {openMenu === "people" && (
              <div className="absolute left-1/2 top-full z-50 w-36 -translate-x-1/2 pt-2">
                <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                  <Link
                    href="/team"
                    className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                    onClick={closeAll}
                  >
                    Team
                  </Link>
                  <Link
                    href="/career"
                    className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                    onClick={closeAll}
                  >
                    Career
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="https://instagram.com/nextgen.kr"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#7fff00]/60 px-4 py-1.5 text-xs font-medium text-[#7fff00] hover:border-[#7fff00] hover:bg-[#7fff00]/10"
          >
            Follow @nextgen.kr
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 sm:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span className="block h-[1px] w-4 bg-zinc-200" />
            <span className="block h-[1px] w-4 bg-zinc-200" />
          </div>
        </button>
      </header>

      {/* Mobile Nav Panel */}
      {mobileOpen && (
        <div className="border-t border-zinc-800 bg-black/95 px-6 pb-6 pt-3 text-sm text-zinc-200 sm:hidden">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Works
              </p>
              <div className="mt-2 space-y-1.5">
                <Link
                  href="/academy"
                  className="block rounded-lg px-2 py-1.5 hover:bg-zinc-900/70"
                  onClick={closeAll}
                >
                  Next Gen Academy
                </Link>
                <Link
                  href="/ventures"
                  className="block rounded-lg px-2 py-1.5 hover:bg-zinc-900/70"
                  onClick={closeAll}
                >
                  Next Gen Ventures
                </Link>
                <Link
                  href="/studio"
                  className="block rounded-lg px-2 py-1.5 hover:bg-zinc-900/70"
                  onClick={closeAll}
                >
                  Next Gen Summit
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Idea
              </p>
              <div className="mt-2 space-y-1.5">
                <Link
                  href="/mission"
                  className="block rounded-lg px-2 py-1.5 hover:bg-zinc-900/70"
                  onClick={closeAll}
                >
                  Mission
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-lg px-2 py-1.5 hover:bg-zinc-900/70"
                  onClick={closeAll}
                >
                  Blog
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                People
              </p>
              <div className="mt-2 space-y-1.5">
                <Link
                  href="/team"
                  className="block rounded-lg px-2 py-1.5 hover:bg-zinc-900/70"
                  onClick={closeAll}
                >
                  Team
                </Link>
                <Link
                  href="/career"
                  className="block rounded-lg px-2 py-1.5 hover:bg-zinc-900/70"
                  onClick={closeAll}
                >
                  Career
                </Link>
              </div>
            </div>

            <a
              href="https://instagram.com/nextgen.kr"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-[#7fff00]/60 px-4 py-2 text-xs font-medium text-[#7fff00] hover:border-[#7fff00] hover:bg-[#7fff00]/10"
            >
              Follow @nextgen.kr
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
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

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-10 sm:pt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7fff00]">
          Blog
        </p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Creator Economy, Next Gen, 그리고 우리의 기록
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
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
