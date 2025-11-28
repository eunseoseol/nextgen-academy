// app/ventures/page.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function VenturesPage() {
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
          Ventures
        </span>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-16 sm:pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-[#7fff00]">
          Next Gen Ventures
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-[1.1]">
          크리에이터 이코노미 · AI ·
          <br />
          스마트 리빙에 베팅하는 베이비 펀드
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-zinc-300">
          Next Gen Ventures는{" "}
          <span className="text-white font-semibold">
            미디어와 커뮤니티를 레버리지
          </span>
          로 사용하는 초기 단계 투자 실험입니다.
          단순한 자본이 아니라, 스토리와 채널, 크리에이터와 함께 들어갑니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Pre-seed · Seed
          </span>
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Creator × Startup Deals
          </span>
          <span className="rounded-full border border-[#7fff00]/50 px-4 py-1">
            Media + Capital
          </span>
        </div>
      </section>

      {/* Thesis */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/60 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">01</p>
            <h2 className="mt-2 text-xl font-semibold">
              Creator Economy Infra
            </h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              크리에이터가 브랜드, 교육, 커머스, 커뮤니티를
              직접 만들 수 있게 하는 도구와 인프라에 투자합니다.
            </p>
          </div>
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/60 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">02</p>
            <h2 className="mt-2 text-xl font-semibold">AI-native Products</h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              AI를 위에 얹는 수준이 아니라,
              처음부터 AI를 전제로 설계된 프로덕트와 워크플로우에 관심이 있습니다.
            </p>
          </div>
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/60 p-6">
            <p className="text-sm text-[#7fff00] font-semibold">03</p>
            <h2 className="mt-2 text-xl font-semibold">Smart Living & Space</h2>
            <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
              스마트 모듈러 하우스, 코리빙, 리로케이션 등
              다음 세대의 생활 인프라와 연결되는 서비스들을 지켜보고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* How we work with founders */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/50 p-6">
            <h2 className="text-lg font-semibold">우리는 이렇게 돕습니다</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• 크리에이터 네트워크와의 콜라보 런칭 설계</li>
              <li>• 숏폼 중심의 브랜드/프로덕트 스토리텔링</li>
              <li>• 초기 유저 인터뷰, 포지셔닝, 메세지 정제</li>
              <li>• EO / Primer / Creator 커뮤니티와의 연결</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[#7fff00]/40 bg-zinc-900/50 p-6">
            <h2 className="text-lg font-semibold">체크 포인트</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• 0 → 1 단계에 있는 팀</li>
              <li>• 크리에이터/커뮤니티와 궁합이 좋은 제품</li>
              <li>• 미디어와 스토리를 무기로 쓸 준비가 된 팀</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA for founders & co-investors */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[#7fff00]/60 bg-zinc-900/70 p-8 shadow-[0_0_30px_rgba(127,255,0,.25)]">
          <h2 className="text-2xl font-semibold">
            투자를 받고 싶거나, 함께 투자하고 싶다면
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            아직은 작은 실험 단계의 베이비 펀드이지만,
            <span className="text-white font-medium">
              크리에이터 이코노미 · AI · 스마트 리빙
            </span>
            과 맞는 팀/투자자와는 깊게 이야기해보고 싶습니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@nextgen.kr?subject=Ventures%20-%20Founder"
              className="rounded-2xl border border-[#7fff00]/70 bg-[#7fff00]/10 px-5 py-3 text-[#7fff00] hover:bg-[#7fff00]/30 text-sm"
            >
              Founder로 연락하기
            </a>
            <a
              href="mailto:hello@nextgen.kr?subject=Ventures%20-%20Co-invest"
              className="rounded-2xl border border-zinc-600 bg-zinc-900/60 px-5 py-3 text-sm text-zinc-200 hover:border-[#7fff00] hover:text-[#7fff00]"
            >
              Co-investor로 연락하기
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
