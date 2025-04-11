import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { degrees } from "../data/degrees";
import AdsterraNativeBanner from "../components/AdsterraNativeBanner";

export const Degrees: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Update the filteredDegrees logic with better search handling
  const filteredDegrees = degrees.filter((degree) => {
    const normalize = (str: string) =>
      str.toLowerCase()
        .replace(/[^a-z0-9]/g, '') // Remove special characters and spaces
        .trim();

    const searchTermNormalized = normalize(searchTerm);

    const nameMatch = normalize(degree.name).includes(searchTermNormalized);
    const fullFormMatch = normalize(degree.fullForm).includes(searchTermNormalized);
    const careersMatch = degree.careers.some(c =>
      normalize(c).includes(searchTermNormalized)
    );

    return nameMatch || fullFormMatch || careersMatch;
  });

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Computer Science Degree Program
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Premier engineering program for next-generation technology leaders
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col sm:flex-row gap-4 items-stretch"
      >
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search program details..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
        </div>
      </motion.div>

      {/* Degree Card Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDegrees.map((degree, index) => {
          const visibleCareers = degree.careers.slice(0, 3);
          const remaining = degree.careers.length - 3;

          return (
            <motion.div
              key={degree.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex flex-col "
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900/50 dark:to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative space-y-4 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {degree.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {degree.fullForm}
                    </p>
                  </div>


                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 flex-1">
                  {degree.description}
                </p>

                {/* Careers */}
                <div className="pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Career Paths:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {visibleCareers.map((career) => (
                      <span
                        key={career}
                        className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        {career}
                      </span>
                    ))}
                    {remaining < 10 && (
                      <span className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 text-sm rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors">
                        + more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/degree/${degree.id}`}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors"
                >
                  Explore Program
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredDegrees.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 space-y-4"
        >
          <div className="text-6xl">🎓</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            No matching program found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try different search terms or adjust filters
          </p>
        </motion.div>
      )}
      <AdsterraNativeBanner />

    </div>
  );
};
