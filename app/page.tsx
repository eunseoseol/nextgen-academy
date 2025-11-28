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
      {/* Footer */}
      {/* ========================== */}
      <footer className="w-full border-t border-gray-800 bg-black text-gray-300">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">

          {/* 왼쪽: 브랜드 영역 */}
          <div className="space-y-1">
            <p className="text-lg font-semibold text-white">Next Gen</p>
            <p className="text-sm text-gray-400">
              Built for the next generation of founders & creators.
            </p>
          </div>

          {/* 중앙: Footer Navi 버튼 */}
          <nav className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/about"
              className="rounded-full border border-gray-600 px-3 py-1 transition hover:border-white hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gray-600 px-3 py-1 transition hover:border-white hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-gray-600 px-3 py-1 transition hover:border-white hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/terms"
              className="rounded-full border border-gray-600 px-3 py-1 transition hover:border-white hover:text-white"
            >
              Terms
            </Link>
          </nav>

          {/* 오른쪽: Social Link 버튼 */}
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 px-3 py-1 transition hover:bg-white hover:text-black"
            >
              Facebook
            </a>
            <a
              href="https://www.threads.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 px-3 py-1 transition hover:bg-white hover:text-black"
            >
              Threads
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 px-3 py-1 transition hover:bg-white hover:text-black"
            >
              Instagram
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 px-3 py-1 transition hover:bg-white hover:text-black"
            >
              X
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-800 px-3 py-1 transition hover:bg-white hover:text-black"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Next Gen. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
