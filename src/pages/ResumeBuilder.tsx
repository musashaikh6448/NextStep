import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  FileText,
  LayoutTemplate,
  AlertTriangle,
  Star,
  Link2,
  Frown,
  Rocket,
  Award,
  Briefcase,
  Shield,
  Image as ImageIcon,
  Smile,
  Camera,
} from "lucide-react";

const resumeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export const ResumeBuilder: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
          Craft Your ATS-Killer Resume
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          From Zero to Hero: Fresher Edition
        </p>
      </motion.div>

      {/* Key Points Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          variants={resumeVariants}
          className="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Do This Right
            </h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Star className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Use simple, clean templates (ATS can't read fancy graphics)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Include keywords from job description (Be a keyword ninja)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Focus on achievements, not responsibilities (Numbers speak
                louder!)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <LayoutTemplate className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Keep it concise and relevant (No one wants your life story)
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={resumeVariants}
          className="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Avoid These Traps
            </h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Frown className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Don't use tables or columns (ATS sees them as alien
                hieroglyphics)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Never lie about skills (You don't want to explain blockchain in
                interview)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Avoid "References available" (They'll ask if they want)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ImageIcon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Skip the profile photo (Unless you're applying to be a model)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Smile className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                Leave out hobbies (Unless your hobby is "being awesome at work")
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Resume Formats */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Winning Resume Formats
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Chronological",
              icon: <LayoutTemplate className="w-6 h-6 text-blue-500" />,
              desc: "Best for traditional industries. Show your steady career growth",
              bestFor: "Experienced professionals",
            },
            {
              title: "Functional",
              icon: <Rocket className="w-6 h-6 text-purple-500" />,
              desc: "Focus on skills over experience. Fresher's secret weapon",
              bestFor: "Career changers & freshers",
            },
            {
              title: "Combination",
              icon: <Award className="w-6 h-6 text-green-500" />,
              desc: "Mix of both worlds. Show skills AND progression",
              bestFor: "Most modern industries",
            },
          ].map((format, index) => (
            <motion.div
              key={format.title}
              variants={resumeVariants}
              custom={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-4">
                {format.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {format.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {format.desc}
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                🏆 Best for: {format.bestFor}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Free Resources */}
      <motion.div
        className=" p-8 rounded-2xl mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Free Resume Builders
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              name: "Canva",
              link: "https://www.canva.com",
              features: "Beautiful templates",
            },
            {
              name: "Novoresume",
              link: "https://novoresume.com",
              features: "ATS-friendly",
            },
            {
              name: "Google Docs",
              link: "https://docs.google.com",
              features: "Simple & clean",
            },
            {
              name: "Zety",
              link: "https://zety.com",
              features: "Guided builder",
            },
          ].map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={resumeVariants}
              custom={index}
              className="p-4 bg-white dark:bg-gray-700 rounded-xl hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2">
                <Link2 className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-900 dark:text-white">
                  {tool.name}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {tool.features}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          🎓 Fresher's Cheat Sheet
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="text-blue-500" /> What to Include
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Projects That Wow:
                  </strong>
                  <p className="text-gray-600 dark:text-gray-300">
                    That e-commerce app you built? Show it off! Even if it's
                    just 42 lines of code
                  </p>
                  <code className="block mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    // Bad: "Made a website"
                    <br />
                    // Good: "Built React inventory system with 95% test
                    coverage"
                  </code>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Skills That Matter:
                  </strong>
                  <p className="text-gray-600 dark:text-gray-300">
                    List actual skills, not "MS Office" (Everyone knows Ctrl+C/V
                    😉)
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded-full text-sm">
                      React Hooks
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded-full text-sm">
                      Python Flask
                    </span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 rounded-full text-sm">
                      CI/CD Pipelines
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-red-500" /> What to Avoid
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Frown className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    No Hobbies Zone:
                  </strong>
                  <p className="text-gray-600 dark:text-gray-300">
                    Unless you're applying to Nintendo, they don't care about
                    your Mario Kart skills 🚫🎮
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Camera className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <strong className="text-gray-900 dark:text-white">
                    Skip the Selfies:
                  </strong>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your face belongs on LinkedIn, not here 📸➡️🌐
                  </p>
                  <div className="mt-2 text-sm bg-red-100 dark:bg-red-800 p-2 rounded">
                    ⚠️ Pro Tip: That 2MB photo makes your resume heavy. HR hates
                    that!
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* New: Resume Anatomy */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          📝 Resume Anatomy (Fresher Edition)
        </h2>
        <div className="grid md:grid-cols-5 gap-4 text-center">
          {[
            {
              section: "Contact Info",
              emoji: "📲",
              tip: "Pro Email Only! (No 'cool_dude69@...)",
            },
            {
              section: "Education",
              emoji: "🎓",
              tip: "GPA 3.5+? Show it off!",
            },
            { section: "Skills", emoji: "💻", tip: "Max 10 relevant skills" },
            {
              section: "Projects",
              emoji: "🚀",
              tip: "3-5 STAR method projects",
            },
            { section: "Achievements", emoji: "🏆", tip: "Hackathons? Yes!" },
          ].map((item, index) => (
            <motion.div
              key={item.section}
              variants={resumeVariants}
              custom={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-2">{item.emoji}</div>
              <h3 className="font-bold mb-2">{item.section}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.tip}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* New: Real Examples */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          🆚 Good vs Bad Examples
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
              ❌ Disaster Resume
            </h3>
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {`EDUCATION:
B.Tech CSE - XYZ College (2020-2024)
- Was class representative

SKILLS:
- MS Office
- "Good communicator"
- Internet

HOBBIES:
- Watching movies
- Hanging with friends

REFERENCES:
Available on request`}
            </pre>
            <div className="mt-4 p-3 bg-red-100 dark:bg-red-800 rounded-lg">
              <AlertTriangle className="inline mr-2" />
              Why bad? Vague skills, irrelevant hobbies, no projects!
            </div>
          </div>

          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
              ✅ Winning Resume
            </h3>
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {`EDUCATION:
B.Tech Computer Science - XYZ College | 2020-2024
- GPA: 3.8/4.0
- Coursework: Data Structures, Cloud Computing

SKILLS:
- React, Node.js, Python
- AWS EC2, Docker
- Jest, Postman

PROJECTS:
E-Commerce Dashboard (React, Node)
- Built admin panel with 15+ CRUD operations
- Reduced API response time by 40% using caching

ACHIEVEMENTS:
- 1st Prize: CodeStorm Hackathon 2023
- Published paper on AI in IEEE Journal`}
            </pre>
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-800 rounded-lg">
              <CheckCircle className="inline mr-2" />
              Why good? Specifics, numbers, relevant tech!
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Example Resumes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Software Developer Fresher Resume",
              link: "https://www.naukri.com/career-advice/information-technology-it-resume-sample-ffid",
              desc: "A sample resume for fresh graduates aiming for software developer positions, highlighting academic projects and technical skills.",
            },
            {
              title: "IT Fresher Resume Sample",
              link: "https://www.naukri.com/career-advice/it-fresher-resume-sample-ffid",
              desc: "Guidance on creating an IT fresher resume with examples of abilities, profile summary, achievements, and education.",
            },
            {
              title: "Software Engineer Resume Sample",
              link: "https://www.naukri.com/career-advice/software-engineer-resume-sample-ffid",
              desc: "A comprehensive guide with multiple software engineer resume examples to help you land your desired job.",
            },
            {
              title: "Experienced Developer Resume Sharing Thread",
              link: "https://www.reddit.com/r/cscareerquestions/comments/7xcez9/official_experienced_currently_employed_developer/",
              desc: "A community-driven thread where experienced developers share their anonymized resumes for reference and inspiration.",
            },
          ].map((example, index) => (
            <motion.a
              key={example.title}
              href={example.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={resumeVariants}
              custom={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {example.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {example.desc}
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                🔗 View Example
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      
    </div>
  );
};
