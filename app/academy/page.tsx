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
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(127,255,0,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,255,0,.35)_1px,transparent_1px)] [background-size:40px_40px]"
      />

      {/* Simple Nav */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-wide text-[#7fff00] hover:text-white transition"
        >
          NEXT GEN
        </Link>
        <span className="text-xs rounded-full border border-[#7fff00]/60 px-3 py-1 text-[#7fff00]">
          Academy
        </span>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-[#7fff00]">
          Next Gen Academy
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-[1.1]">
          10·20대를 위한
          <br />
          크리에이터 & 창업 실전 아카데미
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-zinc-300">
          Next Gen Academy는{" "}
          <span className="text-white font-semibold">
            이론보다 실행을 먼저
          </span>
          로 두는 교육 프로그램입니다.
          숏폼, 서비스, 브랜드, AI 도구까지
          바로 써먹을 수 있는 스킬과 네트워크를 제공합니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Cohort-based Program
          </span>
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Creator & Founder Track
          </span>
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Execution-first Curriculum
          </span>
        </div>
      </section>

      {/* Tracks */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/60 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">
              Creator Track
            </p>
            <h2 className="mt-2 text-xl font-semibold">
              크리에이터 성장 트랙
            </h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              TikTok, Reels, YouTube Shorts 중심으로
              콘텐츠 기획 → 촬영 → 편집 → 그로스까지 다룹니다.
              실제 계정을 키우면서 실전 성과를 만들게 됩니다.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-zinc-400">
              <li>• 4–6주 집중 코호트</li>
              <li>• 채널 전략 & 포지셔닝</li>
              <li>• 스크립트 & 썸네일 실습</li>
              <li>• 크리에이터 게스트 세션</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/60 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">
              Founder Track
            </p>
            <h2 className="mt-2 text-xl font-semibold">창업자 성장 트랙</h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              아이디어 검증, MVP 설계, 초기 유저 인터뷰,
              피치덱과 투자 스토리까지
              초기 창업자가 필요한 최소한의 무기를 다룹니다.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-zinc-400">
              <li>• 문제 정의 & 고객 인터뷰</li>
              <li>• 프로토타입 & 랜딩 페이지</li>
              <li>• 크리에이터와 협업하는 런칭</li>
              <li>• VC & 액셀러레이터 네트워크</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Format & Who */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/50 p-6">
            <h2 className="text-lg font-semibold">어떤 형식으로 진행되나요?</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• 주 1–2회 라이브 세션 (온라인/오프라인 믹스)</li>
              <li>• 매주 과제와 피드백, 실제 계정/프로젝트 기반</li>
              <li>• 동료와 함께 성장하는 Discord/Slack 커뮤니티</li>
              <li>• 수료 후에도 이어지는 네트워크 & 이벤트</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/50 p-6">
            <h2 className="text-lg font-semibold">이런 사람에게 추천해요</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• 10·20대 크리에이터/예비 창업자</li>
              <li>• 지금 하는 일을 브랜드로 키우고 싶은 사람</li>
              <li>• 실행 위주로, 같이 달릴 동료가 필요한 사람</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[#7fff00]/60 bg-zinc-900/70 p-8 shadow-[0_0_30px_rgba(127,255,0,.25)]">
          <h2 className="text-2xl font-semibold">
            Academy 차기 코호트 소식을 받고 싶다면
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            아직 정식 런칭 전이기 때문에,
            <span className="text-white font-medium">
              소수의 인원에게만 먼저 오픈
            </span>
            합니다.
            아래 채널로 연락을 주시면 가장 먼저 소식을 보내드릴게요.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@nextgen.kr?subject=Academy%20Cohort"
              className="rounded-2xl border border-[#7fff00]/70 bg-[#7fff00]/10 px-5 py-3 text-[#7fff00] hover:bg-[#7fff00]/30 text-sm"
            >
              Academy 문의하기
            </a>
            <Link
              href="/"
              className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm text-zinc-200 hover:border-[#7fff00]"
            >
              메인 페이지로 돌아가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
