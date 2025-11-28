// app/academy/page.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -left-20 h-80 w-80 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7fff00 0%, rgba(127,255,0,0) 70%)",
          }}
        />
        <div
          className="absolute top-1/2 -right-32 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(40% 40% at 50% 50%, #7fff00 0%, rgba(127,255,0,0) 70%)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(127,255,0,.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,255,0,.28)_1px,transparent_1px)] [background-size:54px_54px]"
      />

      {/* Top bar */}
      <header className="relative z-10 border-b border-zinc-900/70 bg-black/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.22em] text-[#7fff00] hover:text-white uppercase"
          >
            NEXT GEN
          </Link>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="hidden sm:inline text-zinc-500">
              Creator / Founder School
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7fff00]/50 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#7fff00]">
              Academy
              <span className="h-1 w-1 rounded-full bg-[#7fff00] shadow-[0_0_10px_rgba(127,255,0,0.8)]" />
            </span>
          </div>
        </div>
      </header>

      {/* Page body */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-10 pb-24 sm:pt-14">
        {/* Hero row */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          {/* Left: text */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#7fff00]/90">
              Next Gen Academy
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-tight">
              10·20대를 위한
              <br />
              <span className="text-[#7fff00]" style={{ textShadow: "0 0 24px rgba(127,255,0,0.9)" }}>
                Creator & Founder Class
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm sm:text-base text-zinc-300 leading-relaxed">
              Next Gen Academy는 <span className="font-medium text-white">이론보다 실행</span>을 먼저 두는
              실전형 프로그램입니다. 인스타 릴스, 틱톡, 유튜브 같은 숏폼과 서비스,
              브랜드, AI 도구를 한 번에 다뤄서
              <span className="font-medium text-white"> “바로 써먹을 수 있는 스킬”</span>을 만듭니다.
            </p>

            {/* Quick bullets */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-zinc-300">
              <span className="rounded-full border border-zinc-700 px-3 py-1">
                4–6주 코호트
              </span>
              <span className="rounded-full border border-zinc-700 px-3 py-1">
                Creator / Founder 트랙
              </span>
              <span className="rounded-full border border-zinc-700 px-3 py-1">
                실행 위주 과제
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@nextgen.kr?subject=Academy%20Waitlist"
                className="inline-flex items-center gap-2 rounded-full border border-[#7fff00]/70 bg-[#7fff00]/10 px-5 py-2.5 text-sm text-[#7fff00] hover:bg-[#7fff00]/80 hover:text-black transition"
                style={{
                  boxShadow:
                    "0 0 22px rgba(127,255,0,0.7), inset 0 0 12px rgba(127,255,0,0.5)",
                }}
              >
                Waitlist 합류하기
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13" />
                  <path d="M12 5l6 7-6 7" />
                </svg>
              </a>
              <p className="text-xs text-zinc-500">
                아직 정식 오픈 전 ·{" "}
                <span className="text-zinc-300">소수만 초대합니다.</span>
              </p>
            </div>
          </div>

          {/* Right: “product card” 느낌 */}
          <div className="space-y-4">
            {/* Reel-style preview box */}
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/70">
              <div className="flex items-center justify-between px-4 pt-3 pb-2 text-[11px] text-zinc-500">
                <span className="uppercase tracking-[0.18em]">Preview</span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#7fff00] shadow-[0_0_10px_rgba(127,255,0,1)]" />
                  Cohort 01
                </span>
              </div>
              <div className="border-t border-zinc-800" />
              <div className="aspect-[9/16] bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center">
                <div className="rounded-2xl border border-zinc-700/80 px-4 py-3 text-center">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">
                    Reels / Shorts / TikTok
                  </p>
                  <p className="mt-2 text-sm text-zinc-200">
                    실제 <span className="text-[#7fff00]">Next Gen</span> 릴스를
                    케이스로
                    <br />
                    스크립트 · 편집 · 후킹 포인트를 분해합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Compact info row */}
            <div className="grid grid-cols-3 gap-2 text-[11px] text-zinc-300">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5">
                <p className="text-zinc-500">Length</p>
                <p className="mt-1 text-sm font-medium">4–6 Weeks</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5">
                <p className="text-zinc-500">Format</p>
                <p className="mt-1 text-sm font-medium">Online & IRL</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2.5">
                <p className="text-zinc-500">Level</p>
                <p className="mt-1 text-sm font-medium">10·20s Only</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider line */}
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* Section: What you get */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-sm uppercase tracking-[0.22em] text-[#7fff00]/90">
              What you get
            </h2>
            <p className="mt-2 text-xl font-semibold">
              아카데미에서 실제로 가져가는 것들
            </p>
            <ul className="mt-5 space-y-3 text-sm text-zinc-300 leading-relaxed">
              <li>
                • 본인 계정(또는 사이드 프로젝트)을 기반으로{" "}
                <span className="font-medium text-white">실제 성과</span>를
                만드는 커리큘럼
              </li>
              <li>
                • 크리에이터, 초기 창업자, 디자이너, 엔지니어 등{" "}
                <span className="font-medium text-white">
                  또래 동료 네트워크
                </span>
              </li>
              <li>
                • Next Gen Studio / Ventures와 이어지는{" "}
                <span className="font-medium text-white">
                  장기적인 기회(콜라보, 투자, 채용)
                </span>
              </li>
              <li>
                • 나중에 이력서보다 더 강력한{" "}
                <span className="font-medium text-white">
                  “링크 & 레퍼런스”
                </span>{" "}
                하나
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 text-sm text-zinc-300">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                For who
              </p>
              <div className="mt-3 space-y-2">
                <p>• 그냥 소비만 하는 게 아니라, 만들고 싶은 사람</p>
                <p>• 팔로워뿐 아니라, 비즈니스 감각도 키우고 싶은 사람</p>
                <p>• “언젠가”가 아니라, <span className="text-[#7fff00]">올해</span> 움직이고 싶은 사람</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-zinc-300">
              <span className="rounded-full border border-zinc-700 px-3 py-1">
                Aspiring Creator
              </span>
              <span className="rounded-full border border-zinc-700 px-3 py-1">
                Early Founder
              </span>
              <span className="rounded-full border border-zinc-700 px-3 py-1">
                Student / Gap year
              </span>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16">
          <div className="rounded-3xl border border-[#7fff00]/50 bg-gradient-to-r from-zinc-950 via-zinc-950 to-zinc-900/70 px-6 py-7 sm:px-8 sm:py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#7fff00]/90">
                Next Gen Academy · Early Access
              </p>
              <p className="mt-2 text-sm sm:text-base text-zinc-200">
                차기 코호트가 열리면{" "}
                <span className="font-medium text-white">가장 먼저</span> 이메일로
                알려드립니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@nextgen.kr?subject=Academy%20Waitlist&body=이름,%20나이,%20간단한%20소개와%20현재%20하고%20있는%20일을%20적어주세요."
                className="inline-flex items-center gap-2 rounded-full border border-[#7fff00]/70 bg-[#7fff00]/10 px-5 py-2.5 text-sm text-[#7fff00] hover:bg-[#7fff00]/80 hover:text-black transition"
              >
                이메일로 Waitlist 신청
              </a>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-xs text-zinc-300 hover:border-[#7fff00]"
              >
                메인 페이지로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
