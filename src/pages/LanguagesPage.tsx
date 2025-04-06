import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Code, Briefcase } from 'lucide-react';

type LanguageDetails = {
  name: string;
  description: string;
  icon: string;
  color: string;
  importance: string[];
  whyLearn: string[];
  resources: {
    study: {
      title: string;
      items: string[];
    };
    courses: {
      title: string;
      items: string[];
    };
    jobs: {
      title: string;
      items: string[];
    };
  };
};

const LanguagesPage: React.FC = () => {
  const { languageName } = useParams<{ languageName: string }>();
  
  // Mock data - in a real app, this would come from an API or database
  const languageData: Record<string, LanguageDetails> = {
    javascript: {
      name: 'JavaScript',
      description: 'JavaScript is the scripting language of the Web, enabling interactive web pages and applications.',
      icon: 'JS',
      color: 'from-yellow-400 to-yellow-600',
      importance: [
        'Essential for front-end web development',
        'Used by 98% of all websites',
        'Enables interactive and dynamic web content',
        'Large ecosystem with frameworks like React, Angular, and Vue'
      ],
      whyLearn: [
        'High demand in the job market',
        'Versatile (can be used for front-end, back-end, mobile apps)',
        'Relatively easy to learn compared to other languages',
        'Strong community support'
      ],
      resources: {
        study: {
          title: 'Self-Study Resources',
          items: [
            'MDN JavaScript Docs',
            'Eloquent JavaScript (book)',
            'JavaScript.info',
            'FreeCodeCamp JavaScript Curriculum'
          ]
        },
        courses: {
          title: 'Recommended Courses',
          items: [
            'The Complete JavaScript Course on Udemy',
            'JavaScript: The Advanced Concepts on ZeroToMastery',
            'Modern JavaScript From The Beginning on Udemy',
            'JavaScript Algorithms and Data Structures on FreeCodeCamp'
          ]
        },
        jobs: {
          title: 'Job Opportunities',
          items: [
            'Front-end Developer',
            'Full-stack Developer',
            'JavaScript Engineer',
            'React/Angular/Vue Developer'
          ]
        }
      }
    },
    python: {
      name: 'Python',
      description: 'Python is a high-level, interpreted, general-purpose programming language known for its readability.',
      icon: 'Py',
      color: 'from-blue-400 to-blue-600',
      importance: [
        'Excellent for beginners due to simple syntax',
        'Widely used in data science, AI, and machine learning',
        'Strong standard library and extensive third-party modules',
        'Used by major companies like Google, NASA, and Instagram'
      ],
      whyLearn: [
        'One of the most beginner-friendly languages',
        'High demand in emerging tech fields',
        'Versatile (web dev, data science, automation, etc.)',
        'Strong community with many learning resources'
      ],
      resources: {
        study: {
          title: 'Self-Study Resources',
          items: [
            'Python Official Documentation',
            'Automate the Boring Stuff with Python (book)',
            'Real Python tutorials',
            'Python Crash Course (book)'
          ]
        },
        courses: {
          title: 'Recommended Courses',
          items: [
            'Complete Python Bootcamp on Udemy',
            'Python for Everybody on Coursera',
            '100 Days of Code: Python on Udemy',
            'Python Data Structures on Coursera'
          ]
        },
        jobs: {
          title: 'Job Opportunities',
          items: [
            'Python Developer',
            'Data Scientist',
            'Machine Learning Engineer',
            'Backend Developer'
          ]
        }
      }
    }
    // Add data for other languages similarly
  };

  const language = languageData[languageName?.toLowerCase() || 'javascript'];

  if (!language) {
    return <div>Language not found</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${language.color} text-white text-2xl font-bold`}>
            {language.icon}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {language.name}
          </h1>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {language.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why {language.name} is Important
            </h2>
            <ul className="space-y-3">
              {language.importance.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Learn {language.name}?
            </h2>
            <ul className="space-y-3">
              {language.whyLearn.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div>
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 mb-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language.resources.study.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {language.resources.study.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 mb-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language.resources.courses.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {language.resources.courses.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {language.resources.jobs.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {language.resources.jobs.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesPage;