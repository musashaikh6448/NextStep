import React from "react";
import { motion } from "framer-motion";

type NewsItem = {
  company: string;
  location: string;
  category: string;
  updates: string[];
  positions: string[];
};

const newsData: NewsItem[] = [
  {
    company: "MVC Technologies",
    location: "India",
    category: "Tech & Hiring",
    updates: [
      "Hybrid work environment since March 2025.",
      "Hiring from April 15 to May 30, 2025.",
      "Offering internships for freshers (paid)."
    ],
    positions: ["React Developer", "Node.js Developer", "DevOps Engineer", "Intern"]
  },
  {
    company: "Zeta Labs",
    location: "India",
    category: "Expansion & Innovation",
    updates: [
      "New R&D center launched in Bangalore.",
      "Hiring between May 1 - June 15, 2025.",
      "Remote and office positions available."
    ],
    positions: ["Backend Developer", "QA Engineer", "AI Researcher"]
  },
  {
    company: "TuringMinds",
    location: "India",
    category: "Remote Culture",
    updates: [
      "Fully remote, async-first company culture adopted.",
      "Hiring ongoing from April 10 - May 20, 2025.",
      "Internships available for freshers (unpaid)."
    ],
    positions: ["Product Designer", "Flutter Developer", "AI Prompt Engineer", "Intern"]
  },
  {
    company: "Shopify",
    location: "Canada",
    category: "Tech Stack Update",
    updates: [
      "Migrated to React Server Components.",
      "Global hiring open from April 5 - May 31, 2025.",
      "Hybrid work model implemented."
    ],
    positions: ["Full Stack Developer", "Product Manager", "UI/UX Designer"]
  },
  {
    company: "ByteWave",
    location: "Germany",
    category: "Blockchain R&D",
    updates: [
      "Exploring Ethereum Layer 2 solutions.",
      "Hiring from April 22 - June 1, 2025.",
      "Office-based roles with flexible hours."
    ],
    positions: ["Blockchain Developer", "Rust Engineer", "Security Analyst"]
  },
  {
    company: "CodeNova",
    location: "India",
    category: "Fresh Talent Drive",
    updates: [
      "Campus hiring from tier 2 cities ongoing.",
      "Drive from April 25 - May 20, 2025.",
      "Paid internships for fresh graduates."
    ],
    positions: ["Junior Web Developer", "Support Engineer", "Trainee QA", "Intern"]
  },
  {
    company: "RemoteBase",
    location: "USA",
    category: "Remote-First Jobs",
    updates: [
      "Hiring remote engineers across 20 countries.",
      "Hiring between April 15 - May 31, 2025.",
      "Fully remote positions with flexible hours."
    ],
    positions: ["React Native Dev", "DevOps", "Remote Tech Lead"]
  },
  {
    company: "GreenLeaf Tech",
    location: "India",
    category: "Sustainability & Hiring",
    updates: [
      "Focus on sustainable technology solutions.",
      "Hiring from May 1 - June 15, 2025.",
      "Hybrid work environment with office and remote options."
    ],
    positions: ["Environmental Data Scientist", "Sustainability Engineer", "Green Tech Developer"]
  },
  {
    company: "InnoTech Solutions",
    location: "India",
    category: "Innovation & Hiring",
    updates: [
      "Innovative projects in AI and ML.",
      "Hiring from April 20 - May 30, 2025.",
      "Office-based roles with occasional remote work."
    ],
    positions: ["AI Engineer", "ML Researcher", "Data Scientist"]
  },
  {
    company: "FutureTech Labs",
    location: "India",
    category: "Future Tech & Hiring",
    updates: [
      "Exploring quantum computing and AI.",
      "Hiring from April 10 - May 25, 2025.",
      "Remote and office positions available."
    ],
    positions: ["Quantum Computing Researcher", "AI Specialist", "Future Tech Engineer"]
  }
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen  text-white py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold mb-10 text-center">📢 Tech Company News & Hiring</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {newsData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h2 className="text-xl font-bold text-blue-400 mb-1">{item.company}</h2>
            <p className="text-sm text-gray-400">
              {item.location} — <span className="italic">{item.category}</span>
            </p>

            <div className="mt-3 text-sm text-gray-300 space-y-1">
              {item.updates.map((update, i) => (
                <p key={i}>• {update}</p>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-sm text-green-400 font-semibold">📌 Open Positions:</p>
              <ul className="list-disc list-inside text-sm text-gray-200 mt-1 space-y-1">
                {item.positions.map((pos, i) => (
                  <li key={i}>{pos}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
