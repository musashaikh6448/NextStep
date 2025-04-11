import { motion } from "framer-motion";
import { Construction, Code2, Coffee, Rocket, AlertTriangle, RefreshCw } from "lucide-react";

export const WorkInProgress: React.FC = () => {
  const memes = [
    { text: "Everything is under control", emoji: "🔥🐶", animation: { rotate: [0, -10, 10, 0] } },
    { text: "Surprised by deadlines", emoji: "😲⚡", animation: { scale: [1, 1.2, 1] } },
    { text: "404 Productivity Not Found", emoji: "🤦♂️", animation: { x: [-10, 10, -10, 0] } },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🚀
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-12 text-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        🌌
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        {/* Animated Icons */}
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-yellow-500 dark:text-yellow-400"
          >
            <Construction size={64} />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="ml-6 -mr-6 text-blue-500 dark:text-blue-400"
          >
            <Code2 size={48} />
          </motion.div>
        </div>

        {/* Heading with staggered letters */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {"Crafting Digital Excellence".split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-3"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Main Content */}
        <motion.div className="space-y-6">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're putting the final touches on something amazing! 🎨✨
          </p>

          {/* Animated Progress Bar */}
          <motion.div
            className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden max-w-md mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'mirror'
              }}
              style={{
                width: '100%',
                backgroundSize: '200% 200%'
              }}
            />
          </motion.div>

          {/* Meme Section */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {memes.map((meme, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2"
                animate={meme.animation}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <span className="text-lg">{meme.emoji}</span>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{meme.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Animated Tips */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Coffee, text: "Fueled by caffeine", emoji: "☕" },
              { icon: Rocket, text: "Launch mode activated", emoji: "🚀" },
              { icon: AlertTriangle, text: "Experiencing awesome", emoji: "⚠️" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 + index * 0.3 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <item.icon className="h-8 w-8 mx-auto text-blue-500 dark:text-blue-400 mb-3" />
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
                  <span>{item.text}</span>
                  <span className="text-xl">{item.emoji}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Refresh Prompt */}
          <motion.div
            className="mt-12 inline-flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="text-blue-500 animate-spin" />
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              Refresh for artificial progress! 🎉
            </span>
          </motion.div>

          {/* Floating Astronaut */}
          <motion.div
            className="absolute -bottom-20 -right-20 text-6xl"
            animate={{
              x: [0, -1000],
              y: [0, -200],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            👨🚀
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};