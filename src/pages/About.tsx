import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";
import sulemanimg from '../images/suleman.jpeg';
import musaimg from '../images/musa.jpeg';

const teamMembers = [
  {
    name: "Suleman Khan",
    role: "Software Developer",
    image: sulemanimg,
    education: "BCA Graduate",
    experience: "SELECTSKILLSET, Ireland · 3+ years experience",
    bio: "Full-stack developer passionate about creating intuitive digital experiences. I enjoy bridging the gap between complex systems and user-friendly interfaces. When I'm not coding, you'll find me exploring new tech or mentoring juniors.",
    expertise: "AWS Certified · DevOps Specialist",
    social: {
      linkedin: "https://www.linkedin.com/in/suleman-khan-304ab6279/",
      email: "mailto:dev.suleman.khan@gmail.com",
      insta: "https://instagram.com/suleman_khan55",
      whatsapp: "https://wa.me/919373960682", 
    },
  },
  {
    name: "Shaikh Musa",
    role: "MERN Stack Developer",
    image: musaimg,
    education: "BCA Student",
    experience: "Open Source Contributor · Tech Mentor",
    bio: "Backend developer with a love for clean architecture and efficient systems. I believe technology should empower people, and I'm passionate about making coding accessible to everyone. Currently exploring AI integration with web technologies.",
    expertise: "Python Developer · Database Architect",
    social: {
      linkedin: "https://www.linkedin.com/in/shaikh-musa-77a80631a/",
      email: "mailto:dev.shaikhmusa@gmail.com",
      insta: "https://instagram.com/shaikh.musa.08",
      whatsapp: "https://wa.me/917822896448", 
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
          Crafting Digital Futures
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Where academic knowledge meets real-world innovation
        </motion.p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Meet Our Team
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
                        title="Let's connect!"
                      >
                        {platform === "insta" ? (
                          <Instagram className="h-6 w-6" />
                        ) : platform === "whatsapp" ? (
                          <MessageCircle className="h-6 w-6" />
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
          Our Development Philosophy 🌱
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Suleman's Approach</h4>
            <p className="text-gray-600 dark:text-gray-300">
              "Great software starts with understanding people. 
              Every line of code should solve real human needs."
            </p>
            <div className="mt-2 text-sm text-blue-600 dark:text-blue-400">
              Advice to students: Focus on fundamentals, 
              frameworks will follow naturally
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Musa's Perspective</h4>
            <p className="text-gray-600 dark:text-gray-300">
              "Technology grows best in collaborative environments. 
              Let's build solutions that bring people together."
            </p>
            <div className="mt-2 text-sm text-green-600 dark:text-green-400">
              New developer tip: Embrace the learning journey - 
              every challenge is growth in disguise
            </div>
          </div>
        </div>
      </motion.div>

      {/* Coding Truths */}
      <motion.div
        className="p-8 rounded-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h3 className="text-2xl font-bold text-center mb-4">
          Our Core Beliefs
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="font-bold text-xl">Continuous Learning</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "We view every project as an opportunity 
              to grow and improve our craft"
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
            <p className="font-bold text-xl">Collaborative Spirit</p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "The best solutions emerge when diverse 
              perspectives work together"
            </p>
          </div>
        </div>
      </motion.div>

      {/* Closing Note */}
      <div className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8">
        {teamMembers[0].name.split(" ")[0]} brings system architecture expertise,
        {teamMembers[1].name.split(" ")[1]} focuses on user-centric design.
        <div className="text-xs mt-2">
          Together we believe: Technology should connect, not complicate
        </div>
      </div>
    </div>
  );
};