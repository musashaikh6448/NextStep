import { useState, useCallback, Suspense, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Sun, Moon, Code2, Play, Terminal } from "lucide-react";
import Editor from "@monaco-editor/react";

const SUPPORTED_LANGUAGES = [
  "javascript",
  "python",
  "java",
  "c",
  "cpp",
  "csharp",
  "php",
] as const;

type Language = (typeof SUPPORTED_LANGUAGES)[number];
type Theme = "vs-dark" | "light";

const LANGUAGE_CONFIG = {
  javascript: { monaco: "javascript", name: "JavaScript" },
  python: { monaco: "python", name: "Python" },
  java: { monaco: "java", name: "Java" },
  c: { monaco: "c", name: "C" },
  cpp: { monaco: "cpp", name: "C++" },
  csharp: { monaco: "csharp", name: "C#" },
  php: { monaco: "php", name: "PHP" },
};

const CodeEditor: React.FC = () => {
  const [language, setLanguage] = useState<Language>("javascript");
  const [theme, setTheme] = useState<Theme>("vs-dark");
  const [isCopied, setIsCopied] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  // Using useMemo to avoid recomputing the default code on every render
  const defaultCode = useMemo(() => {
    const defaults: Record<Language, string> = {
      javascript: "console.log('Hello World!');",
      python: "print('Hello World!')",
      java: `class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World!");\n  }\n}`,
      c: '#include <stdio.h>\nint main() {\n  printf("Hello World!\\n");\n  return 0;\n}',
      cpp: '#include <iostream>\nint main() {\n  std::cout << "Hello World!" << std::endl;\n  return 0;\n}',
      csharp:
        'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello World!");\n  }\n}',
      php: "<?php\n// PHP code\necho 'Hello World!';",
    };
    return defaults[language];
  }, [language]);

  const [code, setCode] = useState<string>(defaultCode);

  const handleEditorDidMount = useCallback(() => {
    setIsEditorReady(true);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const executeCode = useCallback(async () => {
    setIsExecuting(true);
    setOutput([]);
    try {
      if (language === "javascript") {
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => logs.push(args.join(" "));
        try {
          await new Function(code)();
        } catch (error) {
          logs.push(`Error: ${(error as Error).message}`);
        }
        console.log = originalLog;
        setOutput(logs);
      } else {
        const response = await executeCodeAPI(language, code);
        setOutput(response.split("\n"));
      }
    } catch (error) {
      setOutput([`Execution Error: ${(error as Error).message}`]);
    } finally {
      setIsExecuting(false);
    }
  }, [code, language]);

  const executeCodeAPI = async (lang: string, code: string) => {
    return `Code execution for ${lang} requires backend setup\nUse JavaScript for browser execution`;
  };

  const formatStatus = useCallback(
    () =>
      `${LANGUAGE_CONFIG[language].name} • ${code.split("\n").length} lines • ${
        code.split(/\s+/).filter(Boolean).length
      } words`,
    [code, language]
  );

  useEffect(() => {
    setCode(defaultCode); // This is updated when the language changes
  }, [defaultCode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        executeCode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [executeCode]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen py-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-4 flex flex-col sm:flex-row justify-center items-center gap-2">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>Multi-Language Code Playground</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Write, run, and debug code in 7+ languages
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                      {LANGUAGE_CONFIG[lang].name}
                    </option>
                  ))}
                </select>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    setTheme((t) => (t === "vs-dark" ? "light" : "vs-dark"))
                  }
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {theme === "vs-dark" ? (
                    <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
                  ) : (
                    <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
                  )}
                </motion.button>
              </div>
              <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={executeCode}
                  className="px-4 py-2 flex gap-2 items-center bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
                  disabled={!isEditorReady || isExecuting}
                >
                  <Play className="w-5 h-5" />
                  {isExecuting ? "Running..." : "Run Code"}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className="px-4 py-2 flex gap-2 items-center bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-[1.02]"
                  disabled={!isEditorReady}
                >
                  {isCopied ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                  {isCopied ? "Copied!" : "Copy"}
                </motion.button>
              </div>
            </div>
            <Suspense
              fallback={
                <div className="h-[40vh] sm:h-[60vh] bg-gray-100 dark:bg-gray-700 animate-pulse" />
              }
            >
              <Editor
                height="40vh"
                className="sm:h-[60vh]"
                language={LANGUAGE_CONFIG[language].monaco}
                theme={theme}
                value={code}
                onChange={(value) => setCode(value || "")}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  formatOnPaste: true,
                  formatOnType: true,
                }}
              />
            </Suspense>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span>{formatStatus()}</span>
                <span>{theme === "vs-dark" ? "Dark" : "Light"} Theme</span>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Console Output
              </h3>
              <button
                onClick={() => setOutput([])}
                className="text-sm text-gray-500 dark:text-gray-300"
              >
                Clear
              </button>
            </div>
            <div
              className="p-4 max-h-[50vh] overflow-auto font-mono bg-gray-900 dark:bg-gray-800 text-white"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {isExecuting ? (
                <div className="flex justify-center items-center space-x-2">
                  <span>Running...</span>
                </div>
              ) : output.length > 0 ? (
                output.map((line, index) => (
                  <div key={index} className="text-sm">
                    {line}
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-400">No output yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;
