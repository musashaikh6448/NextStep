import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  CheckCircle2,
  XCircle,
  TrendingUp,
  Briefcase,
  IndianRupee,
  BookOpen,
  Globe,
  GraduationCap,
  Rocket,
  LucideClapperboard,
} from "lucide-react";
import { careerData } from "../data/careerData";

export const CareerRoadmap: React.FC = () => {
  const { degreeName } = useParams<{ degreeName: string }>();
  const career = careerData.find((c) => c.id === degreeName) || careerData[0];

  return (
    <div className="container mx-auto px-4 py-12 ">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          {career.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          {career.description}
        </p>
      </motion.header>

      {/* Program Overview */}
      <Section title="Program Overview" delay={0.2}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <InfoCard
              icon={<Globe className="w-5 h-5" />}
              title="Scope"
              content={career.overview.scope}
            />
            <InfoCard
              icon={<TrendingUp className="w-5 h-5" />}
              title="Future Prospects"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  {career.overview.futureProspects.map((path) => (
                    <li key={path} className="text-gray-600 dark:text-gray-300">
                      {path}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
          <div className="space-y-4">
            <InfoCard
              icon={<Briefcase className="w-5 h-5" />}
              title="Career Paths"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  {career.overview.careerPaths.map((path) => (
                    <li key={path} className="text-gray-600 dark:text-gray-300">
                      {path}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </Section>

      {/* Skills & Technical Expertise */}
      <Section title="Core Competencies" delay={0.3}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Fundamental Skills
            </h3>
            <SkillList items={career.skills} />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Technical Skills
            </h3>
            <SkillList items={career.technicalSkills} />
          </div>
        </div>
      </Section>

      {/* Learning Roadmap */}
      <Section title="Learning Roadmap" delay={0.4}>
        <div className="space-y-8">
          {career.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-l-4 border-blue-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {step.duration}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {step.description}
              </p>
              <div className="space-y-3">
                <h4 className="font-medium dark:text-white">
                  Recommended Resources:
                </h4>
                {step.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <span
                      className={`p-2 rounded-lg ${
                        resource.type === "course"
                          ? "bg-green-100 dark:bg-green-900/20"
                          : resource.type === "video"
                          ? "bg-purple-100 dark:bg-purple-900/20"
                          : "bg-blue-100 dark:bg-blue-900/20"
                      }`}
                    >
                      {resource.type === "course" ? (
                        <LucideClapperboard className="w-4 h-4 text-green-600 dark:text-green-400" />
                      ) : resource.type === "video" ? (
                        <Rocket className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      ) : (
                        <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      )}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {resource.title}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Industry Certifications" delay={0.5}>
        <div className="grid md:grid-cols-2 gap-6">
          {career.certifications.map((certification, index) => (
            <motion.div
              key={certification.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border-t-4 border-purple-500"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    {certification.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {certification.provider} • {certification.level}
                  </p>
                </div>
                <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certification
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Career Prospects */}
      <Section title="Career Prospects" delay={0.6}>
        <div className="grid md:grid-cols-2 gap-6">
          {career.careerProspects.map((prospect, index) => (
            <motion.div
              key={prospect.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                {prospect.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {prospect.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Salary Expectations */}
      <Section title="Salary Outlook" delay={0.7}>
        <div className="grid md:grid-cols-3 gap-6">
          <SalaryCard
            level="Starting"
            range={career.salary.starting}
            icon={<IndianRupee className="w-6 h-6" />}
          />
          <SalaryCard
            level="Mid-Level"
            range={career.salary.midLevel}
            icon={<IndianRupee className="w-6 h-6" />}
          />
          <SalaryCard
            level="Senior"
            range={career.salary.senior}
            icon={<IndianRupee className="w-6 h-6" />}
          />
        </div>
        <div className="mt-6 text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Key Factors:</span>{" "}
          {career.salary.factors.join(", ")}
        </div>
      </Section>

      {/* Dos and Don'ts */}
      <Section title="Success Guidelines" delay={0.8}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <h3 className="text-xl font-semibold dark:text-white">Do's</h3>
            </div>
            <ul className="space-y-3">
              {career.dos.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="h-6 w-6 text-red-500" />
              <h3 className="text-xl font-semibold dark:text-white">Don'ts</h3>
            </div>
            <ul className="space-y-3">
              {career.donts.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                >
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Future Preparation */}
      <Section title="Future Readiness" delay={0.9}>
        <div className="grid md:grid-cols-2 gap-4">
          {career.futurePreparation.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <TrendingUp className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Job Platforms */}
      <Section title="Job Platforms" delay={1.0}>
        <div className="flex flex-wrap gap-3">
          {career.jobPlatforms.map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {platform}
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

// Reusable components
const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  delay?: number;
}> = ({ title, children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="mb-16"
  >
    <h2 className="text-3xl font-bold mb-8 dark:text-white border-l-4 border-blue-500 pl-4">
      {title}
    </h2>
    {children}
  </motion.section>
);

const SkillList: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((skill) => (
      <motion.span
        key={skill}
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
      >
        {skill}
      </motion.span>
    ))}
  </div>
);

const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}> = ({ icon, title, content }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
        {icon}
      </div>
      <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
    </div>
    <div className="text-gray-600 dark:text-gray-300">{content}</div>
  </div>
);

const SalaryCard: React.FC<{
  level: string;
  range: string;
  icon: React.ReactNode;
}> = ({ level, range, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-center border border-gray-100 dark:border-gray-700"
  >
    <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 dark:text-white">{level}</h3>
    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
      {range}
    </p>
  </motion.div>
);
