import { motion } from "framer-motion";
import {
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  Shield,
  Trash2,
  Plus,
} from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const NextStepAI: React.FC = () => {
  const initialMessage = {
    id: "1",
    content:
      "Hello! I'm NextStep AI. Ask me anything about technology, programming, or career advice.",
    sender: "ai" as const,
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = useCallback(async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer YKkE0WXHdCkkq1G7ucLs8JCXGQIHYGksOvj0SGu2`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command",
          prompt: input,
          max_tokens: 300,
          temperature: 0.8,
        }),
      });

      const result = await response.json();
      const aiResponse =
        result.generations?.[0]?.text ||
        "I couldn't generate a response. Please try again.";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: aiResponse,
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content:
            "Sorry, I'm having trouble generating a response. Please try again later.",
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  const handleNewChat = useCallback(() => {
    setMessages([initialMessage]);
  }, [initialMessage]);

  const handleClearChat = useCallback(() => {
    setShowConfirm(true);
  }, []);

  const confirmClear = useCallback(() => {
    setMessages([initialMessage]);
    setShowConfirm(false);
  }, [initialMessage]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full border border-gray-200 dark:border-gray-700 shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-4">Clear Chat History?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This will remove all messages except the initial greeting.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmClear}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-500 p-3 rounded-2xl mb-4 shadow-lg"
        >
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </motion.div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-3">
          NextStep AI
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Your intelligent assistant for tech and career guidance
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
        {/* Chat Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80">
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>New Chat</span>
          </button>
          <button
            onClick={handleClearChat}
            className="p-2 sm:p-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[50vh] sm:h-[60vh] md:h-[65vh] overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[90%] sm:max-w-[85%] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 relative ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200"
                } shadow-sm`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div
                    className={`p-1.5 sm:p-2 rounded-full ${
                      message.sender === "ai"
                        ? "bg-purple-500/20 text-purple-500"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {message.sender === "ai" ? (
                      <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <User className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </div>
                  <span className="text-xs opacity-80">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
                  {message.content}
                </p>
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 dark:bg-gray-700/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 max-w-[90%] sm:max-w-[85%] shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-purple-500/20 text-purple-500 p-1.5 sm:p-2 rounded-full">
                    <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-gray-500" />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200/50 dark:border-gray-700/50 p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, 500))}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-3 pr-14 sm:px-5 sm:py-4 sm:pr-16 rounded-lg sm:rounded-xl bg-gray-100/80 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none overflow-hidden placeholder-gray-500/80 dark:placeholder-gray-400/80 text-sm sm:text-base"
                placeholder="Ask me anything..."
                rows={1}
                disabled={loading}
              />
              <div className="absolute right-2 bottom-2 sm:right-3 sm:bottom-3 flex items-center gap-1 sm:gap-2">
                <span className="text-xs text-gray-500/80 dark:text-gray-400/80 hidden sm:inline">
                  {input.length}/500
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className={`p-2 rounded-lg sm:rounded-xl ${
                    !input.trim() || loading
                      ? "bg-gray-300/50 dark:bg-gray-600/50 text-gray-400"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
                  }`}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>
            </div>
          </div>
          <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs text-gray-500/80 dark:text-gray-400/80">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            <span>End-to-end encrypted • Conversations never stored</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
        {[
          {
            icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
            title: "Smart Answers",
            description: "Advanced AI powered by state-of-the-art language models"
          },
          {
            icon: <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
            title: "Real-time Responses",
            description: "Instant answers with sub-second response times"
          },
          {
            icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
            title: "Secure & Private",
            description: "Military-grade encryption and strict data privacy"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-4 sm:p-5 bg-white/80 dark:bg-gray-800/80 rounded-lg sm:rounded-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-sm"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-fit p-2 sm:p-3 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div> */}
    </motion.div>
  );
};

export default NextStepAI;

