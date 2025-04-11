import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Bot, User, Copy, Check } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const loadingMessages = [
  "🥲 Loading ho raha hai, par WiFi ne kasam khai hai slow chalne ki...",
  "🦾 Robot mode ON, par thoda hang ho gaya hoon...",
  "☕ Coffee peene gaya hoon, answer leke hi aayega...",
];

const NextStepAI: React.FC = () => {
  const initialMessage: Message = {
    id: "1",
    content:
      "Hello! I'm NextStep AI. Ask me anything about programming, technology, or career paths.",
    sender: "ai",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const CodeBlock: React.FC<{ code: string; language: string }> = ({
    code,
    language,
  }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };

    return (
      <div className="relative my-4 group">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center px-4 py-2 bg-gray-50 dark:bg-gray-900/50">
            <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
              {language}
            </span>
            <button
              onClick={handleCopy}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-900 dark:text-gray-100">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  };

  const parseContent = useCallback((content: string) => {
    const elements: JSX.Element[] = [];
    const blocks = content.split(/(```[\s\S]*?```|### .+)/g);

    blocks.filter(Boolean).forEach((block) => {
      if (block.startsWith("### ")) {
        elements.push(
          <h3
            key={block}
            className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100 md:text-lg sm:text-base"
          >
            {block.replace("### ", "")}
          </h3>
        );
      } else if (block.startsWith("```")) {
        const match = block.match(/```(\w+)?\n([\s\S]*?)```/);
        if (match) {
          const [, language = "javascript", code] = match;
          elements.push(
            <CodeBlock
              key={code}
              code={code.trim()}
              language={language.trim()}
            />
          );
        }
      } else {
        const parts = block.split(/\*\*(.*?)\*\*/g);
        elements.push(
          <p
            key={block}
            className="mb-4 leading-relaxed text-gray-900 dark:text-gray-100 text-base sm:text-sm"
          >
            {parts.map((part, index) =>
              index % 2 === 1 ? (
                <strong key={index} className="font-semibold">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      }
    });

    return elements;
  }, []);

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
      const response = await fetch(
        "https://magicloops.dev/api/loop/be256522-45be-43eb-9edc-fb3aca33cb36/run",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: input }),
        }
      );

      const result = await response.json();
      const aiResponse =
        result.answer || "I couldn't generate a response. Please try again.";

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
          content: "Sorry, there was an error processing your request.",
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
      setCurrentLoadingMessage(0);
    }
  }, [input, loading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [messages, input]);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 sm:p-2">
        <div className="max-w-3xl mx-auto lg:max-w-2xl md:max-w-lg">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`my-4 ${message.sender === "user" ? "ml-auto" : ""}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[95%] rounded-lg p-4 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      {message.sender === "ai" ? (
                        <Bot className="w-6 h-6 text-green-500" />
                      ) : (
                        <User className="w-6 h-6 text-blue-200" />
                      )}
                    </div>
                    <div className="flex-1 overflow-x-auto">
                      {parseContent(message.content)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start my-4"
            >
              <div className="max-w-[90%] sm:max-w-[95%] bg-white dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <Bot className="w-6 h-6 text-green-500" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLoadingMessage}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-600 dark:text-gray-300 text-sm sm:text-xs"
                    >
                      {loadingMessages[currentLoadingMessage]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="sticky bottom-0 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto lg:max-w-2xl md:max-w-lg p-4 sm:p-2">
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative shadow-sm"
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, 500))}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="w-full p-4 pr-12 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 resize-none overflow-hidden placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base sm:text-sm"
              placeholder="Send a message..."
              rows={1}
              disabled={loading}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className={`absolute right-3 bottom-3 p-2 rounded-lg ${
                !input.trim() || loading
                  ? "bg-gray-100 dark:bg-gray-600 text-gray-400"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              aria-label="Send message"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
            NextStep AI can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextStepAI;
