// src/components/Careers.tsx
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Career, careers } from "../data/careers";
import { Clock, Rocket, Briefcase, Search } from "lucide-react";

const CareerCard = ({ career }: { career: Career }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-purple-100 dark:bg-gray-700 rounded-lg">
          <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {career.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {career.description}
          </p>
        </div>
      </div>

     

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4" />
          <span>
            {career.roadmap.reduce(
              (acc, phase) => acc + parseInt(phase.duration.split("-")[0]),
              0
            )}{" "}
            months
          </span>
        </div>
        <button
          onClick={() => navigate(`/career/${career.id}`)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors"
        >
          <Rocket className="h-4 w-4" />
          <span>View Path</span>
        </button>
      </div>
    </motion.div>
  );
};

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  const inView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const filteredCareers = careers.filter(
    (career: Career) =>
      career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Tech Career Paths
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore various technology career paths with detailed roadmaps,
            resources, and learning materials
          </p>
        </motion.div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search careers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute right-4 top-3.5" />
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCareers.map((career: Career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
