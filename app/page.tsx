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
          {/* Works Dropdown */}
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

          {/* Idea Dropdown */}
          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              Idea
              <span className="text-xs">▾</span>
            </button>
            <div className="absolute left-1/2 top-full z-20 w-40 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
              <div className="rounded-2xl border border-zinc-700 bg-black/90 p-2 text-sm shadow-xl">
                <Link
                  href="/mission"
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
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Team
                </Link>
                <Link
                  href="/career"
                  className="block rounded-xl px-3 py-2 hover:bg-zinc-800/80 hover:text-[#7fff00]"
                >
                  Career
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

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

        {/* “Products to join” – Academy / Summit */}
        <section className="pb-16 border-t border-zinc-800/80 pt-10">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Join the Next Gen
            </h2>
            <span className="text-xs rounded-full border border-[#7fff00]/40 px-4 py-2 text-zinc-300">
              교육 · 서밋으로 시작하기
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Academy */}
            <Link
              href="/academy"
              className="group rounded-3xl border border-[#7fff00]/40 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur transition hover:-translate-y-1 hover:border-[#7fff00]/80"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#7fff00]">
                Program
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Next Gen Academy
                </h3>
                <span className="text-xs text-[#7fff00] group-hover:translate-x-0.5 transition">
                  Explore →
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                10·20대를 위한 크리에이터 & 창업 실전 아카데미.
                숏폼, 서비스, 브랜드, AI 도구를 활용해{" "}
                <span className="text-white font-medium">
                  포트폴리오와 실제 성과
                </span>
                를 만드는 프로그램입니다.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-zinc-400">
                <span className="rounded-full border border-zinc-700 px-3 py-1">
                  4–6주 코호트
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1">
                  Creator / Founder 트랙
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1">
                  Execution-first
                </span>
              </div>
            </Link>

            {/* Summit */}
            <Link
              href="/studio"
              className="group rounded-3xl border border-[#7fff00]/40 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur transition hover:-translate-y-1 hover:border-[#7fff00]/80"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#7fff00]">
                Event
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Next Gen Summit 2025
                </h3>
                <span className="text-xs text-[#7fff00] group-hover:translate-x-0.5 transition">
                  Explore →
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                서울 DDP에서 열리는{" "}
                <span className="text-white font-medium">
                  크리에이터 · 창업가 · 젊은 투자자
                </span>
                를 위한 프라이빗 서밋. 이야기, 네트워킹, 그리고 다음 세대의
                게임 플랜이 공유됩니다.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-zinc-400">
                <span className="rounded-full border border-zinc-700 px-3 py-1">
                  Private · Invite-only
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1">
                  Seoul · DDP
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1">
                  2025년 12월
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Leadership */}
        <section className="pb-20 border-t border-zinc-800/80 pt-10">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Meet our leadership
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-stretch">
            {/* Eunseo card */}
            <Link
              href="/team"
              className="group rounded-3xl border border-[#7fff00]/60 bg-zinc-900/60 p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 hover:border-[#7fff00] transition"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#7fff00]">
                  Founder & CEO
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Eunseo Seol
                </h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  고등학생 시절부터 스타트업 영상 제작, Tesla·Nvidia·Google
                  투자, 한국 최연소 VC 파트너를 거쳐 Next Gen을 창업한 00년생.
                  크리에이터 이코노미, 스마트 리빙, 젊은 창업 생태계를
                  중심으로{" "}
                  <span className="text-white font-medium">
                    “다음 세대의 인프라”
                  </span>
                  를 빌드하고 있습니다.
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-zinc-400">
                <span>View full team</span>
                <span className="inline-flex items-center gap-1 text-[#7fff00] group-hover:translate-x-0.5 transition">
                  /team
                  <svg
                    className="h-3 w-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h13" />
                    <path d="M12 5l6 7-6 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Small context card */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 text-sm text-zinc-300 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Next Gen Stack
                </p>
                <p className="mt-3 leading-relaxed">
                  Eunseo는 Academy · Ventures · Summit · House로 이어지는
                  Next Gen 스택을 설계하고 있습니다. 각 브랜드는 따로 보이지만,
                  실제로는{" "}
                  <span className="text-white font-medium">
                    하나의 게임 플랜
                  </span>
                  으로 묶여 있습니다.
                </p>
              </div>
              <div className="mt-4 text-[11px] text-zinc-500">
                더 많은 팀 스토리는 <span className="text-zinc-300">Team 페이지</span>에서
                확인할 수 있습니다.
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pb-24 border-t border-zinc-800/80 pt-10">
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
      </div>
    </main>
  );
}
