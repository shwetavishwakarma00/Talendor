'use client'
import React from 'react'
import data from '@/data/founders.json'
import { useParams } from 'next/navigation'

const FounderPage = () => {
  const { slug } = useParams()
  const founder = data.founders.find((f) => f.slug === slug)

  if (!founder) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Founder Not Found</h1>
          <p className="text-xl text-gray-600">Please check the URL or select from our founders list.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mt-10 mb-20">
          <div className="inline-block w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl mb-8 overflow-hidden ring-4 ring-white/50">
            <img 
              src={founder.image} 
              alt={founder.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            {founder.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            {founder.title}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            {founder.description.map((desc, index) => (
              <p key={index} className="bg-white/70 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/50">
                {desc}
              </p>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Experience Summary */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 sticky top-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                Professional Journey
              </h2>
              <div className="space-y-4">
                {founder.experienceSummary.map((item, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 hover:bg-blue-50 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200/50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                Continuous Learning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {founder.continuousLearning.map((item, index) => (
                  <div key={index} className="group bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <p className="font-semibold text-gray-800 group-hover:text-emerald-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a 
                  href={`tel:${founder.contact.mobile}`}
                  className="group flex items-center gap-3 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mobile</p>
                    <p className="font-semibold text-lg text-gray-900">{founder.contact.mobile}</p>
                  </div>
                </a>
                <a 
                  href={`mailto:${founder.contact.email}`}
                  className="group flex items-center gap-3 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-lg text-gray-900">{founder.contact.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderPage
