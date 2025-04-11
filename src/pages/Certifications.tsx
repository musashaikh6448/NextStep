import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Clock, Award, DollarSign, Link } from "lucide-react";
import { certifications } from "../data/certifications";
import AdsterraNativeBanner from "../components/AdsterraNativeBanner";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 + 0.2 },
  }),
};

export const Certifications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [paidFilter, setPaidFilter] = useState<"all" | "paid" | "free">("all");
  const [durationFilter, setDurationFilter] = useState<"all" | "short" | "medium" | "long">("all");

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      // Search filter
      const matchesSearch = 
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.provider.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Paid/Free filter
      const matchesPaidFilter = 
        paidFilter === "all" || 
        cert.paid.toLowerCase() === paidFilter.toLowerCase();
      
      // Duration filter
      const matchesDurationFilter = (() => {
        if (durationFilter === "all") return true;
        const hours = parseInt(cert.duration);
        if (durationFilter === "short") return hours <= 20;
        if (durationFilter === "medium") return hours > 20 && hours <= 50;
        if (durationFilter === "long") return hours > 50;
        return true;
      })();
      
      return matchesSearch && matchesPaidFilter && matchesDurationFilter;
    });
  }, [searchQuery, paidFilter, durationFilter]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
          Boost Your Career
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Valuable certifications to enhance your technical skills
        </p>
      </motion.div>

      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Search Input */}
        <div className="relative col-span-1 md:col-span-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by title or provider..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Filter Group */}
        <div className="grid grid-cols-2 gap-4">
          {/* Paid/Free Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <select
              value={paidFilter}
              onChange={(e) => setPaidFilter(e.target.value as "all" | "paid" | "free")}
              className="block w-full pl-10 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none transition-all"
            >
              <option value="all">All Types</option>
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Filter className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>

          {/* Duration Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <select
              value={durationFilter}
              onChange={(e) => setDurationFilter(e.target.value as "all" | "short" | "medium" | "long")}
              className="block w-full pl-10 pr-8 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none transition-all"
            >
              <option value="all">All Durations</option>
              <option value="short">Short (&lt;20h)</option>
              <option value="medium">Medium (20-50h)</option>
              <option value="long">Long (&gt;50h)</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6 flex justify-between items-center"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredCertifications.length} of {certifications.length} certifications
        </span>
        {searchQuery || paidFilter !== "all" || durationFilter !== "all" ? (
          <button
            onClick={() => {
              setSearchQuery("");
              setPaidFilter("all");
              setDurationFilter("all");
            }}
            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            Clear all filters
          </button>
        ) : null}
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((certification, index) => (
            <motion.div
              key={`${certification.title}-${index}`}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5 }}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all h-full"
            >
              {/* Header with Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg flex-shrink-0">
                  <certification.icon className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {certification.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {certification.provider}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow line-clamp-3">
                {certification.description}
              </p>
              
              {/* Metadata */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {certification.duration}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    certification.paid === "Paid" 
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200" 
                      : "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200"
                  }`}>
                    {certification.paid}
                  </span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Award className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">{certification.popularity}</span>
                </div>
              </div>
              
              {/* Importance */}
              <div className="mt-auto mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 italic line-clamp-2">
                  <span className="font-medium">Why it matters:</span> {certification.importance}
                </p>
              </div>
              
              {/* Button */}
              <div className="mt-auto">
                <motion.a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Certified
                  <Link size={15}/>
                </motion.a>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center py-16"
          >
            <div className="mx-auto max-w-md">
              <Search className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No certifications found
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setPaidFilter("all");
                  setDurationFilter("all");
                }}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Reset filters
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Additional Info Section */}
      <motion.div
        className="mt-16 p-8 rounded-2xl "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why These Certifications Matter?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Industry Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    These certifications are respected by tech companies worldwide and validate your skills.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Career Advancement</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Boost your resume and LinkedIn profile credibility with recognized credentials.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Updated Curriculum</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Learn the latest tools and technologies that are currently in demand in the industry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
                  <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Structured Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Follow a proven path to master specific skills without getting overwhelmed by choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <AdsterraNativeBanner/>

    </div>
  );
};