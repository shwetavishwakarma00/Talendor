
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};


export default function InsightsDiscoveryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative  overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-orange-400 text-white">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <motion.div
            className="max-w-xl "
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-purple-100">
              Our flagship product
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Insights Discovery: four colours, powerful self‑awareness
            </h1>
            <p className="mt-4 text-sm md:text-base font-para text-purple-100/80">
              A simple four‑colour model that helps people understand themselves,
              appreciate others, and unlock better collaboration at work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="group inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-purple-700 shadow-lg shadow-purple-900/20 transition hover:-translate-y-0.5 hover:bg-purple-50">
                Explore programmes
                <span className="ml-2 text-xs transition group-hover:translate-x-1">
                  →
                </span>
              </button>
              <button className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10">
                Talk to an expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four colour model */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            The four‑colour model
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Every person has a unique mix of Fiery Red, Sunshine Yellow, Earth
            Green and Cool Blue energies, shaping how they think, decide and
            communicate at work. [web:3][web:4]
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Fiery Red",
              desc: "Competitive, determined and purposeful; brings drive, focus and action.",
              color: "from-red-500 to-orange-400",
            },
            {
              title: "Sunshine Yellow",
              desc: "Sociable, enthusiastic and persuasive; energises others and builds relationships.",
              color: "from-amber-400 to-orange-500",
            },
            {
              title: "Earth Green",
              desc: "Caring, encouraging and patient; creates stability, support and trust.",
              color: "from-emerald-500 to-lime-400",
            },
            {
              title: "Cool Blue",
              desc: "Cautious, precise and questioning; adds structure, quality and clarity.",
              color: "from-sky-500 to-blue-700",
            },
          ].map((item, idx) => (
            <motion.article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              variants={fadeUp}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.color}`}
              />
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <div
                className={`mt-4 inline-flex rounded-full bg-gradient-to-r ${item.color} px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white`}
              >
                Colour energy
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Where can it take you */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <motion.div
            className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Where can Insights Discovery take you?
              </h2>
              <p className="mt-3 text-sm text-slate-600 md:text-base">
                Use Insights Discovery as the foundation for leadership, team
                development and culture change, building a shared language that
                turns awareness into everyday behaviour. [web:3][web:10]
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Leadership development",
                  "Team effectiveness",
                  "Change and resilience",
                  "Engagement and culture",
                  "Sales, consulting & service",
                  "Coaching and mentoring",
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-xs font-semibold text-purple-700">
                      ●
                    </span>
                    <p className="text-sm font-medium text-slate-800">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-64 w-64 sm:h-72 sm:w-72">
             
              <Image
                src="/images/talendorp1.webp"
                alt="Insights Discovery journey wheel"
                fill
                className="rounded-full object-contain shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-purple-600">
            Our areas of expertise
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Turning insight into everyday performance
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            Programmes focus on the skills organisations need most, from trust
            and feedback to stakeholder management and inclusive leadership. [web:3][web:10]
          </p>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Coaching & mentoring",
            "Team engagement",
            "Improving performance",
            "Trust and psychological safety",
            "Developing potential",
            "Managing stakeholders",
            "Effective communication",
            "Feedback that lands",
            "Empathy and inclusion",
            "Inspiring others",
          ].map((tag, i) => (
            <motion.span
              key={tag}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-50 via-white to-orange-50 px-4 py-2 text-xs font-medium text-slate-800 shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Connecting teams */}
      <section className="bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-semibold">
                Connecting teams across your organisation
              </h2>
              <p className="mt-3 text-sm text-purple-100 md:text-base">
                Workshops help people break down silos, communicate with
                clarity, and collaborate around shared goals using a common
                colour language. [web:8][web:9][web:12]
              </p>
              <ul className="mt-5 space-y-2 text-sm text-purple-100/90">
                <li>• Highly interactive, facilitator‑led experiences.</li>
                <li>• Practical tools that transfer back into day‑to‑day work.</li>
                <li>• Action plans that sustain behaviour change over time.</li>
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-3xl bg-white/5 p-6 shadow-xl shadow-black/40 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
                  Self‑aware teams
                </p>
                <p className="mt-3 text-sm text-purple-50">
                  When people understand themselves and each other, they build
                  stronger relationships, handle conflict constructively, and
                  deliver better results together. [web:9][web:12]
                </p>
                <button className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-purple-100">
                  Book a discovery session
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center rounded-3xl bg-gradient-to-r from-purple-600 via-purple-500 to-orange-400 px-6 py-10 text-center text-white shadow-xl">
          <h2 className="text-2xl font-semibold">
            Ready to start your Insights Discovery journey?
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-purple-100 md:text-base">
            Partner with our certified practitioners to design a programme that
            grows self‑awareness, trust and performance across your teams. [web:3][web:5]
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-purple-700 shadow-lg shadow-purple-900/20 transition hover:-translate-y-0.5 hover:bg-purple-50">
              Schedule a call
            </button>
            <button className="rounded-full border border-white/70 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
              Download overview
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
