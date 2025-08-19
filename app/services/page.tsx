"use client";

import Image from "next/image";

const services = [
  {
    title: "Cloud & DevOps",
    description:
      "Accelerate your business with scalable cloud solutions, CI/CD pipelines, and automation.",
    image: "/services/cloud-devops.png",
  },
  {
    title: "AI Automation",
    description:
      "Leverage artificial intelligence to optimize workflows and decision-making.",
    image: "/services/ai-automation.png",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your digital assets with enterprise-grade cybersecurity solutions.",
    image: "/services/cybersecurity.png",
  },
  {
    title: "IT Infrastructure",
    description:
      "Robust and reliable IT infrastructure tailored to your enterprise needs.",
    image: "/services/it-infrastructure.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Explore the wide range of technology services we offer to transform
          your business.
        </p>
      </div>

      {/* grid 4 cards in one row for desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-2xl transition border border-slate-700"
          ><div className="w-full h-40 relative mb-4 flex items-center justify-center bg-slate-900 rounded-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="p-2 object-contain"
             />
          </div>

            <h2 className="text-lg font-bold mb-2">{service.title}</h2>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
