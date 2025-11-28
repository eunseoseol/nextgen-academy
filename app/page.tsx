// app/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* ========================== */}
      {/* Hero Section */}
      {/* ========================== */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <h1 className="text-5xl font-bold md:text-6xl">Next Gen</h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          The media company for the next generation of founders & creators.
        </p>
      </section>

      {/* ========================== */}
{/* SNS */}
<div className="space-y-4">
  <div className="text-lg font-semibold tracking-wide">
    <span className="text-[#7fff00]">Next</span> Gen
  </div>

  {/* NEW: 5개 소셜 미디어 */}
  <div className="flex items-center gap-4 text-zinc-400 text-[20px]">
    {/* Facebook */}
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#7fff00] transition"
      aria-label="Facebook"
    >
      𝙁
    </a>

    {/* Threads */}
    <a
      href="https://threads.net"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#7fff00] transition"
      aria-label="Threads"
    >
      @
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/nextgen.kr"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#7fff00] transition"
      aria-label="Instagram"
    >
      ◎
    </a>

    {/* X (Twitter) */}
    <a
      href="https://x.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#7fff00] transition"
      aria-label="X"
    >
      X
    </a>

    {/* YouTube */}
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noreferrer"
      className="hover:text-[#7fff00] transition"
      aria-label="YouTube"
    >
      ▶
    </a>
  </div>
</div>
    </main>
  );
}
