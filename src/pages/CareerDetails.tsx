// src/components/CareerDetails.tsx
import { useParams } from "react-router-dom";
import { careers } from "../data/careers";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  Briefcase,
  X,
  ChevronLeft,
  CheckCircle2,
  Globe,
  GraduationCap,
  Code2,
  Users,
  TrendingUp,
  Youtube,
  WalletCards,
} from "lucide-react";
import { Career } from "../data/careers";

const CareerDetails = () => {
  const { id } = useParams();
  const career = careers.find((c) => c.id === id);

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <X className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Career not found
          </h1>
          <Link
            to="/careers"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12 px-4 sm:px-6 lg:px-8  min-h-screen"
    >
      <div className="container mx-auto max-w-7xl">
        <Link
          to="/careers"
          className="mb-8 inline-flex items-center text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span>Back to Careers</span>
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-200/30 dark:border-gray-700/50"
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start gap-6 mb-10">
            <div className="p-5 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-xl">
              <Code2 className="h-12 w-12 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                {career.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {career.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-purple-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {career.roadmap.reduce(
                      (acc, phase) =>
                        acc + parseInt(phase.duration.split("-")[0]),
                      0
                    )}{" "}
                    months
                  </span>
                </div>
                <div className="flex items-center bg-blue-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {career.marketTrends.demandLevel} Demand
                  </span>
                </div>
                <div className="flex items-center bg-green-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  <WalletCards className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {career.certifications.length}+ Certifications
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Career Overview */}
              <Section title="Career Overview">
                <div className="space-y-6">
                  <InfoCard
                    icon={<BookOpen className="h-5 w-5 text-purple-600" />}
                    title={`What is ${career.title}?`}
                    content={career.whatIs}
                  />
                  <InfoCard
                    icon={<Briefcase className="h-5 w-5 text-blue-600" />}
                    title="Job Responsibilities"
                    content={
                      <ul className="list-disc pl-5 space-y-2">
                        {career.jobDescription
                          .split(". ")
                          .map((point, index) => (
                            <li
                              key={index}
                              className="text-gray-600 dark:text-gray-300"
                            >
                              {point}
                            </li>
                          ))}
                      </ul>
                    }
                  />
                </div>
              </Section>

              {/* Roadmap */}
              <Section title="Learning Roadmap">
                <CareerRoadmap career={career} />
              </Section>

              {/* Requirements */}
              <Section title="Professional Requirements">
                <div className="grid md:grid-cols-2 gap-6">
                  <InfoCard
                    icon={<Code2 className="h-5 w-5 text-green-600" />}
                    title="Technical Skills"
                    content={
                      <ul className="space-y-2">
                        {career.requirements.technical.map((skill, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    }
                  />
                  <InfoCard
                    icon={<Users className="h-5 w-5 text-blue-600" />}
                    title="Soft Skills"
                    content={
                      <ul className="space-y-2">
                        {career.requirements.softSkills.map((skill, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                          >
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    }
                  />
                </div>
              </Section>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Salary Information */}
              <Section title="Salary Insights">
                <div className="space-y-4">
                  {career.salary.map((salary, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="h-5 w-5 text-purple-600" />
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                          {salary.region}
                        </h3>
                      </div>
                      <div className="space-y-1">
                        <SalaryRow label="Entry" value={salary.entry} />
                        <SalaryRow
                          label="Average"
                          value={salary.average}
                          highlight
                        />
                        <SalaryRow label="Senior" value={salary.senior} />
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Education & Market Trends */}
              <Section title="Education & Trends">
                <div className="space-y-6">
                  <InfoCard
                    icon={<GraduationCap className="h-5 w-5 text-purple-600" />}
                    title="Education Path"
                    content={
                      <div className="space-y-3">
                        {career.education.preferredDegrees.length > 0 && (
                          <div>
                            <h4 className="font-medium mb-1">
                              Preferred Degrees:
                            </h4>
                            <ul className="list-disc pl-5">
                              {career.education.preferredDegrees.map(
                                (degree, index) => (
                                  <li
                                    key={index}
                                    className="text-gray-600 dark:text-gray-300"
                                  >
                                    {degree}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    }
                  />

                  <InfoCard
                    icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
                    title="Market Trends"
                    content={
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 dark:text-gray-300">
                            Popularity: {career.marketTrends.popularity}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600 dark:text-gray-300">
                            Growth: {career.marketTrends.jobGrowth}
                          </span>
                        </div>
                      </div>
                    }
                  />
                </div>
              </Section>

              {/* Learning Resources */}
              <Section title="Learning Resources">
                <div className="space-y-4">
                  <ResourceSection
                    title="YouTube Channels"
                    items={career.resources.youtube}
                    icon={<Youtube className="h-5 w-5 text-red-600" />}
                  />
                  <ResourceSection
                    title="Free Resources"
                    items={career.resources.free}
                    icon={<BookOpen className="h-5 w-5 text-green-600" />}
                  />
                  <ResourceSection
                    title="Paid Courses"
                    items={career.resources.paid}
                    icon={<WalletCards className="h-5 w-5 text-blue-600" />}
                  />
                </div>
              </Section>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Reusable Components
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const InfoCard = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => (
  <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200/30 dark:border-gray-600">
    <div className="flex items-center gap-3 mb-3">
      {icon}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
    </div>
    <div className="text-gray-600 dark:text-gray-300">{content}</div>
  </div>
);

const SalaryRow = ({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div
    className={`flex justify-between items-center p-2 rounded-lg ${
      highlight ? "bg-purple-50 dark:bg-gray-600" : ""
    }`}
  >
    <span className="text-gray-600 dark:text-gray-300">{label}</span>
    <span className="font-medium text-gray-700 dark:text-gray-200">
      {value.toLocaleString()}
    </span>
  </div>
);

const CareerRoadmap = ({ career }: { career: Career }) => (
  <div className="space-y-6">
    {career.roadmap.map((phase, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 bg-white dark:bg-gray-700 rounded-xl border border-gray-200/30 dark:border-gray-600"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {phase.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {phase.duration}
          </span>
        </div>

        <div className="grid gap-4">
          <PhaseSection title="Key Steps" items={phase.steps} />
          <PhaseSection title="Recommended" items={phase.dos} type="do" />
          <PhaseSection title="Avoid" items={phase.donts} type="dont" />
        </div>
      </motion.div>
    ))}
  </div>
);

const PhaseSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
  type?: "do" | "dont" | "default";
}) => {
  return (
    <div className={`p-3 rounded-lg `}>
      <h4 className="font-medium mb-2">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
          >
            <span className="text-sm mt-1">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ResourceSection = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) => (
  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-3">
      {icon}
      <h3 className="font-medium text-gray-800 dark:text-gray-200">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-md transition-colors"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default CareerDetails;
