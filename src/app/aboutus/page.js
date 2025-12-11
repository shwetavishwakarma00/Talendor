// app/about/page.jsx or components/AboutTalendor.jsx
"use client";

export default function AboutTalendor() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">
      {/* DARK HERO ONLY */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:py-28">
          {/* Left hero copy */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 shadow-lg shadow-sky-500/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              About Us – Talendor
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              WELCOME TO{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                TALENDOR
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-300 sm:text-xl">
              Door to all your Talent Needs
            </p>

            <p className="mt-4 text-sm text-slate-400 sm:text-base">
              At Talendor, we don’t just connect businesses with talent — we create
              lasting partnerships that drive growth, innovation, and excellence. With
              a deep passion for people and performance, we transform HR solutions
              into strategic business advantages.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl cursor-pointer shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-100/90">
                Talk to our team
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[11px] text-blue-300 group-hover:bg-slate-800">
                  →
                </span>
              </button>
              <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-200/80 hover:text-blue-200">
                Discover Talendor
                <span className="text-xs">◆</span>
              </button>
            </div>
          </div>

          {/* Right hero card (visual only, text trimmed to keep your copy primary) */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-blue-400/40 via-sky-500/30 to-cyan-300/40 opacity-80 blur-2xl" />
              <div className="relative h-100 flex flex-col justify-center overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[15px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Talendor
                    </p>
                    <p className="mt-1 text-base font-semibold text-slate-50">
                      Door to all your Talent Needs
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                    <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-base">
                  <div className="rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-700/80">
                    <p className="text-[15px] uppercase tracking-[0.16em] text-slate-400">
                      Our Purpose
                    </p>
                    <p className="mt-2 text-[14px] text-slate-200">
                      To create an ecosystem where employees and organizations thrive
                      together and build a world-class workplace.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-700/80">
                    <p className="text-[15px] uppercase tracking-[0.16em] text-slate-400">
                      Our Passion
                    </p>
                    <p className="mt-2 text-[14px] text-slate-200">
                      We are passionate about People and Organization Development
                      through our result-oriented and tailored HR services.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-slate-950/70 px-4 py-3 ring-1 ring-slate-700/80">
                  <p className="text-[15px] text-slate-300">
                    Partner with Talendor to unlock growth, innovation, and excellence
                    through the right talent.
                  </p>
                  <span className="hidden rounded-full text-center bg-blue-400/15 px-3 py-1 text-[11px] font-semibold text-blue-200 ring-1 ring-blue-400/60 sm:inline">
                    Lasting partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT SECTION – PURPOSE & PASSION ONLY */}
      <section className="bg-slate-50 pb-20 pt-16 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-blue-100 bg-white p-8 shadow-sm shadow-blue-50">
              <p className="text-[20px] uppercase tracking-[0.18em] font-bold text-center text-blue-600">
                Our Purpose
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                To create an ecosystem where employees and organizations thrive together
                and build a world-class workplace.
              </h2>
            </div>

            <div className="rounded-3xl border-2  border-sky-100 bg-white p-8 shadow-sm shadow-sky-50">
              <p className="text-[20px] font-bold text-center uppercase tracking-[0.18em] text-sky-600">
                Our Passion
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                We are passionate about People and Organization Development through our
                result-oriented and tailored HR services.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
