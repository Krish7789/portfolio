// src/components/Certifications.tsx
import React from "react";
import { ExternalLinkIcon } from "lucide-react";

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "Nov 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/Q0DJH8DYY3X0",
  },
  {
    title: "Python, Data Science & Machine Learning Integrated",
    issuer: "Cipher School",
    date: "July 2024",
    url: "https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/64182f1246adb4a1ec143153_6625050a0e5fc49e9cfa54b2",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "Jul-Oct 2024",
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS118S157020139104431399",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Udemy",
    date: "Feb 2024",
    url: "https://www.udemy.com/certificate/UC-f9d87e03-f2e7-4035-9432-2ac475b57322/",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/P82FNBZXRJC6",
  },
  {
    title: "Software Development Processes and Methodologies",
    issuer: "Coursera",
    date: "May 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/HYRH6MS3V2GN",
  }
  // Add more certificates here
];

export default function Certifications() {
  return (
    <section id="certifications" className="my-16 px-6">
      <h2 className="text-5xl font-bold text-center mb-8">
        <span className="text-white">Certifi</span>
        <span className="text-red-500">cations</span>
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl shadow-md flex flex-col gap-2 relative group hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition"
                aria-label={`Verify ${cert.title}`}
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-white">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
