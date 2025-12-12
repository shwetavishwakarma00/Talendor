"use client";
import { useEffect, useRef } from 'react';

export default function Home() {
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('opacity-100', 'translate-y-0');
        obs.unobserve(entry.target);
      });
    }, observerOptions);

    fadeRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white font-roboto text-textGray max-w-4xl mt-15 mx-auto px-6 py-12 sm:py-16">
      {/* Founder Image */}
      <section className="flex justify-center mb-8">
        <img
          src="/images/praveen_chandola.png" // Replace with your image path
          alt="Praveen Chandola"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-primary shadow-md"
        />
      </section>

      {/* Header */}
      <section>
        <h1 className="text-primary text-4xl sm:text-5xl font-bold mb-2 text-center">
          Praveen Chandola
        </h1>
        <h3 className="text-primary text-xl sm:text-2xl font-semibold mb-6 text-center">
          Strategic HR Consultant | Executive Coach & Trainer
        </h3>
        <p className="bg-backgroundGray border-l-8 border-primary p-5 rounded-md text-base sm:text-lg font-medium">
          <strong>20+ years global HR expertise across India, APAC, Middle East, Russia, Latin America.</strong> Passionate about driving organizational development, talent strategy, and culture transformation.
        </p>
      </section>

      {/* Experience Summary */}
      <section
        ref={el => (fadeRefs.current[0] = el)}
        className="opacity-0 translate-y-10 transition-all duration-700 ease-out mt-12"
      >
        <h2 className="border-b-2 border-primary text-primary text-2xl font-bold mb-4">
          Experience Summary
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          Praveen has led critical roles such as Head HR, HR Business Partner, and Global HR CoE Leader at Sennheiser. Key achievements include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
          <li>Building scalable HR processes & global talent strategies</li>
          <li>Driving culture and organizational transformation globally</li>
          <li>Executing complex M&A, carve-outs, and digital HR transformations</li>
          <li>Core contributor to DEI, wellbeing, and sustainability programs</li>
          <li>Trusted advisor aligning HR with business goals</li>
        </ul>
      </section>

      {/* Continual Learning */}
      <section
        ref={el => (fadeRefs.current[1] = el)}
        className="opacity-0 translate-y-10 transition-all duration-700 ease-out mt-12"
      >
        <h2 className="border-b-2 border-primary text-primary text-2xl font-bold mb-4">
          Continual Learning & Certifications
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          Committed to growth through ongoing learning:
        </p>
        <ul className="columns-1 sm:columns-2 list-disc list-inside space-y-2 text-base sm:text-lg">
          <li>2550 hours Training & Facilitation Experience</li>
          <li>310 hours Coaching Experience</li>
          <li>Master Trainer & Facilitator, Dale Carnegie</li>
          <li>Master Coach, Erickson International</li>
          <li>Performance Management, IIM Kolkata</li>
          <li>Insights Discovery Psychometric, UK</li>
          <li>Team Management Systems, Australia</li>
          <li>NLP Practitioner, NFNLP</li>
          <li>PGC HR, XLRI</li>
          <li>Inner Engineering, Isha Foundation</li>
        </ul>
      </section>

      {/* Personal Traits */}
      <section
        ref={el => (fadeRefs.current[2] = el)}
        className="opacity-0 translate-y-10 transition-all duration-700 ease-out mt-12"
      >
        <h2 className="border-b-2 border-primary text-primary text-2xl font-bold mb-4">
          Personal Traits
        </h2>
        <p className="text-base sm:text-lg">
          Self-driven, self-aware with a humble attitude, Praveen loves nature and adventure and maintains a continuous learning mindset to keep evolving.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-16">
        <div className="bg-primary text-white rounded-md py-6 px-8 text-center font-semibold select-none">
          <p className="text-lg sm:text-xl mb-2">Contact</p>
          <p className="text-base sm:text-lg">
            Mobile:{' '}
            <a
              href="tel:+919818711851"
              aria-label="Call Praveen Chandola"
              className="underline hover:text-primaryLight transition-colors"
            >
              +91 98187 11851
            </a>{' '}
            | E-mail:{' '}
            <a
              href="mailto:praveen@talendor.in"
              aria-label="Email Praveen Chandola"
              className="underline hover:text-primaryLight transition-colors"
            >
              praveen@talendor.in
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
