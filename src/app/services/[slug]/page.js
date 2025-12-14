
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import services from "@/data/services.json";

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
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-600">
          Loading service...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          {service.title}
        </h1>

        <div className="space-y-10">
          {service.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">
                {section.heading}
              </h2>

              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-gray-100 rounded-md px-4 py-2 text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



