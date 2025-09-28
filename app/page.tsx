// app/page.tsx (Client Component)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon backdrop accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30" style={{background: "radial-gradient(40% 40% at 50% 50%, #22c55e 0%, rgba(34,197,94,0) 70%)"}} />
        <div className="absolute top-1/2 -translate-y-1/2 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25" style={{background: "radial-gradient(40% 40% at 50% 50%, #16a34a 0%, rgba(22,163,74,0) 70%)"}} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(16,185,129,.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,.35)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Nav */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-wide text-emerald-400/90 hover:text-emerald-300 transition">NEXT GEN</Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#vision" className="hover:text-white">Vision</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05]">
          <span className="block text-white">Build the</span>
          <span className="mt-2 block text-emerald-400" style={{textShadow: "0 0 12px rgba(16,185,129,.8), 0 0 24px rgba(16,185,129,.5)"}}>Next Generation</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          검은 배경 위에 초록색 네온의 심장. <span className="text-white font-medium">Next Gen</span>은 창업가와 크리에이터를 위한 실험실입니다.
          새로운 제품과 문화를 빠르게 만들고, 세상에 증명합니다.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-400/60 transition shadow-[0_0_20px_rgba(16,185,129,.25)]"
            style={{boxShadow: "0 0 24px rgba(16,185,129,.25), inset 0 0 12px rgba(16,185,129,.15)"}}
          >
            <span className="font-medium">네온 컨택트</span>
            <svg className="h-4 w-4 translate-x-0 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path dName="M5 12h14"/><path dName="M12 5l7 7-7 7"/></svg>
          </Link>

          {/* External Instagram */}
          <a
            href="https://instagram.com/nextgen.kr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-zinc-200 hover:border-emerald-500/50 hover:text-emerald-200 transition"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8A6.2 6.2 0 1 0 18.2 14 6.2 6.2 0 0 0 12 7.8Zm0 2.4A3.8 3.8 0 1 1 8.2 14 3.8 3.8 0 0 1 12 10.2Zm6.5-4a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z"/>
            </svg>
            <span className="font-medium">@nextgen.kr</span>
          </a>
        </div>

        {/* Decorative neon emblem using Next/Image (data URL) */}
        <div className="mt-10">
          <Image
            src={`data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='240' height='80'>
                <defs>
                  <filter id='glow'>
                    <feGaussianBlur stdDeviation='3.5' result='blur'/>
                    <feMerge>
                      <feMergeNode in='blur'/>
                      <feMergeNode in='SourceGraphic'/>
                    </feMerge>
                  </filter>
                </defs>
                <text x='0' y='55' font-size='48' font-family='Helvetica, Arial, sans-serif' fill='#22c55e' filter='url(%23glow)'>NEXT GEN</text>
              </svg>
            `)}`}
            alt="Neon NEXT GEN wordmark"
            width={240}
            height={80}
            priority
          />
        </div>
      </section>

      {/* Founder card */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 p-6 backdrop-blur">
            <h2 className="text-xl tracking-wide text-emerald-300/90">Founder</h2>
            <p className="mt-2 text-3xl font-bold">송유빈</p>
            <p className="mt-3 text-zinc-300 leading-relaxed">
              사용자와 창업가가 진짜로 원하는 것을 빠르게 만들고 검증합니다. Next Gen은
              프로토타입 → 베타 → 론치까지의 사이클을 네온처럼 선명하게, 짧게 가져갑니다.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com/nextgen.kr" target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-500/30 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-500/10">Instagram</a>
              <Link href="#contact" className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:border-emerald-500/40">Contact</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-zinc-800 p-6 bg-zinc-900/30">
            <h3 className="text-lg text-zinc-300">What we build</h3>
            <ul className="mt-3 space-y-3 text-zinc-300">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,.9)]"/>네온 같은 간결함의 제품 경험</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,.9)]"/>크리에이터 & 스타트업 도구</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,.9)]"/>커뮤니티가 사랑하는 브랜드</li>
            </ul>
            <div className="mt-6 rounded-xl border border-emerald-500/20 p-4 text-sm text-zinc-400">
              Next.js + Tailwind 중심의 모던 스택. 빠른 배포, 데이터 기반 개선, 미학에 집착.
            </div>
          </div>
        </div>
      </section>

      {/* Vision strip */}
      <section id="vision" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-emerald-500/20 p-10 bg-gradient-to-br from-black to-zinc-900/60">
          <h2 className="text-3xl sm:text-4xl font-bold">
            미래는 <span className="text-emerald-400" style={{textShadow: "0 0 16px rgba(16,185,129,.7)"}}>만드는 자</span>의 것
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-300">
            사용자 문제를 레이저처럼 관통하는 솔루션. Next Gen은 작은 팀으로 큰 임팩트를 만듭니다.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-900/40">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-300">콜라보 / 제휴 / 채용 문의</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@nextgen.kr"
              className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-emerald-200 hover:bg-emerald-500/20"
            >
              hello@nextgen.kr
            </a>
            <a
              href="https://instagram.com/nextgen.kr"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-zinc-200 hover:border-emerald-500/40"
            >
              Instagram @nextgen.kr
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 flex items-center justify-between text-xs text-zinc-500">
        <span>© {new Date().getFullYear()} Next Gen. All rights reserved.</span>
        <span className="text-emerald-400/80">Made with Next.js</span>
      </footer>
    </main>
  );
}
