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

const NextChatAI: React.FC = () => {
  const initialMessage = {
    id: "1",
    content:
      "Hello! I'm NextChat AI. Ask me anything about technology, programming, or career advice.",
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
      className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
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
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-500 p-3 rounded-2xl mb-6 shadow-lg"
        >
          <Sparkles className="w-12 h-12 text-white" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4">
          NextChat AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your intelligent assistant for tech and career guidance
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg">
        {/* Chat Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80">
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-5 h-5" />
            <span>New Chat</span>
          </button>
          <button
            onClick={handleClearChat}
            className="p-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[65vh] overflow-y-auto p-4 space-y-6">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-5 relative ${
                  message.sender === "user"
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-2 rounded-full ${
                      message.sender === "ai"
                        ? "bg-purple-500/20 text-purple-500"
                        : "bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {message.sender === "ai" ? (
                      <Bot className="w-5 h-5" />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-xs opacity-80">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="whitespace-pre-wrap leading-relaxed">
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
              <div className="bg-gray-100 dark:bg-gray-700/80 rounded-2xl p-5 max-w-[85%]">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/20 text-purple-500 p-2 rounded-full">
                    <Bot className="w-5 h-5" />
                  </div>
                  <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200/50 dark:border-gray-700/50 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, 500))}
                onKeyDown={handleKeyDown}
                className="w-full px-5 py-4 pr-16 rounded-xl bg-gray-100/80 dark:bg-gray-700/50 border border-gray-300/50 dark:border-gray-600/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none overflow-hidden backdrop-blur-sm placeholder-gray-500/80 dark:placeholder-gray-400/80"
                placeholder="Ask me anything..."
                rows={1}
                disabled={loading}
              />
              <div className="absolute right-3 bottom-3 flex items-center gap-2">
                <span className="text-xs text-gray-500/80 dark:text-gray-400/80">
                  {input.length}/500
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className={`p-2.5 rounded-xl ${
                    !input.trim() || loading
                      ? "bg-gray-300/50 dark:bg-gray-600/50 text-gray-400"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
                  }`}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-gray-500/80 dark:text-gray-400/80">
            <Shield className="w-4 h-4 text-green-500" />
            <span>End-to-end encrypted • Conversations never stored</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        <div className="p-5 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg hover:transform hover:-translate-y-1 transition-all">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-fit p-3 rounded-xl mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Smart Answers</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Advanced AI powered by state-of-the-art language models
          </p>
        </div>
        <div className="p-5 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg hover:transform hover:-translate-y-1 transition-all">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-fit p-3 rounded-xl mb-4">
            <Send className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Real-time Responses</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Instant answers with sub-second response times
          </p>
        </div>
        <div className="p-5 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg hover:transform hover:-translate-y-1 transition-all">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-fit p-3 rounded-xl mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Secure & Private</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Military-grade encryption and strict data privacy
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default NextChatAI;

