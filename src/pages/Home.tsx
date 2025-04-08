import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import career from "../images/career.jpg";
import  CareerCloud  from "../components/CareerCloud";
import CareerDetails from "../components/CareerDetails";
import CareerPathway from "../components/CareerPathway";
import GeminiEffect from "./GeminiEffect";
import AdsterraNativeBanner from "../components/AdsterraNativeBanner";

export const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className=" flex items-center ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8 relative">
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-50"
              variants={itemVariants}
            />

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
            >
              Master Tech Careers
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl font-medium bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
              With Structured Roadmaps
              </span>
            </motion.h1>


           <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              Discover step-by-step guides to break into any tech field. Get detailed paths with:
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Essential skills & technologies</li>
                <li>Industry-recognized certifications</li>
                <li>Learning resources & references</li>
                <li>Career progression strategies</li>
              </ul>
            </motion.p>
            <motion.div
              className="absolute  w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-50"
              variants={itemVariants}
            />


            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
               <Link
                to="/careers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <Sparkles className="h-5 w-5" />
                Explore Career Roadmaps
              </Link>
              <Link
                to="/career-quiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                <BookOpen className="h-5 w-5" />
                Take Career Quiz
              </Link>
            </motion.div>

          </div>
          

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-3xl transform rotate-6 blur-2xl opacity-20" />

              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
                <img
                  src={career}
                  alt="Career planning illustration"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Floating Badges */}
                <div className="absolute bottom-6 left-6 flex gap-3">
                 
                  <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <GeminiEffect/>
      <CareerCloud />
      {/* <AdsterraNativeBanner/> */}
      <CareerDetails/>
      <CareerPathway/>
      </div>
    </div>
  );
};
