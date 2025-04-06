import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  GraduationCap,
  FileText,
  Users,
  BookOpen,
  MessageCircleQuestion,
  Briefcase,
  TicketCheck,
  Braces,
  Sparkles,
  Brain,
  Store,
  Languages,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/careers", icon: Briefcase, label: "Careers" },
  { to: "/degrees", icon: GraduationCap, label: "Degrees" },
  { to: "/certifications", icon: TicketCheck, label: "Certifications" },
  { to: "/learn-language", icon:Languages, label: "Learn Languages" },
  { to: "/next-step-ai", icon: Sparkles, label: "Next Step AI" },
  { to: "/playground", icon: Braces, label: "Live Code Playground" },
  { to: "/quiz", icon: Brain , label: "Quiz" },
  { to: "/resume-builder", icon: FileText, label: "Resume Builder" },
  // { to: "/ask-me-anything", icon: MessageCircleQuestion, label: "Ask Me Anything" },
  { to: "/feedback", icon: BookOpen, label: "Feedback" },
  { to: "/store", icon: Store, label: "Store" },
  { to: "/contact-us", icon: Briefcase, label: "Contact Us" },
  { to: "/about", icon: Users, label: "About" },
];

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

const itemVariants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Sidebar Content */}
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 w-80 h-full bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
              >
                Navigation
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-6 overflow-y-auto max-h-[calc(100vh-6rem)]">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.to}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{
                      delay: index * 0.07,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                          isActive
                            ? " bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all "
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
                        }`
                      }
                      onClick={onClose}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`p-2 rounded-lg `}
                      >
                        <item.icon className={`h-5 w-5 `} />
                      </motion.div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
