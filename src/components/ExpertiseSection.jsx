"use client";

import { FaUsers, FaStar, FaUserTie, FaPeopleGroup } from "react-icons/fa6";

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-[#fafbff]">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold">OUR EXPERTISE</h2>
        <p className="text-gray-600 mt-2">Customized to your business needs</p>
      </div>

      <div className="container mx-auto px-6 mt-14 grid grid-cols-2 md:grid-cols-4 gap-10">

        <ExpertiseCard
          icon={<FaUserTie className="text-blue-600 text-3xl" />}
          title="Strategic HR Consulting"
        />

        <ExpertiseCard
          icon={<FaPeopleGroup className="text-blue-600 text-3xl" />}
          title="Executive Search"
        />

        <ExpertiseCard
          icon={<FaStar className="text-orange-500 text-3xl" />}
          title="Leadership Development"
        />

        <ExpertiseCard
          icon={<FaUsers className="text-blue-600 text-3xl" />}
          title="Team Development"
        />

      </div>
    </section>
  );
}

function ExpertiseCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full shadow-md">
        {icon}
      </div>
      <p className="font-medium text-center">{title}</p>
    </div>
  );
}
