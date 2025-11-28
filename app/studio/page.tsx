// app/studio/page.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function SummitPage() {
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
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(127,255,0,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,255,0,.25)_1px,transparent_1px)] [background-size:46px_46px]"
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
          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <span className="hidden sm:inline text-zinc-500">
              Private Event · Seoul
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7fff00]/60 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#7fff00]">
              Summit 2025
              <span className="h-1.5 w-1.5 rounded-full bg-[#7fff00] shadow-[0_0_10px_rgba(127,255,0,0.9)]" />
            </span>
          </div>
        </div>
      </header>

      {/* Page body */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-8 sm:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] items-start">
          {/* Left: event card + host */}
          <aside className="space-y-5">
            {/* Logo card */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-4">
              <div className="aspect-[4/5] rounded-2xl bg-white flex items-center justify-center">
                <span className="text-black text-3xl font-semibold tracking-tight">
                  Next Gen
                </span>
              </div>
            </div>

          </aside>

          {/* Right: main event info */}
          <section className="space-y-8">
            {/* Title + meta */}
            <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3 text-[11px]">
                <span className="inline-flex items-center gap-1 rounded-full bg-pink-500/10 px-3 py-1 text-pink-300 border border-pink-500/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                  Private Event
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 text-zinc-400">
                  Invite-only · Approval required
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold">
                  NextGen Summit 2025
                </h1>
                <p className="mt-2 text-sm text-zinc-400 max-w-xl">
                  크리에이터와 창업가, 젊은 투자자들이 한자리에 모이는{" "}
                  <span className="text-zinc-100 font-medium">
                    Next Gen 커뮤니티의 연말 서밋
                  </span>
                  입니다.
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Date
                  </p>
                  <p className="mt-1 text-zinc-100 text-sm">
                    Tuesday, December 30, 2025
                  </p>
                  <p className="text-[12px] text-zinc-400">
                    6:00 PM – 7:00 PM (KST)
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Venue
                  </p>
                  <p className="mt-1 text-zinc-100 text-sm">
                    Dongdaemun Design Plaza (DDP)
                  </p>
                  <p className="text-[12px] text-zinc-400">Seoul, South Korea</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Format
                  </p>
                  <p className="mt-1 text-zinc-100 text-sm">
                    Summit · Networking
                  </p>
                  <p className="text-[12px] text-zinc-400">
                    Talks · Builders · Late 20s & under
                  </p>
                </div>
              </div>
            </div>

            {/* Registration box */}
            <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Registration
              </p>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 text-sm text-zinc-200">
                <p className="font-medium text-zinc-100">
                  Approval Required
                </p>
                <p className="mt-2 text-zinc-400 text-[13px]">
                  신청 후 호스트 승인 시 참석 확정됩니다.
                  본 이벤트는 소규모·밀도 높은 대화를 위해 인원 제한이 있습니다.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-zinc-700 flex items-center justify-center text-xs">
                    ES
                  </div>
                  <div className="text-[13px]">
                    <p className="text-zinc-100 font-medium">Eunseo Seol</p>
                    <p className="text-zinc-400 text-[12px]">
                      seoleunseo@gmail.com
                    </p>
                  </div>
                </div>
                <a
                  href="https://luma.com/err3tc9w"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-100 px-5 py-2.5 text-[13px] font-medium text-black hover:bg-white sm:mt-0"
                >
                  Luma에서 신청하기
                </a>
              </div>
            </div>

            {/* Location / map placeholder */}
            <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Location
              </p>
              <div>
                <p className="text-sm font-medium text-zinc-100">
                  Dongdaemun Design Plaza (DDP)
                </p>
                <p className="mt-1 text-[13px] text-zinc-400">
                  281 Eulji-ro, Jung-gu, Seoul, South Korea
                </p>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80">
                {/* 지도 자리에 심플 플레이스홀더 (필요하면 iframe으로 교체 가능) */}
                <div className="aspect-[16/9] flex items-center justify-center text-[12px] text-zinc-500">
                  <span className="text-center">
                    Map preview
                    <br />
                    (DDP, Dongdaemun Design Plaza)
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
