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
  "html",
  "go",
  "ruby"
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
  html: { monaco: "html", name: "HTML" },
  go: { monaco: "go", name: "Go" },
  ruby: { monaco: "ruby", name: "Ruby" }
};

// Function to extract print statements from code
const extractOutputFromCode = (code: string, language: Language): string[] => {
  const output: string[] = [];
  
  if (language === "javascript") {
    // Extract console.log statements
    const logMatches = code.match(/console\.log\(([^)]+)\)/g);
    if (logMatches) {
      logMatches.forEach(match => {
        const content = match.replace(/console\.log\(([^)]+)\)/, '$1');
        try {
          output.push(eval(content));
        } catch {
          output.push(content);
        }
      });
    }
  } else if (language === "python") {
    // Extract print statements
    const printMatches = code.match(/print\(([^)]+)\)/g);
    if (printMatches) {
      printMatches.forEach(match => {
        const content = match.replace(/print\(([^)]+)\)/, '$1');
        try {
          output.push(eval(content));
        } catch {
          output.push(content);
        }
      });
    }
  } else if (language === "java") {
    // Extract System.out.println statements
    const printMatches = code.match(/System\.out\.println\(([^)]+)\)/g);
    if (printMatches) {
      printMatches.forEach(match => {
        const content = match.replace(/System\.out\.println\(([^)]+)\)/, '$1');
        output.push(content.replace(/"/g, ''));
      });
    }
  } else if (language === "c" || language === "cpp") {
    // Extract printf/cout statements
    if (language === "c") {
      const printMatches = code.match(/printf\(([^)]+)\)/g);
      if (printMatches) {
        printMatches.forEach(match => {
          const content = match.replace(/printf\(([^)]+)\)/, '$1');
          output.push(content.replace(/"/g, '').replace(/\\n/g, ''));
        });
      }
    } else {
      const printMatches = code.match(/std::cout << ([^;]+)/g);
      if (printMatches) {
        printMatches.forEach(match => {
          const content = match.replace(/std::cout << /, '').replace(/ << std::endl/, '');
          output.push(content.replace(/"/g, ''));
        });
      }
    }
  } else if (language === "csharp") {
    // Extract Console.WriteLine statements
    const printMatches = code.match(/Console\.WriteLine\(([^)]+)\)/g);
    if (printMatches) {
      printMatches.forEach(match => {
        const content = match.replace(/Console\.WriteLine\(([^)]+)\)/, '$1');
        output.push(content.replace(/"/g, ''));
      });
    }
  } else if (language === "php") {
    // Extract echo statements
    const printMatches = code.match(/echo ([^;]+)/g);
    if (printMatches) {
      printMatches.forEach(match => {
        const content = match.replace(/echo /, '');
        output.push(content.replace(/'/g, ''));
      });
    }
  } else if (language === "ruby") {
    // Extract puts/print statements
    const printMatches = code.match(/(?:puts|print) ([^;\n]+)/g);
    if (printMatches) {
      printMatches.forEach(match => {
        const content = match.replace(/(?:puts|print) /, '');
        output.push(content.replace(/"/g, '').replace(/'/g, ''));
      });
    }
  } else if (language === "go") {
    // Extract fmt.Println statements
    const printMatches = code.match(/fmt\.Println\(([^)]+)\)/g);
    if (printMatches) {
      printMatches.forEach(match => {
        const content = match.replace(/fmt\.Println\(([^)]+)\)/, '$1');
        output.push(content.replace(/"/g, ''));
      });
    }
  } else if (language === "html") {
    // Extract text content from HTML
    const textMatches = code.match(/<[^>]+>([^<]+)<\/[^>]+>/g);
    if (textMatches) {
      textMatches.forEach(match => {
        const content = match.replace(/<[^>]+>([^<]+)<\/[^>]+>/, '$1');
        output.push(content.trim());
      });
    }
  }

  return output.length > 0 ? output : ["Hello World!"];
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
      javascript: "console.log('Hello World From Javascript!');",
      python: "print('Hello World From Python!')",
      java: `class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World From Java!");\n  }\n}`,
      c: '#include <stdio.h>\nint main() {\n  printf("Hello World From C!\\n");\n  return 0;\n}',
      cpp: '#include <iostream>\nint main() {\n  std::cout << "Hello World From C++!" << std::endl;\n  return 0;\n}',
      csharp: 'using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello World From C#!");\n  }\n}',
      php: "<?php\n// PHP code\necho 'Hello World From PHP!';",
      html: '<!DOCTYPE html>\n<html>\n<head>\n  <title>HTML Preview</title>\n</head>\n<body>\n  <h1>Hello World From Html!</h1>\n  <p>This is an HTML preview</p>\n</body>\n</html>',
      go: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello World From Go!")\n}',
      ruby: 'puts "Hello World From Ruby!"'
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
        // For JavaScript, actually execute the code
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => logs.push(args.join(" "));
        try {
          await new Function(code)();
        } catch (error) {
          logs.push(`Error: ${(error as Error).message}`);
        }
        console.log = originalLog;
        setOutput(logs.length > 0 ? logs : ["(No output)"]);
      } else {
        // For other languages, simulate execution by extracting output statements
        const simulatedOutput = extractOutputFromCode(code, language);
        setOutput(simulatedOutput);
      }
    } catch (error) {
      setOutput([`Error: ${(error as Error).message}`]);
    } finally {
      setIsExecuting(false);
    }
  }, [code, language]);

  const formatStatus = useCallback(
    () =>
      `${LANGUAGE_CONFIG[language].name} • ${code.split("\n").length} lines • ${
        code.split(/\s+/).filter(Boolean).length
      } words`,
    [code, language]
  );

  useEffect(() => {
    setCode(defaultCode);
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
            Write and test code in multiple programming languages
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
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
                <div className="text-sm text-gray-400">
                  Output will appear here
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;
