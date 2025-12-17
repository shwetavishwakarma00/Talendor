"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import services from "@/data/services.json";
import { FiCheckCircle } from "react-icons/fi";

export default function ServicePage() {
  const params = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    if (!params?.slug) return;

    const slug = params.slug;
    const data = services[slug];

    setService(data);
  }, [params]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <h1 className="text-xl font-semibold text-slate-200">
          Loading service...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative md:py-8 pt-15 overflow-hidden bg-slate-950 text-slate-50">
        {/* Simple gradient background (no blur) */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm font-medium tracking-wide uppercase text-slate-200">
            Services
          </span>
          <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight">
            {service.title}
          </h1>
          {service.subtitle && (
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-slate-300">
              {service.subtitle}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Tailored for your business
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Expert-led implementation
            </span>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="max-w-8xl mx-auto px-4 py-12 md:py-16 space-y-12 md:space-y-16">
        {service.sections.map((section, index) => {
          const isLast = index === service.sections.length - 1;

          return (
            <section
              key={index}
              className="relative rounded-2xl border border-slate-200 bg-white px-5 py-8 md:px-8 md:py-10"
            >
              {/* Simple top border accent */}
              <div className="absolute inset-x-6 -top-0.5 h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 rounded-full" />

              {/* Header + small stats row */}
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
                <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
                  <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                    {section.heading}
                  </h2>
                  {section.description && (
                    <p className="mt-3 text-sm md:text-base text-slate-600">
                      {section.description}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-3 text-center md:text-right text-xs md:text-sm">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 border border-slate-200">
                    <p className="text-slate-500">Items</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {section.items.length}
                    </p>
                  </div>
                  <div className="rounded-xl bg-orange-50 px-3 py-2 border border-orange-100">
                    <p className="text-orange-700/80">Completion</p>
                    <p className="mt-1 font-semibold text-orange-700">92%</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 px-3 py-2 border border-emerald-100">
                    <p className="text-emerald-700/80">Impact</p>
                    <p className="mt-1 font-semibold text-emerald-700">High</p>
                  </div>
                </div>
              </div>

              {/* Cards area */}
              {!isLast ? (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col rounded-2xl border border-slate-200 bg-white px-4 py-4 hover:border-orange-500/70 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                            <FiCheckCircle className="h-4 w-4" />
                          </div>
                          <span className="inline-flex rounded-full bg-orange-50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-orange-700">
                            Service {i + 1}
                          </span>
                        </div>

                        {/* simple bar “graph” */}
                        <div className="flex items-end gap-0.5 h-6">
                          <span className="w-0.5 rounded-full bg-orange-200 h-2" />
                          <span className="w-0.5 rounded-full bg-orange-300 h-3" />
                          <span className="w-0.5 rounded-full bg-orange-400 h-4" />
                          <span className="w-0.5 rounded-full bg-orange-500 h-5" />
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                        {item}
                      </p>

                      <div className="mt-3">
                        <div className="h-1 w-full rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-orange-500 to-emerald-400" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start">
                  {/* Overview list */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                    <h3 className="text-base font-semibold text-slate-900 mb-3">
                      Overview
                    </h3>
                    <p className="text-base text-slate-600 mb-4">
                      A high-level view of how this service is delivered end-to-end.
                    </p>

                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-[11px] font-semibold text-orange-600">
                            {i + 1}
                          </span>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  
                </div>
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}
