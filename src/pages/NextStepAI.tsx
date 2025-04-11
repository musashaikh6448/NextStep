import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Bot, User, Copy, Check } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const imageUrls = [
  "https://indianmemetemplates.com/wp-content/uploads/Bhai-yeh-to-koi-response-hi-nahi-de-raha-1200x674.jpg",
  "https://i.pinimg.com/736x/d7/33/b6/d733b6cd8efe9d99a74b08063a21ed26.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/abhi-theek-karke-deta-hu.jpg",
  "https://scrolldroll.com/wp-content/uploads/2021/09/Clear-Bol-Clear-bollywood-Meme-Templates-2021.jpeg",
];

const loadingMessages = [
  {
    text: "The server is busy and not responding... still trying to reach it, bro!",
    image: imageUrls[0],
  },
  {
    text: "Hang on, trying another server... this one seems overloaded!",
    image: imageUrls[1],
  },
  {
    text: "Working on your request... no tension, it’s in process!",
    image: imageUrls[2],
  },
  {
    text: "Hmm... maybe there's a typo in your prompt, double-check it bro!",
    image: imageUrls[3],
  },
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
      <div className="relative my-2 group max-w-[85vw]  xs:max-w-[90vw] sm:max-w-[85vw]">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-50 dark:bg-gray-900/50">
            <span className="text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-400">
              {language}
            </span>
            <button
              onClick={handleCopy}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              {copied ? (
                <Check size={14} className="sm:size-4" />
              ) : (
                <Copy size={14} className="sm:size-4" />
              )}
            </button>
          </div>
          <pre className="p-2 sm:p-4 overflow-x-auto text-xs sm:text-sm font-mono text-gray-900 dark:text-gray-100">
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
            className="text-base sm:text-lg font-semibold mt-3 mb-1.5 text-gray-900 dark:text-gray-100"
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
        const lines = block.split("\n").filter((l) => l.trim() !== "");

        lines.forEach((line, lineIndex) => {
          const parts = line.split(/\*\*(.*?)\*\*/g);
          elements.push(
            <p
              key={`${block}-${lineIndex}`}
              className="mb-2 leading-relaxed text-gray-900 dark:text-gray-100 text-sm sm:text-base whitespace-pre-wrap"
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
              {lineIndex < lines.length - 1 && <br />}
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
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: messages.length > 1 ? "smooth" : "auto",
        block: "end"
      });
    }
  
    if (loading && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto", block: "end" });
    }
  
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        150
      )}px`;
    }
  }, [messages, input, loading]);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setCurrentLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div className="h-dvh flex flex-col ">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto lg:max-w-2xl md:max-w-md w-full ">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`my-3 ${message.sender === "user" ? "ml-auto" : ""}`}
              >
                <div
                  className={`max-w-[100%] xs:max-w-[90%] sm:max-w-[85%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  <div className=" items-start gap-2 sm:gap-3">
                    <div className="mt-0.5 shrink-0">
                      {message.sender === "ai" ? (
                        <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                      ) : (
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                      )}
                    </div>
                    <div className="flex-1 overflow-x-auto text-sm sm:text-base">
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
              className="flex  my-4  sm:max-h-48"
            >
              <div className="max-w-[95%]  xs:max-w-[90%] sm:max-w-[85%] h-full bg-white dark:bg-gray-800 rounded-lg p-3">
                <div className=" items-start gap-2 sm:gap-3">
                  <Bot className="mb-3 text-green-500 shrink-0" />
                  <div className="flex flex-col flex-1 gap-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentLoadingMessage}
                        className="flex flex-col  items-start gap-2 sm:gap-3"
                      >
                        <motion.img
                          src={loadingMessages[currentLoadingMessage].image}
                          className=" object-cover mb-2 rounded-lg border border-gray-200 dark:border-gray-600"
                          alt="Loading animation"
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="text-gray-600 dark:text-gray-300 
            text-sm xs:text-base sm:text-[15px] md:text-sm 
             items-center gap-2"
                        >
                          {/* Animated bouncing dots */}
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="inline-block"
                          >
                            •
                          </motion.span>
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.2,
                            }}
                            className="inline-block"
                          >
                            •
                          </motion.span>
                          <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 1.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.4,
                            }}
                            className="inline-block"
                          >
                            •
                          </motion.span>

                          <span className="ml-2 leading-relaxed">
                            {loadingMessages[currentLoadingMessage].text}
                          </span>
                        </motion.div>
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
        <div className="max-w-3xl mx-auto lg:max-w-2xl md:max-w-md w-full p-2 sm:p-4">
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
              className="w-full p-3 pr-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 resize-none overflow-hidden placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base min-h-[44px]"
              placeholder="Send a message..."
              rows={1}
              disabled={loading}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className={`absolute right-2 bottom-2 p-1.5 sm:p-2 rounded-md ${
                !input.trim() || loading
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-400"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              aria-label="Send message"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
          <p className="text-center text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-2 px-2">
            NextStep AI can make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextStepAI;
