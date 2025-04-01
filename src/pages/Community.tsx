import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, User, Search, Filter } from 'lucide-react';

const discussions = [
  {
    id: 1,
    title: 'Tips for landing your first software development job',
    author: 'Alex Chen',
    date: '2025-03-15',
    category: 'Career Advice',
    replies: 24,
    likes: 156,
    excerpt: 'I recently landed my first dev role and wanted to share some insights...',
    tags: ['career', 'software-development', 'job-hunting']
  },
  {
    id: 2,
    title: 'Which certification should I pursue for cloud computing?',
    author: 'Sarah Miller',
    date: '2025-03-14',
    category: 'Certifications',
    replies: 18,
    likes: 92,
    excerpt: 'Looking for advice on AWS vs Azure certifications for a beginner...',
    tags: ['cloud', 'certification', 'aws', 'azure']
  },
  {
    id: 3,
    title: 'How to prepare for technical interviews at FAANG companies',
    author: 'David Kumar',
    date: '2025-03-13',
    category: 'Interview Prep',
    replies: 35,
    likes: 245,
    excerpt: `Here's my comprehensive guide to preparing for tech interviews...`,
    tags: ['interviews', 'faang', 'preparation']
  }
];

const categories = [
  'All Topics',
  'Career Advice',
  'Certifications',
  'Interview Prep',
  'Technical Discussion',
  'Job Opportunities'
];

export const Community: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All Topics');
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Community Forum
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Connect with peers, share experiences, and learn from the community
        </motion.p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-12"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input appearance-none pr-12"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Create Discussion Button */}
      <div className="flex justify-end mb-8">
        <button className="btn-primary flex items-center space-x-2">
          <MessageSquare className="h-5 w-5" />
          <span>Start Discussion</span>
        </button>
      </div>

      {/* Discussions List */}
      <div className="space-y-6">
        {discussions.map((discussion, index) => (
          <motion.div
            key={discussion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                    {discussion.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User className="h-4 w-4 mr-1" />
                    {discussion.author}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(discussion.date).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-500 transition-colors">
                  {discussion.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {discussion.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {discussion.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    {discussion.replies} replies
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <ThumbsUp className="h-5 w-5 mr-2" />
                    {discussion.likes} likes
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="btn-secondary">
          Load More Discussions
        </button>
      </div>
    </div>
  );
};