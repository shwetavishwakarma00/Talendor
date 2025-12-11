"use client";

export default function AboutTalendor() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">
      {/* HERO SECTION */}
      <section className="relative pt-10 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
        <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 md:h-72 md:w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-56 w-56 md:h-80 md:w-80 rounded-full bg-sky-500/30 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-5 py-16 md:px-6 md:py-24 lg:flex-row lg:gap-12">
          {/* LEFT COPY */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 shadow-lg shadow-sky-500/10 backdrop-blur mx-auto lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              About Us – Talendor
            </span>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl">
              WELCOME TO{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                TALENDOR
              </span>
            </h1>

            <p className="mt-3 text-base text-slate-300 sm:text-lg">
              Door to all your Talent Needs
            </p>

            <p className="mt-4 text-sm text-slate-400 sm:text-base max-w-xl mx-auto lg:mx-0">
              At Talendor, we don’t just connect businesses with talent — we create
              lasting partnerships that drive growth, innovation, and excellence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl cursor-pointer shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-100/90">
                Talk to our team
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[11px] text-blue-300 group-hover:bg-slate-800">
                  →
                </span>
              </button>
              <button className="inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium text-slate-200/80 hover:text-blue-200">
                Discover Talendor
                <span className="text-xs">◆</span>
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex-1 w-full">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-blue-400/40 via-sky-500/30 to-cyan-300/40 opacity-80 blur-2xl" />

              <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[14px] sm:text-[15px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Talendor
                    </p>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                      Door to all your Talent Needs
                    </p>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                    <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-700/80">
                    <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
                      Our Purpose
                    </p>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-slate-200">
                      To create an ecosystem where employees and organizations thrive.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-700/80">
                    <p className="text-[13px] uppercase tracking-[0.16em] text-slate-400">
                      Our Passion
                    </p>
                    <p className="mt-2 text-[13px] sm:text-[14px] text-slate-200">
                      We focus on People & Organizational Development.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-slate-950/70 px-4 py-3 ring-1 ring-slate-700/80">
                  <p className="text-[13px] sm:text-[14px] text-slate-300">
                    Partner with Talendor to unlock growth and innovation.
                  </p>

                  <span className="rounded-full text-center bg-blue-400/15 px-3 py-1 text-[11px] font-semibold text-blue-200 ring-1 ring-blue-400/60 hidden sm:inline">
                    Lasting partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE & PASSION SECTION */}
      <section className="bg-slate-50 pb-16 pt-14 text-slate-900">
        <div className="mx-auto max-w-6xl px-5 md:px-6">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-blue-100 bg-white p-6 sm:p-8 shadow-sm shadow-blue-50 text-center">
              <p className="text-[18px] sm:text-[20px] uppercase tracking-[0.18em] font-bold text-blue-600">
                Our Purpose
              </p>
              <h2 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                To create an ecosystem where employees and organizations thrive.
              </h2>
            </div>

            <div className="rounded-3xl border-2 border-sky-100 bg-white p-6 sm:p-8 shadow-sm shadow-sky-50 text-center">
              <p className="text-[18px] sm:text-[20px] font-bold uppercase tracking-[0.18em] text-sky-600">
                Our Passion
              </p>
              <h2 className="mt-3 text-lg sm:text-xl font-semibold text-slate-900">
                We are passionate about People and Organizational Development.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
