import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Bot, User, Copy, Check } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const CREATOR_RESPONSE =
  "I'm an AI assistant developed by NextStep Developers, designed to provide intelligent, helpful, and engaging support across a wide range of topics. How can I assist you today?";

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
        <pre className="p-4 overflow-x-auto text-xs font-mono text-gray-900 dark:text-gray-100">
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
      "Hello! I'm NextStep AI. Ask me about programming, technology, or career paths. I was developed by NextStep Developers.",
    sender: "ai",
    timestamp: new Date(),
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const parseContent = useCallback((content: string) => {
    const elements: JSX.Element[] = [];
    let remainingText = content;

    // First handle code blocks
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let codeMatch;
    let lastIndex = 0;

    while ((codeMatch = codeBlockRegex.exec(content)) !== null) {
      // Add text before the code block
      if (codeMatch.index > lastIndex) {
        const textBefore = content.slice(lastIndex, codeMatch.index);
        elements.push(...parseTextContent(textBefore));
      }

      // Add the code block
      const [, language = "javascript", code] = codeMatch;
      elements.push(
        <CodeBlock
          key={`code-${codeMatch.index}`}
          code={code.trim()}
          language={language.trim()}
        />
      );

      lastIndex = codeMatch.index + codeMatch[0].length;
    }

    // Add any remaining text after the last code block
    if (lastIndex < content.length) {
      const remainingText = content.slice(lastIndex);
      elements.push(...parseTextContent(remainingText));
    }

    return elements;
  }, []);

  const parseTextContent = (text: string): JSX.Element[] => {
    const elements: JSX.Element[] = [];

    // Split by headings first
    const headingParts = text.split(/(^|\n)### (.+)/g);
    let currentText = "";

    for (let i = 0; i < headingParts.length; i++) {
      const part = headingParts[i];

      if (part === "###" || part === "\n###") {
        // Skip the ### marker
        continue;
      }

      if (i > 0 && headingParts[i-1] === "###") {
        // This is a heading
        if (currentText) {
          elements.push(...parseParagraphs(currentText));
          currentText = "";
        }
        elements.push(
          <h3
            key={`heading-${i}`}
            className="text-base font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200"
          >
            {part.trim()}
          </h3>
        );
      } else {
        currentText += (currentText ? "\n" : "") + part;
      }
    }

    if (currentText) {
      elements.push(...parseParagraphs(currentText));
    }

    return elements;
  };

  const parseParagraphs = (text: string): JSX.Element[] => {
    return text.split("\n").map((line, index) => {
      if (!line.trim()) {
        return <br key={`br-${index}`} />;
      }

      // Handle bold text
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const elements: JSX.Element[] = [];

      for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 1) {
          elements.push(
            <strong key={`bold-${index}-${i}`} className="font-semibold">
              {parts[i]}
            </strong>
          );
        } else if (parts[i]) {
          elements.push(<span key={`text-${index}-${i}`}>{parts[i]}</span>);
        }
      }

      return (
        <p
          key={`para-${index}`}
          className="mb-3 leading-relaxed whitespace-pre-wrap text-gray-700 dark:text-gray-300"
        >
          {elements}
        </p>
      );
    });
  };

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
      const isIdentityQuestion = IDENTITY_KEYWORDS.some((keyword) =>
        input.toLowerCase().includes(keyword)
      );

      let aiResponse;
      if (isIdentityQuestion) {
        aiResponse = CREATOR_RESPONSE;
      } else {
        const response = await fetch(
          "https://magicloops.dev/api/loop/be256522-45be-43eb-9edc-fb3aca33cb36/run",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: input }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        aiResponse = data.answer || ERROR_RESPONSE;

        // Fallback if response is empty or invalid
        if (!aiResponse || typeof aiResponse !== 'string') {
          aiResponse = ERROR_RESPONSE;
        }
      }

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
      console.error("Error fetching response:", error);
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
    }
  }, [input, loading]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: messages.length > 1 ? "smooth" : "auto",
    });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [input]);

  return (
    <div className="h-dvh flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto p-2 sm:p-4">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`my-2 ${message.sender === "user" ? "ml-auto" : "mr-auto"} max-w-[95%] sm:max-w-[85%]`}
              >
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-800 shadow-sm text-gray-800 dark:text-gray-200"
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
              className="my-2 max-w-[95%] sm:max-w-[85%] mr-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                <div className="flex gap-2 items-start">
                  <Bot className="mt-1 text-green-500 shrink-0" />
                  <div className="flex-1">
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
                        <span className="ml-2">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="sticky bottom-0 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80">
        <div className="max-w-3xl mx-auto p-2 sm:p-4">
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="relative"
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, 1000))}
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
                  ? "bg-blue-300 dark:bg-blue-700 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
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
