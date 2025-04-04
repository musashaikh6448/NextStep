import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Sun, Moon, Sparkles } from "lucide-react";
import { useStore } from "../store/useStore";
import darkLogo from "../images/darkLogo-removebg-preview.png";
import lightLogo from "../images/lightLogo-removebg-preview.png";

interface HeaderProps {
  onMenuClick: () => void;
}

const springConfig = {
  type: "spring",
  stiffness: 320,
  damping: 30,
};

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useStore();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();

  // Handle scroll to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: isHeaderVisible ? 0 : -100,
        opacity: isHeaderVisible ? 1 : 0,
      }}
      transition={springConfig}
      className="sticky top-0 z-20 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-850"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="CareerPath Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => navigate("/next-step-ai")}
              className="relative overflow-hidden group gradient-border rounded-xl p-[2px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative flex items-center justify-center gap-3 px-3 md:px-6 py-3 rounded-[10px] bg-white dark:bg-gray-900">
                {/* Mobile Icon */}
                <motion.span className="block md:hidden text-purple-600 dark:text-purple-400">
                  <Sparkles className="h-6 w-6" />
                </motion.span>

                {/* Desktop Content */}
                <motion.span className="hidden md:block text-purple-600 dark:text-purple-400">
                  <Sparkles className="h-5 w-5" />
                </motion.span>
                <span className="hidden md:block text-gray-800 dark:text-gray-200 font-semibold transition-all duration-200 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
                  Try Next Step AI
                </span>
                <motion.span className="hidden md:block text-cyan-600 dark:text-cyan-400">
                  <Sparkles className="h-5 w-5" />
                </motion.span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } theme`}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <Sun className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <Moon className="h-6 w-6" />
                </motion.div>
              )}
            </motion.button>

            {/* Menu Toggle (Mobile) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuClick}
              aria-label="Open navigation menu"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
