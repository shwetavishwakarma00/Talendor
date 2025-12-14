"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";
import { useParams } from "next/navigation";

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

export default function ProductPage() {
  const { slug } = useParams();

  const product = productsData.products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-orange-400 text-white">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:justify-between">
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-purple-100">
              {product.hero.badge}
            </p>

            <h1 className="mt-3 text-3xl font-bold md:text-4xl">
              {product.hero.title}
            </h1>

            <p className="mt-4 text-sm md:text-base text-purple-100/80">
              {product.hero.description}
            </p>

            <div className="mt-6 flex gap-3">
              <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-purple-700">
                {product.hero.primaryCta}
              </button>
              <button className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold">
                {product.hero.secondaryCta}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-60 w-60 md:h-72 md:w-72"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src={product.hero.image.src}
              alt={product.hero.image.alt}
              fill
              className="object-contain"
            />
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
          <h2 className="text-2xl font-semibold">
            {product.fourColourModel.title}
          </h2>
          <p className="mt-3 text-slate-600">
            {product.fourColourModel.description}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {product.fourColourModel.items.map((item, idx) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border p-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx + 1}
              variants={fadeUp}
            >
              <div
                className={`h-1 w-full rounded-full bg-gradient-to-r ${item.color}`}
              />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">
              {product.journey.title}
            </h2>
            <p className="mt-3 text-slate-600">
              {product.journey.description}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {product.journey.areas.map((area) => (
                <div
                  key={area}
                  className="bg-white p-3 rounded-xl shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-64 w-64 mx-auto">
            <Image
              src={product.journey.image.src}
              alt={product.journey.image.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-purple-600">
          {product.expertise.badge}
        </p>
        <h2 className="mt-2 text-2xl font-semibold">
          {product.expertise.title}
        </h2>
        <p className="mt-3 text-slate-600">
          {product.expertise.description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {product.expertise.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-orange-400 text-center text-white p-10">
          <h2 className="text-2xl font-semibold">
            {product.cta.title}
          </h2>
          <p className="mt-3">{product.cta.description}</p>
          <div className="mt-6 flex justify-center gap-3">
            <button className="bg-white text-purple-700 px-6 py-2 rounded-full">
              {product.cta.primary}
            </button>
            <button className="border border-white px-6 py-2 rounded-full">
              {product.cta.secondary}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
