import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Language = {
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

const Languages: React.FC = () => {
  const navigate = useNavigate();

  const languages: Language[] = [
    {
      name: 'JavaScript',
      description: 'The scripting language for Web pages',
      icon: 'JS',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-400/20'
    },
    {
      name: 'Python',
      description: 'A popular general-purpose programming language',
      icon: 'Py',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/20'
    },
    {
      name: 'Java',
      description: 'A high-level, class-based, object-oriented programming language',
      icon: 'Java',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      name: 'C++',
      description: 'A general-purpose programming language with object-oriented features',
      icon: 'C++',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      name: 'TypeScript',
      description: 'A strongly typed programming language that builds on JavaScript',
      icon: 'TS',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'Ruby',
      description: 'A dynamic, open source programming language with a focus on simplicity',
      icon: 'Rb',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-400/20'
    },
    {
      name: 'Go',
      description: 'A statically typed, compiled programming language designed at Google',
      icon: 'Go',
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      name: 'Rust',
      description: 'A multi-paradigm programming language focused on performance and safety',
      icon: 'Rs',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      name: 'PHP',
      description: 'A popular general-purpose scripting language especially suited to web development',
      icon: 'PHP',
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      name: 'Swift',
      description: 'A powerful and intuitive programming language for Apple platforms',
      icon: 'Sw',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-400/20'
    },
    {
      name: 'HTML',
      description: 'The standard markup language for documents designed to be displayed in a web browser',
      icon: 'HTML',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      name: 'CSS',
      description: 'A style sheet language used for describing the presentation of a document',
      icon: 'CSS',
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      name: 'ReactJS',
      description: 'A JavaScript library for building user interfaces',
      icon: 'React',
      color: 'from-teal-500 to-teal-700',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20'
    },
    {
      name: 'NodeJS',
      description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      icon: 'Node',
      color: 'from-lime-500 to-lime-700',
      bgColor: 'bg-lime-500/10',
      borderColor: 'border-lime-500/20'
    },
    {
      name: 'ExpressJS',
      description: 'A minimal and flexible Node.js web application framework',
      icon: 'Express',
      color: 'from-gray-500 to-gray-700',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/20'
    },
    {
      name: 'Angular',
      description: 'A platform for building mobile and desktop web applications',
      icon: 'Angular',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      name: 'NextJS',
      description: 'A React framework for production with hybrid static & server rendering',
      icon: 'Next',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'VueJS',
      description: 'A progressive JavaScript framework for building user interfaces',
      icon: 'Vue',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      name: 'Kotlin',
      description: 'A modern statically typed programming language for JVM and Android',
      icon: 'Kt',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/20'
    },
    {
      name: 'Dart',
      description: 'An optimized language for building mobile, desktop, server, and web apps',
      icon: 'Dart',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-400/20'
    },
    {
      name: 'Bash',
      description: 'A Unix shell and command language',
      icon: 'Bash',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-600/10',
      borderColor: 'border-gray-600/20'
    },
    {
      name: 'Perl',
      description: 'A highly capable, feature-rich programming language with over 30 years of development',
      icon: 'Perl',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-400/20'
    },
    {
      name: 'Scala',
      description: 'A concise, elegant language that integrates functional and object-oriented programming',
      icon: 'Scala',
      color: 'from-red-600 to-red-800',
      bgColor: 'bg-red-600/10',
      borderColor: 'border-red-600/20'
    },
    {
      name: 'Elixir',
      description: 'A dynamic, functional language designed for building scalable and maintainable applications',
      icon: 'Ex',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-400/20'
    },
    {
      name: 'Haskell',
      description: 'A statically typed purely functional programming language',
      icon: 'Hs',
      color: 'from-violet-500 to-violet-700',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/20'
    },
    {
      name: 'MATLAB',
      description: 'A programming platform designed for engineers and scientists',
      icon: 'MAT',
      color: 'from-yellow-600 to-yellow-800',
      bgColor: 'bg-yellow-600/10',
      borderColor: 'border-yellow-600/20'
    }
  ];

  const navigateToLanguage = (languageName: string) => {
    navigate(`/languages/${languageName.toLowerCase()}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Programming Languages
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learn about different programming languages and choose the right one for your needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((language) => (
          <motion.div
            key={language.name}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
            onClick={() => navigateToLanguage(language.name)}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
            <div className={`relative flex flex-col h-full p-6 rounded-lg border ${language.borderColor} ${language.bgColor} overflow-hidden`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{language.name}</h3>
                <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${language.color} text-white font-bold`}>
                  {language.icon}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {language.description}
              </p>
              <div className="mt-auto">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 -mr-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
