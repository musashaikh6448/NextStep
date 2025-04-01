// src/components/CareerDetails.tsx
import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpenText,
  GraduationCap,
  Briefcase,
  Rocket,
  Code2,
  Network,
} from "lucide-react";

const CareerDetails: React.FC = () => {
  const features = [
    {
      icon: BookOpenText,
      title: "Structured Learning Paths",
      description: "Step-by-step guides with curated resources and milestones"
    },
    {
      icon: GraduationCap,
      title: "Certification Roadmaps",
      description: "Essential certifications for each career stage with preparation guides"
    },
    {
      icon: Briefcase,
      title: "Career Progression",
      description: "Clear path from junior to senior roles with skill requirements"
    },
    {
      icon: Rocket,
      title: "Emerging Technologies",
      description: "Cutting-edge tools and frameworks for modern development"
    },
    {
      icon: Code2,
      title: "Code Laboratories",
      description: "Practical coding exercises and real-world projects"
    },
    {
      icon: Network,
      title: "Industry Connections",
      description: "Networking opportunities with tech communities"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
            Comprehensive Career Development
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master in-demand technologies with our structured learning ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className=" p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  <feature.icon className="h-8 w-8 text-blue-500 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute left-0 right-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-200 dark:bg-blue-900 rounded-full blur-2xl opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default CareerDetails;