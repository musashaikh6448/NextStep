import { motion } from "framer-motion";

export const LoaderOverlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed top-0 inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10 dark:bg-white/10 rounded-xl"
  >
    <svg
      className="animate-spin h-20 w-20" // Bigger size
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <defs>
        <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" /> {/* Purple-600 */}
          <stop offset="100%" stopColor="#2563EB" /> {/* Blue-600 */}
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="url(#spinner-gradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="50, 200"
        strokeDashoffset="0"
      />

      {/* Inner semi-circle path with gradient */}
      <path
        fill="url(#spinner-gradient)" // Now properly using the gradient
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </motion.div>
);