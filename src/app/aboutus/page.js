"use client";

import Link from "next/link";

export default function AboutTalendor() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* HERO SECTION */}
      <section className="relative pt-10 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white text-black">
        <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 md:h-72 md:w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-56 w-56 md:h-80 md:w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-5 py-16 md:px-6 md:py-24 lg:flex-row lg:gap-12">
          {/* LEFT COPY */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-gray-50/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-lg shadow-orange-500/10 backdrop-blur mx-auto lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              About Us – Talendor
            </span>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              WELCOME TO{" "}
              <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
                TALENDOR
              </span>
            </h1>

            <p className="mt-3 text-base text-gray-700 sm:text-lg">
              Door to all your Talent Needs
            </p>

            <p className="mt-4 text-sm text-gray-600 sm:text-base max-w-xl mx-auto lg:mx-0">
              At Talendor, we don't just connect businesses with talent — we create
              lasting partnerships that drive growth, innovation, and excellence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">

              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-xl cursor-pointer shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-600">
                Talk to our team
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] text-orange-500 group-hover:bg-orange-100">
                  →
                </span>
              </Link>
              <button className="inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium text-gray-600/80 hover:text-purple-600">
                Discover Talendor
                <span className="text-xs">◆</span>
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex-1 w-full">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-orange-500/30 via-purple-500/20 to-orange-400/30 opacity-80 blur-2xl" />

              <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.18em] text-gray-600">
                      Talendor
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-black">
                      Door to all your Talent Needs
                    </p>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    <span className="h-2 w-2 rounded-full bg-purple-500/80" />
                    <span className="h-2 w-2 rounded-full bg-orange-600/80" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-gray-50/60 p-4 ring-1 ring-gray-200/80">
                    <p className="text-[13px] uppercase tracking-[0.16em] text-gray-600">
                      Our Purpose
                    </p>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-gray-800">
                      To create an ecosystem where employees and organizations thrive.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gray-50/60 p-4 ring-1 ring-gray-200/80">
                    <p className="text-[13px] uppercase tracking-[0.16em] text-gray-600">
                      Our Passion
                    </p>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-gray-800">
                      We focus on People & Organizational Development.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-gray-50/70 px-4 py-3 ring-1 ring-gray-200/80">
                  <p className="text-[13px] sm:text-[14px] text-gray-700">
                    Partner with Talendor to unlock growth and innovation.
                  </p>

                  <span className="rounded-full text-center bg-purple-500/10 px-3 py-1 text-[11px] font-semibold text-purple-600 ring-1 ring-purple-500/40 hidden sm:inline">
                    Lasting partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE & PASSION SECTION */}
      <section className="bg-gray-50 pb-16 pt-14 text-black">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-orange-200/60 bg-white p-6 sm:p-8 shadow-lg shadow-orange-100 text-center">
              <p className="text-[18px] sm:text-[20px] uppercase tracking-[0.18em] font-bold text-orange-500">
                Our Purpose
              </p>
              <h2 className="mt-3 text-lg sm:text-xl font-semibold text-black">
                To create an ecosystem where employees and organizations thrive.
              </h2>
            </div>

            <div className="rounded-3xl border-2 border-purple-200/60 bg-white p-6 sm:p-8 shadow-lg shadow-purple-100 text-center">
              <p className="text-[18px] sm:text-[20px] font-bold uppercase tracking-[0.18em] text-orange-500">
                Our Passion
              </p>
              <h2 className="mt-3 text-lg sm:text-xl font-semibold text-black">
                We are passionate about People and Organizational Development.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
