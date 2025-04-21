import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Bot, User, Copy, Check } from "lucide-react";
import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const CREATOR_RESPONSE =
  "I’m an AI assistant developed by Suleman Khan, designed to provide intelligent, helpful, and engaging support across a wide range of topics. How can I assist you today?";
const ERROR_RESPONSE =
  "Sorry, there was an error processing your request. Please try again.";
const IDENTITY_KEYWORDS = [
  "who are you",
  "who created you",
  "who made you",
  "who built you",
  "who is your creator",
  "who developed you",
  "who programmed you",
  "who's behind you",
  "who designed you",
  "who coded you",
];
const imageUrls = [
  "https://indianmemetemplates.com/wp-content/uploads/Bhai-yeh-to-koi-response-hi-nahi-de-raha-1200x674.jpg",
  "https://i.pinimg.com/736x/d7/33/b6/d733b6cd8efe9d99a74b08063a21ed26.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/abhi-theek-karke-deta-hu.jpg",
  "https://scrolldroll.com/wp-content/uploads/2021/09/Clear-Bol-Clear-bollywood-Meme-Templates-2021.jpeg",
];

const loadingMessages = [
  {
    text: "The server is busy... still trying to reach it!",
    image: imageUrls[0],
  },
  { text: "Hang on, trying another server...", image: imageUrls[1] },
  { text: "Working on your request...", image: imageUrls[2] },
  { text: "Double-check your prompt for typos!", image: imageUrls[3] },
];

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
    <div className="relative my-2 group max-w-[95vw] md:max-w-[85vw]">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center px-3 py-1.5 bg-gray-50 dark:bg-gray-900/50">
          <span className="text-xs font-mono text-gray-600 dark:text-gray-400">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label={copied ? "Copied" : "Copy code"}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
        <pre className="p-2 overflow-x-auto text-xs font-mono text-gray-900 dark:text-gray-100">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const NextStepAI: React.FC = () => {
  const initialMessage: Message = {
    id: "1",
    content:
      "Hello! I'm NextStep AI. Ask me about programming, technology, or career paths. I was developed by Suleman Khan.",
    sender: "ai",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const parseContent = useCallback((content: string) => {
    const elements: JSX.Element[] = [];
    const blocks = content.split(/(```[\s\S]*?```|### .+)/g);

    blocks.filter(Boolean).forEach((block, index) => {
      if (block.startsWith("### ")) {
        elements.push(
          <h3
            key={`heading-${index}`}
            className="text-base font-semibold mt-3 mb-1.5"
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
              key={`code-${index}-${code.slice(0, 10)}`}
              code={code.trim()}
              language={language.trim()}
            />
          );
        }
      } else {
        block.split("\n").forEach((line, lineIndex) => {
          if (!line.trim()) return;
          elements.push(
            <p
              key={`text-${index}-${lineIndex}`}
              className="mb-2 leading-relaxed whitespace-pre-wrap"
            >
              {line.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold">
                    {part}
                  </strong>
                ) : (
                  part
                )
              )}
            </p>
          );
        });
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
      // Check for identity questions
      const isIdentityQuestion = IDENTITY_KEYWORDS.some((keyword) =>
        input.toLowerCase().includes(keyword)
      );

      const aiResponse = isIdentityQuestion
        ? CREATOR_RESPONSE
        : await fetch(
            "https://magicloops.dev/api/loop/be256522-45be-43eb-9edc-fb3aca33cb36/run",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ question: input }),
            }
          )
            .then((res) => res.json())
            .then((data) => data.answer || ERROR_RESPONSE);

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
          content: ERROR_RESPONSE,
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
      setCurrentLoadingMessage(0);
    }
  }, [input, loading]);

  useLayoutEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({
        behavior: messages.length > 1 ? "smooth" : "auto",
        block: "end",
        inline: "nearest"
      });
    };

    const resizeTextarea = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${Math.min(
          textareaRef.current.scrollHeight,
          150
        )}px`;
      }
    };

    scrollToBottom();
    resizeTextarea();
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);

    return () => clearTimeout(timer);
  }, [messages, loading, messages.length]);
  // Loading message rotation
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div className="h-dvh flex flex-col">
      <div className="flex-1 overflow-y-auto p-2 sm:p-4">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`my-2 ${message.sender === "user" ? "ml-auto" : ""}`}
              >
                <div
                  className={`max-w-[95%] xs:max-w-[90%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-800 shadow-sm"
                  }`}
                >
                  <div className="flex gap-2 items-start">
                    <div className="mt-1 shrink-0">
                      {message.sender === "ai" ? (
                        <Bot className="w-5 h-5 text-green-500" />
                      ) : (
                        <User className="w-5 h-5 text-blue-200" />
                      )}
                    </div>
                    <div className="flex-1 overflow-x-auto text-sm">
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
              className="my-2 max-w-[95%] xs:max-w-[90%]"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                <div className="flex gap-2 items-start">
                  <Bot className="mt-1 text-green-500 shrink-0" />
                  <div className="flex-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentLoadingMessage}
                        className="flex flex-col gap-2"
                      >
                        <motion.img
                          src={loadingMessages[currentLoadingMessage].image}
                          className="w-full rounded-lg border border-gray-200 dark:border-gray-600"
                          alt="Loading indicator"
                        />
                        <div className="text-gray-600 dark:text-gray-300 text-sm">
                          <div className="flex items-center gap-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.span
                                key={i}
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              >
                                •
                              </motion.span>
                            ))}
                            <span className="ml-2">
                              {loadingMessages[currentLoadingMessage].text}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="sticky bottom-0  backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto p-2 sm:p-4">
          <motion.div whileHover={{ scale: 1.005 }} className="relative">
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
              className="w-full p-3 pr-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 resize-none overflow-hidden placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              rows={1}
              disabled={loading}
              aria-label="Chat input"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className={`absolute right-2 bottom-2 p-1.5 rounded-md ${
                !input.trim() || loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              } bg-blue-500 text-white`}
              aria-label="Send message"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
            NextStep AI may occasionally generate incorrect information
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextStepAI;
