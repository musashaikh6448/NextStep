import React from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Cloud,
  Rocket,
  GraduationCap,
  Shield,
  Database,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const pathwayNodes = [
  {
    id: "core-tech",
    icon: Code2,
    title: "Full-Stack Development",
    skills: ["React/Next.js", "Node.js", "REST/GraphQL", "TypeScript"],
    connections: ["cloud-devops", "database"],
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    title: "Cloud Infrastructure",
    skills: ["AWS/Azure", "Kubernetes", "Terraform", "CI/CD"],
    connections: ["security"],
  },
  {
    id: "database",
    icon: Database,
    title: "Data Engineering",
    skills: ["SQL/NoSQL", "Apache Spark", "ETL", "Data Modeling"],
    connections: ["ai-ml"],
  },
  {
    id: "security",
    icon: Shield,
    title: "Cyber Security",
    skills: ["Network Security", "Cryptography", "Pen Testing", "SIEM"],
    connections: [],
  },
  {
    id: "foundation",
    icon: GraduationCap,
    title: "Core Foundations",
    skills: [
      "Programming Basics",
      "Version Control",
      "CLI Mastery",
      "Algorithms",
    ],
    connections: ["core-tech"],
  },
];

const CareerPathway = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const inView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const nodeVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
    hover: { y: -8, boxShadow: "0 12px 24px -6px rgba(147, 51, 234, 0.15)" },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Professional Tech Roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Strategic career progression framework for modern software
            engineering
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative h-auto py-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {pathwayNodes.map((node, index) => (
              <motion.div
                key={node.id}
                custom={index}
                variants={nodeVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                className="relative group h-full flex"
              >
                <div className="  p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex flex-col flex-1 transition-all">
                  {/* Icon Container */}
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg">
                      <node.icon className="h-7 w-7 text-purple-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 line-clamp-2">
                    {node.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {node.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => navigate("/careers")}
                    className="mt-auto w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => navigate("/careers")}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span>Start Learning Path</span>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0 }}
          >
            <button onClick={()=>navigate("/certifications")} className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-3 group">
              <GraduationCap className="h-5 w-5 text-purple-600 transition-transform group-hover:translate-x-1" />
              <span>View Certifications</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerPathway;
