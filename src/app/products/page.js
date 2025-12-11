"use client";

export default function InsightsDiscoveryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">

      {/* ================= HERO SECTION (NOT CENTERED) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 md:py-28 flex flex-col md:flex-row gap-12">

          {/* LEFT HERO CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Insights Discovery
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Understand yourself{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                and others
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Insights Discovery is a simple four-colour model that helps people understand themselves and others.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400">
              Create your own journey with Insights Discovery and unlock stronger communication.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-100/90">
                Start your Insights journey
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[11px] text-blue-300 group-hover:bg-slate-800">
                  →
                </span>
              </button>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-200/80 hover:text-blue-200">
                Where can it take you?
                <span className="text-xs">◆</span>
              </button>
            </div>
          </div>

          {/* RIGHT HERO CARD */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md pt-10">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-blue-400/40 via-sky-500/30 to-cyan-300/40 blur-2xl opacity-80" />

              <div className="relative rounded-3xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="mt-1 text-sm sm:text-base font-semibold text-slate-50">
                      A simple way to see behaviour.
                    </p>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                  <div className="rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-700/80">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">What it is</p>
                    <p className="mt-2 text-[13px] text-slate-200">
                      Uses colour energies to understand styles.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-950/60 p-4 ring-1 ring-slate-700/80">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Why it matters</p>
                    <p className="mt-2 text-[13px] text-slate-200">
                      Improves collaboration + performance.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-slate-950/70 px-4 py-3 ring-1 ring-slate-700/80 text-center">
                  <p className="text-[13px] text-slate-300">Use Insights Discovery as the foundation.</p>
                  <span className="hidden sm:inline rounded-full bg-blue-400/15 px-3 py-1 text-[12px] font-semibold text-blue-200 ring-1 ring-blue-400/60">
                    Your starting point
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= INTRO SECTION (CENTERED) ================= */}
      <section className="bg-slate-50 py-16 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-black">
            Insights Discovery
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Where can Insights Discovery take you?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Create your own journey with Insights Discovery as the foundation.
          </p>
        </div>
      </section>

      {/* ================= KEY AREAS ================= */}
      <section className="bg-slate-50 pb-20 text-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            World-renowned expertise
          </p>

          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold">
            5 key areas where Insights Discovery creates impact.
          </h3>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AreaCard iconLabel="TE" title="Team Effectiveness" description="Helping teams work better together." />
            <AreaCard iconLabel="LD" title="Leadership Development" description="Developing leaders with awareness." />
            <AreaCard iconLabel="CR" title="Change & Resilience" description="Supporting people through transitions." />
            <AreaCard iconLabel="EC" title="Engagement & Culture" description="Building positive workplace cultures." />
            <AreaCard iconLabel="SC" title="Sales & Service" description="Improving communication & relationships." />
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================= AREA CARD COMPONENT ================= */
function AreaCard({ iconLabel, title, description }) {
  return (
    <div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:border-slate-900/70 hover:shadow-xl text-center">
      <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-xs font-semibold text-slate-50 group-hover:bg-slate-800">
        {iconLabel}
      </div>

      <h4 className="mt-4 text-sm sm:text-base font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
