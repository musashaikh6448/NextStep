import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Instagram } from "lucide-react";
import sulemanimg from '../images/suleman.jpeg'
import musaimg from '../images/musa.jpeg'

const teamMembers = [
  {
    name: "Suleman Khan",
    role: "Senior Software Engineer",
    image: sulemanimg,
    education: "BCA Graduate (Passed, but I Have No Idea How)",
    experience: "SELECTSKILLSET, Ireland · 3+ years experience",
    bio: "Full-stack developer who believes in writing code so clean it makes the compiler smile. Tech Stack: React, Node.js, AWS (Still figuring out why cloud bills are so unpredictable)",
    expertise: "AWS Certified · DevOps Enthusiast",
    social: {
      linkedin: "https://www.linkedin.com/in/suleman-khan-304ab6279/",
      email: "mailto:dev.suleman.khan@gmail.com",
      insta: "https://instagram.com/suleman_khan55",
      phone: "tel:+919373960682",
    },
  },
  {
    name: "Shaikh Musa",
    role: "MERN Stack Developer",
    image: musaimg,
    education: "BCA Student (Future First Class)",
    experience: "Open Source Contributor · Tech Mentor",
    bio: "Backend specialist who can turn coffee into Python code. Believes in writing documentation that even future self can understand  Syntax Error Specialist",
    expertise: "Python Expert · Database Wizard",
    social: {
      linkedin: "https://www.linkedin.com/in/shaikh-musa-77a80631a/",
      email: "mailto:shaikhmusa6448@gmail.com",
      insta: "https://instagram.com/shaikh.musa.08",
      phone: "tel:+917822896448",
    },
  },
];

export const About: React.FC = () => {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          Technical Career Path
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Bridging college concepts with industry requirements
        </motion.p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Our Tech Warriors
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 dark:border-gray-700 mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-600 mb-2 text-lg dark:text-gray-300">
                      {member.education}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {member.experience}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center space-x-5">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                        title={
                          platform === "phone"
                            ? "Call after 10AM - 6PM (IST)"
                            : "Let's connect!"
                        }
                      >
                        {platform === "insta" ? (
                          <Instagram className="h-6 w-6" />
                        ) : platform === "phone" ? (
                          <Phone className="h-6 w-6" />
                        ) : (
                          {
                            linkedin: <Linkedin className="h-6 w-6" />,
                            email: <Mail className="h-6 w-6" />,
                          }[platform]
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Chronicles */}
      <motion.div
        className="p-8 rounded-3xl text-center"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Developer Chronicles 👨💻
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Suleman's Coding Wisdom</h4>
            <p className="text-gray-600 dark:text-gray-300">
              "Remember: Your first Hello World program
              <br />
              is just the beginning of infinite semicolons"
            </p>
            <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
              Student Tip: Start with small projects,
              <br />
              the compiler errors will grow with you
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Musa's Python Advice</h4>
            <p className="text-gray-600 dark:text-gray-300">
              "Python doesn't use curly braces,
              <br />
              but you'll still find yourself searching for missing ones"
            </p>
            <div className="mt-2 text-sm text-green-600 dark:text-green-400">
              First Year Mantra:
              <br />
              print("I'll understand this someday")
            </div>
          </div>
        </div>
        <img
          src="https://placehold.co/800x400?text=From+Hello+World+to+System+Design"
          alt="The developer journey"
          className="rounded-2xl mx-auto border border-gray-200 dark:border-gray-700"
        />
      </motion.div>

      {/* Coding Truths */}
      <motion.div
        className="p-8 rounded-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h3 className="text-2xl font-bold text-center mb-4">
          Developer Truths
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="font-bold text-xl">For New Developers</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Your first program works?
              <br />
              Don't worry, that won't last long"
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="font-bold text-xl">College vs Reality</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "In exams: Write bubble sort
              <br />
              In interviews: Why bubble sort?"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Pro Tip */}
      <div className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8">
        {teamMembers[0].name.split(" ")[0]} writes production code,
        {teamMembers[1].name.split(" ")[1]} writes readable code.
        <div className="text-xs mt-2">
          Together we write: // TODO: Fix this later
        </div>
      </div>
    </div>
  );
};

