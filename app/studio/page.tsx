// app/studio/page.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function StudioPage() {
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
          Studio
        </span>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-[#7fff00]">
          Next Gen Studio
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-[1.1]">
          크리에이터와 창업가를 위한
          <br />
          네온 프로덕트 스튜디오
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-zinc-300">
          Next Gen Studio는 크리에이터와 스타트업이 함께 쓰는{" "}
          <span className="font-semibold text-white">제품·콘텐츠 실험실</span>
          입니다.
          아이디어를 프로토타입 → 베타 → 론치까지 밀어붙이며,
          짧은 사이클로 시장의 반응을 확인합니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Short-form & Product
          </span>
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            AI-native Stack
          </span>
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Creator × Startup
          </span>
        </div>
      </section>

      {/* What we do */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/50 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">01</p>
            <h2 className="mt-2 text-xl font-semibold">Product Experiments</h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              AI, 크리에이터 도구, 커뮤니티 서비스 등
              작고 빠른 제품을 반복적으로 실험합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/50 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">02</p>
            <h2 className="mt-2 text-xl font-semibold">Media & Branding</h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              숏폼, 페이지, 랜딩, 브랜딩까지
              하나의 서사로 연결되는 미디어 자산을 만듭니다.
            </p>
          </div>
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/50 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">03</p>
            <h2 className="mt-2 text-xl font-semibold">Creator Collabs</h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              크리에이터와 스타트업을 연결해
              공동 제품·캠페인·IP 프로젝트를 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA for Studio */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[#7fff00]/60 bg-zinc-900/60 p-8 shadow-[0_0_30px_rgba(127,255,0,.25)]">
          <h2 className="text-2xl font-semibold">
            Studio와 함께 실험해보고 싶다면
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            크리에이터 · 스타트업 · 브랜드의{" "}
            <span className="text-white font-medium">
              제품/콘텐츠 실험 프로젝트
            </span>
            를 받고 있습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@nextgen.kr?subject=Studio%20Collab"
              className="rounded-2xl border border-[#7fff00]/70 bg-[#7fff00]/10 px-5 py-3 text-[#7fff00] hover:bg-[#7fff00]/30 text-sm"
            >
              Studio 콜라보 제안하기
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
