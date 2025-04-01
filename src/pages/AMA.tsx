import { motion } from "framer-motion";
import { MessagesSquare, User, Bot, ScrollText, Mail,  Shield } from "lucide-react";
import { useState } from "react";

interface Question {
  id: number;
  anonymousName: string;
  question: string;
  answer?: string;
  timestamp: Date;
  votes: number;
}

const AMAPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      anonymousName: "TechCurious42",
      question: "What's the best approach to learn cloud computing from scratch?",
      answer: "Start with foundational services (EC2, S3) on AWS, get certified, then move to advanced topics. Hands-on practice is crucial.",
      timestamp: new Date(2024, 2, 15, 14, 30),
      votes: 45
    },
    {
      id: 2,
      anonymousName: "CodeNewbie",
      question: "How important are data structures for web development roles?",
      answer: "Fundamental for problem-solving skills. While not used daily, strong understanding helps in system design interviews.",
      timestamp: new Date(2024, 2, 15, 15, 45),
      votes: 32
    }
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion && acceptedTerms && userEmail) {
      setQuestions([{
        id: questions.length + 1,
        anonymousName: `Anon${Math.floor(Math.random() * 9000 + 1000)}`,
        question: newQuestion,
        timestamp: new Date(),
        votes: 0
      }, ...questions]);
      setNewQuestion("");
      setUserEmail("");
      setAcceptedTerms(false);
    }
  };

  const TermsModal = () => (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ScrollText className="text-blue-500" />
          Terms & Conditions
        </h3>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li>• All questions are posted anonymously - your email is only used for account management</li>
          <li>• Questions will be answered during weekly live sessions</li>
          <li>• Maintain professional and respectful communication</li>
          <li>• No personal information or sensitive content</li>
          <li>• Moderators reserve the right to remove inappropriate content</li>
          <li>• Answers are provided by verified industry experts</li>
        </ul>
        <button
          onClick={() => setShowTerms(false)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {showTerms && <TermsModal />}

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
          <MessagesSquare className="inline-block mr-2" />
          Tech Career AMA
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Anonymous Q&A with Industry Experts
        </p>
      </div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        {/* Questions Feed */}
        <div className="space-y-6">
          {questions.map((question) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                  <User className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {question.anonymousName}
                    </span>
                    
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                    {question.question}
                  </p>
                  
                  {question.answer && (
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-full">
                          <Shield className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Verified Expert Answer
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {question.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ask Question Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-fit sticky top-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Bot className="text-purple-500" />
            Ask a Question
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Email (Secure)
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="email@example.com"
                  required
                />
                <Mail className="absolute right-3 top-3.5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Used only for login - never shown publicly
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Question
              </label>
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Type your anonymous question here..."
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1"
                required
              />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  terms and conditions
                </button>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              disabled={!newQuestion || !acceptedTerms || !userEmail}
            >
              <MessagesSquare className="w-5 h-5" />
              Submit Question
            </motion.button>
          </form>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ScrollText className="text-blue-500" />
          Community Guidelines
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full">
              <User className="w-5 h-5 text-blue-500" />
            </div>
            <p>All questions are completely anonymous</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-full">
              <Shield className="w-5 h-5 text-green-500" />
            </div>
            <p>Answers verified by industry professionals</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AMAPage;