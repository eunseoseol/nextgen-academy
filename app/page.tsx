// app/page.tsx (Client Component)
"use client";

import React from "react";
import Link from "next/link";

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

      {/* Nav */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-wide text-[#7fff00] hover:text-white transition"
        >
          NEXT GEN
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          {/* Works Dropdown → 별도 페이지 라우트 */}
          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              Works
              <span className="text-xs">▾</span>
            </button>
            <div className="absolute left-1/2 top-full z-20 w-44 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
              <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
               
                <Link
                  href="/academy"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Next Gen Academy
                </Link>
                <Link
                  href="/ventures"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Next Gen Ventures
                </Link>
                 <Link
                  href="/studio"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Next Gen Summit
                </Link>
              </div>
            </div>
          </div>

          {/* Idea Dropdown (Mission / Blog) */}
          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              Idea
              <span className="text-xs">▾</span>
            </button>
            <div className="absolute left-1/2 top-full z-20 w-40 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
              <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                <Link
                  href="#mission"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Mission
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>

          {/* People Dropdown */}
          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              People
              <span className="text-xs">▾</span>
            </button>
            <div className="absolute left-1/2 top-full z-20 w-36 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
              <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                <Link
                  href="/team"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Team
                </Link>
                <Link
                  href="/career"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Career
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05]">
          <span className="block text-white">Build the</span>
          <span
            className="mt-2 block text-[#7fff00]"
            style={{
              textShadow:
                "0 0 20px rgba(127,255,0,1), 0 0 40px rgba(127,255,0,.9)",
            }}
          >
            Next Generation
          </span>
        </h1>
       
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl border border-[#7fff00]/60 bg-[#7fff00]/10 px-5 py-3 text-[#7fff00] hover:text-black hover:bg-[#7fff00]/80 hover:border-[#7fff00] transition"
            style={{
              boxShadow:
                "0 0 30px rgba(127,255,0,.8), inset 0 0 16px rgba(127,255,0,.4)",
            }}
          >
           
            <svg
              className="h-4 w-4 translate-x-0 transition group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>

        
        </div>

 
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#7fff00]">
              Work
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              우리가 만든 것들
            </h2>
          </div>
          <span className="rounded-full border border-[#7fff00]/40 px-4 py-2 text-xs text-zinc-300">
            Prototype → Beta → Launch
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-sm text-zinc-300">
         

          <Link
            href="/academy"
            className="group rounded-3xl border border-[#7fff00]/30 bg-zinc-900/40 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#7fff00]/70"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-white">
                Next Gen Academy
              </p>
              <span className="text-xs text-[#7fff00] group-hover:translate-x-0.5 transition">
                View →
              </span>
            </div>
            <p className="mt-3 leading-relaxed">
              10·20대를 위한 크리에이터/창업 실전 아카데미. 실행 중심
              커리큘럼을 제공합니다.
            </p>
          </Link>

          <Link
            href="/ventures"
            className="group rounded-3xl border border-[#7fff00]/30 bg-zinc-900/40 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#7fff00]/70"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-white">
                Next Gen Ventures
              </p>
              <span className="text-xs text-[#7fff00] group-hover:translate-x-0.5 transition">
                View →
              </span>
            </div>
            <p className="mt-3 leading-relaxed">
              크리에이터 이코노미 · AI · 스마트 리빙에 투자하는 초기 단계
              베이비 펀드입니다.
            </p>
          </Link>
           <Link
            href="/studio"
            className="group rounded-3xl border border-[#7fff00]/40 bg-zinc-900/40 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#7fff00]/70"
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-white">
                Next Gen Studio
              </p>
              <span className="text-xs text-[#7fff00] group-hover:translate-x-0.5 transition">
                View →
              </span>
            </div>
            <p className="mt-3 leading-relaxed">
              제품·콘텐츠를 빠르게 만들고 검증하는 크리에이터/스타트업
              실험실입니다.
            </p>
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="rounded-3xl border border-[#7fff00]/60 bg-gradient-to-br from-black to-zinc-900/70 p-10 shadow-[0_0_40px_rgba(127,255,0,.2)]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7fff00]">
            Mission
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
            미래는 만드는 자의 것
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-zinc-200 leading-relaxed">
            우리는 사용자 문제를 레이저처럼 관통하는 솔루션을 만듭니다. 작은
            팀이지만 강한 브랜드, 빠른 제품, 깊은 문화로 시장을 절단합니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Neon Speed", "Human Insight", "Beautiful Systems"].map(
              (keyword) => (
                <div
                  key={keyword}
                  className="rounded-2xl border border-[#7fff00]/30 bg-zinc-900/40 p-4"
                >
                  <p className="text-[#7fff00] font-semibold">{keyword}</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    가설 → 실험 → 증명의 루틴을 반복하며, 사람을 움직이는
                    디테일을 만듭니다.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Team 요약, Career, Contact 등은 그대로 유지 */}
      {/* ... (원래 있던 섹션들 그대로 두면 됨) ... */}

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/40">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-300">콜라보 / 제휴 / 채용 문의</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@nextgen.kr"
              className="rounded-2xl border border-[#7fff00]/60 bg-[#7fff00]/10 px-5 py-3 text-[#7fff00] hover:bg-[#7fff00]/30"
            >
              hello@nextgen.kr
            </a>
            <a
              href="https://instagram.com/nextgen.kr"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-zinc-200 hover:border-[#7fff00] hover:text-[#7fff00]"
            >
              Instagram @nextgen.kr
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
