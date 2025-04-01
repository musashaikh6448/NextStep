import React, { useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { techCareers } from "../data/techCareers";

const MARQUEE_LINES = 10;
const BASE_DURATION = 200;
const LINE_HEIGHT = 80;

const CareerCloud: React.FC = () => {
  const marqueeItems = useMemo(
    () =>
      Array.from({ length: MARQUEE_LINES }, (_, i) => ({
        speed: BASE_DURATION + i * 8,
        direction: i % 2 === 0 ? 1 : -1,
        offset: i * LINE_HEIGHT,
      })),
    []
  );

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
            Explore Tech Careers of the Future
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover {techCareers.length}+ specialized tech roles with detailed
            roadmaps, skill requirements, and emerging trends
          </p>
        </motion.div>

        <div className="relative h-[60vh] overflow-hidden">
          {marqueeItems.map((line, idx) => (
            <MarqueeLine
              key={idx}
              speed={line.speed}
              direction={line.direction}
              offset={line.offset}
            />
          ))}
        </div>
      </div>
      <motion.div
        className="absolute  w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-50"
        variants={itemVariants}
      />
    </section>
  );
};
const MarqueeLine = React.memo(
  ({
    speed,
    direction,
    offset,
  }: {
    speed: number;
    direction: number;
    offset: number;
  }) => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const variants = {
      animate: {
        x: direction === 1 ? ["0%", "-100%"] : ["-100%", "0%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop" as const,
            duration: speed,
            ease: "linear",
          },
        },
      },
    };

    React.useEffect(() => {
      if (!isHovered) controls.start("animate");
    }, [isHovered, controls]);

    return (
      <motion.div
        className="absolute w-full flex"
        style={{
          top: `${offset}px`,
          x: direction === 1 ? "-50%" : "50%",
        }}
        animate={{
          x: direction === 1 ? ["-50%", "0%"] : ["50%", "-0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          initial="animate"
          animate={controls}
          variants={variants}
          className="flex flex-nowrap gap-4 w-max"
          style={{
            opacity: 0.8 - offset / 800,
          }}
        >
          {[...techCareers, ...techCareers].map((career, index) => (
            <motion.div
              key={`${career.name}-${index}`}
              className="flex-shrink-0 flex items-center p-2  "
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className=" hover:border-blue-600 dark:hover:border-blue-600   px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm hover:backdrop-blur-md transition-all cursor-pointer group border border-gray-200/50 dark:border-gray-700/50">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {career.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {career.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  }
);

export default CareerCloud;
