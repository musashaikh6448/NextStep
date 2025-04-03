import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, RotateCw, Filter, ChevronDown, ChevronUp, Clock, SkipForward } from 'lucide-react';

type Language = 'All' | 'JavaScript' | 'Python' | 'Java' | 'C++' | 'TypeScript' | 'Ruby' | 'Go' | 'Rust' | 'PHP' | 'Swift';

interface Question {
  question: string;
  options: string[];
  answer: string;
  language: Exclude<Language, 'All'>;
}

interface QuizResult {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
  timeouts: number;
  answers: {
    question: string;
    userAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
  }[];
}

const Quiz: React.FC = () => {
  // Questions database (10-15 per language)
  const questions: Question[] = [
    // JavaScript (15 questions)
    {
      question: 'Which operator is used for strict equality comparison in JavaScript?',
      options: ['==', '=', '===', '!='],
      answer: '===',
      language: 'JavaScript'
    },
    {
      question: 'What is the output of `typeof null` in JavaScript?',
      options: ['null', 'undefined', 'object', 'string'],
      answer: 'object',
      language: 'JavaScript'
    },
    {
      question: 'Which method adds one or more elements to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      answer: 'push()',
      language: 'JavaScript'
    },
    {
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: ['The current function', 'The global object', 'The object that owns the executing code', 'The parent object'],
      answer: 'The object that owns the executing code',
      language: 'JavaScript'
    },
    {
      question: 'Which of these is NOT a JavaScript framework?',
      options: ['React', 'Angular', 'Vue', 'Flask'],
      answer: 'Flask',
      language: 'JavaScript'
    },
    {
      question: 'What is hoisting in JavaScript?',
      options: [
        'Moving variable declarations to the top of their scope',
        'A way to handle asynchronous operations',
        'A type of loop',
        'A method for object creation'
      ],
      answer: 'Moving variable declarations to the top of their scope',
      language: 'JavaScript'
    },
    {
      question: 'What does the Array.map() method do?',
      options: [
        'Creates a new array with the results of calling a function on every element',
        'Filters the array based on a condition',
        'Reduces the array to a single value',
        'Sorts the array in place'
      ],
      answer: 'Creates a new array with the results of calling a function on every element',
      language: 'JavaScript'
    },
    {
      question: 'What is the purpose of closures in JavaScript?',
      options: [
        'To create private variables',
        'To improve performance',
        'To handle asynchronous operations',
        'To extend built-in objects'
      ],
      answer: 'To create private variables',
      language: 'JavaScript'
    },
    {
      question: 'Which of these is NOT a JavaScript data type?',
      options: ['number', 'string', 'boolean', 'character'],
      answer: 'character',
      language: 'JavaScript'
    },
    {
      question: 'What does the spread operator (...) do in JavaScript?',
      options: [
        'Expands an iterable into individual elements',
        'Combines multiple arrays into one',
        'Creates a deep copy of an object',
        'All of the above'
      ],
      answer: 'All of the above',
      language: 'JavaScript'
    },
    {
      question: 'What is the purpose of async/await in JavaScript?',
      options: [
        'To write asynchronous code that looks synchronous',
        'To improve performance of synchronous code',
        'To handle errors in promises',
        'To create web workers'
      ],
      answer: 'To write asynchronous code that looks synchronous',
      language: 'JavaScript'
    },
    {
      question: 'Which method converts a JSON string to a JavaScript object?',
      options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.toObject()'],
      answer: 'JSON.parse()',
      language: 'JavaScript'
    },
    {
      question: 'What is the event loop in JavaScript?',
      options: [
        'A mechanism that handles asynchronous callbacks',
        'A type of for loop',
        'A way to handle events in the DOM',
        'A debugging tool'
      ],
      answer: 'A mechanism that handles asynchronous callbacks',
      language: 'JavaScript'
    },
    {
      question: 'Which of these is NOT a way to declare a variable in JavaScript?',
      options: ['var', 'let', 'const', 'def'],
      answer: 'def',
      language: 'JavaScript'
    },
    {
      question: 'What does the "use strict" directive do?',
      options: [
        'Enables strict mode which catches common coding mistakes',
        'Improves performance',
        'Enforces type checking',
        'Allows using experimental features'
      ],
      answer: 'Enables strict mode which catches common coding mistakes',
      language: 'JavaScript'
    },

    // Python (15 questions)
    {
      question: 'Which keyword defines a function in Python?',
      options: ['func', 'def', 'function', 'fn'],
      answer: 'def',
      language: 'Python'
    },
    {
      question: 'What is the output of `print(3 * "abc")` in Python?',
      options: ['abcabcabc', '3abc', 'abc abc abc', 'Error'],
      answer: 'abcabcabc',
      language: 'Python'
    },
    {
      question: 'Which of these is NOT a Python built-in data structure?',
      options: ['list', 'tuple', 'array', 'dictionary'],
      answer: 'array',
      language: 'Python'
    },
    {
      question: 'What does the `pass` statement do in Python?',
      options: [
        'Terminates the program',
        'Does nothing, acts as a placeholder',
        'Passes arguments to a function',
        'Continues to the next iteration of a loop'
      ],
      answer: 'Does nothing, acts as a placeholder',
      language: 'Python'
    },
    {
      question: 'Which module is used for regular expressions in Python?',
      options: ['regex', 're', 'pyregex', 'pattern'],
      answer: 're',
      language: 'Python'
    },
    {
      question: 'How do you create a virtual environment in Python?',
      options: [
        'python -m venv env',
        'virtualenv env',
        'pip create env',
        'Both A and B'
      ],
      answer: 'Both A and B',
      language: 'Python'
    },
    {
      question: 'What is the purpose of __init__.py in Python?',
      options: [
        'To initialize the Python interpreter',
        'To mark a directory as a Python package',
        'To define initialization parameters',
        'To create a constructor for a class'
      ],
      answer: 'To mark a directory as a Python package',
      language: 'Python'
    },
    {
      question: 'Which of these is NOT a Python web framework?',
      options: ['Django', 'Flask', 'Pyramid', 'Spring'],
      answer: 'Spring',
      language: 'Python'
    },
    {
      question: 'What does list comprehension do in Python?',
      options: [
        'Creates a new list by applying an expression to each item',
        'Explains what a list does',
        'Compresses a list to save memory',
        'Checks if a list contains certain items'
      ],
      answer: 'Creates a new list by applying an expression to each item',
      language: 'Python'
    },
    {
      question: 'What is the correct way to open a file for reading in Python?',
      options: [
        'open("file.txt", "r")',
        'open("file.txt", "read")',
        'open("file.txt")',
        'Both A and C'
      ],
      answer: 'Both A and C',
      language: 'Python'
    },
    {
      question: 'Which method is used to get the length of a list?',
      options: ['length()', 'size()', 'len()', 'count()'],
      answer: 'len()',
      language: 'Python'
    },
    {
      question: 'What does the @staticmethod decorator do?',
      options: [
        'Marks a method as not requiring the self parameter',
        'Makes a method private',
        'Converts a method to a property',
        'Allows method overloading'
      ],
      answer: 'Marks a method as not requiring the self parameter',
      language: 'Python'
    },
    {
      question: 'Which of these is NOT a Python built-in function?',
      options: ['print', 'input', 'log', 'range'],
      answer: 'log',
      language: 'Python'
    },
    {
      question: 'What is the output of `print(5 / 2)` in Python 3?',
      options: ['2', '2.5', '2.0', '2.500000'],
      answer: '2.5',
      language: 'Python'
    },
    {
      question: 'Which operator is used for exponentiation in Python?',
      options: ['^', '**', '^^', 'exp'],
      answer: '**',
      language: 'Python'
    },

    // Java (15 questions)
    {
      question: 'What is the correct file extension for Java files?',
      options: ['.js', '.py', '.java', '.class'],
      answer: '.java',
      language: 'Java'
    },
    {
      question: 'Which keyword is used to create an object in Java?',
      options: ['create', 'new', 'object', 'make'],
      answer: 'new',
      language: 'Java'
    },
    {
      question: 'What is the superclass of all classes in Java?',
      options: ['Object', 'Super', 'Parent', 'Base'],
      answer: 'Object',
      language: 'Java'
    },
    {
      question: 'Which of these is NOT a primitive data type in Java?',
      options: ['int', 'float', 'String', 'boolean'],
      answer: 'String',
      language: 'Java'
    },
    {
      question: 'What is the default value of a boolean variable in Java?',
      options: ['true', 'false', 'null', 'undefined'],
      answer: 'false',
      language: 'Java'
    },
    {
      question: 'Which keyword makes a variable constant in Java?',
      options: ['const', 'final', 'static', 'readonly'],
      answer: 'final',
      language: 'Java'
    },
    {
      question: 'What is the entry point of a Java program?',
      options: [
        'main() method',
        'init() method',
        'start() method',
        'run() method'
      ],
      answer: 'main() method',
      language: 'Java'
    },
    {
      question: 'Which collection implements a dynamic array in Java?',
      options: ['ArrayList', 'LinkedList', 'HashSet', 'TreeMap'],
      answer: 'ArrayList',
      language: 'Java'
    },
    {
      question: 'What does JVM stand for?',
      options: [
        'Java Virtual Machine',
        'Java Variable Manager',
        'Java Verified Method',
        'Java Visual Manager'
      ],
      answer: 'Java Virtual Machine',
      language: 'Java'
    },
    {
      question: 'Which keyword is used for inheritance in Java?',
      options: ['inherits', 'extends', 'implements', 'super'],
      answer: 'extends',
      language: 'Java'
    },
    {
      question: 'What is method overloading in Java?',
      options: [
        'Having multiple methods with same name but different parameters',
        'Overriding a superclass method',
        'Making a method run faster',
        'Allowing a method to handle errors'
      ],
      answer: 'Having multiple methods with same name but different parameters',
      language: 'Java'
    },
    {
      question: 'Which of these is NOT an access modifier in Java?',
      options: ['public', 'private', 'protected', 'internal'],
      answer: 'internal',
      language: 'Java'
    },
    {
      question: 'What is the purpose of the finally block in try-catch?',
      options: [
        'To handle exceptions',
        'To execute code regardless of exceptions',
        'To catch specific exceptions',
        'To define custom exceptions'
      ],
      answer: 'To execute code regardless of exceptions',
      language: 'Java'
    },
    {
      question: 'Which interface provides the compareTo() method?',
      options: ['Runnable', 'Comparable', 'Comparator', 'Serializable'],
      answer: 'Comparable',
      language: 'Java'
    },
    {
      question: 'What is autoboxing in Java?',
      options: [
        'Automatic conversion between primitives and wrapper classes',
        'A way to package Java applications',
        'A type of collection',
        'A design pattern'
      ],
      answer: 'Automatic conversion between primitives and wrapper classes',
      language: 'Java'
    },

    // C++ (15 questions)
    {
      question: 'Which operator is used for scope resolution in C++?',
      options: [':', '::', '.', '->'],
      answer: '::',
      language: 'C++'
    },
    {
      question: 'What is the correct way to include the iostream library?',
      options: [
        '#include <iostream>',
        '#include "iostream"',
        'import iostream;',
        'using iostream;'
      ],
      answer: '#include <iostream>',
      language: 'C++'
    },
    {
      question: 'Which of these is NOT a C++ access modifier?',
      options: ['public', 'private', 'protected', 'internal'],
      answer: 'internal',
      language: 'C++'
    },
    {
      question: 'What is the output of `cout << 5 / 2;` in C++?',
      options: ['2', '2.5', '2.0', '3'],
      answer: '2',
      language: 'C++'
    },
    {
      question: 'Which keyword is used to allocate memory dynamically in C++?',
      options: ['malloc', 'alloc', 'new', 'create'],
      answer: 'new',
      language: 'C++'
    },
    {
      question: 'What is a reference in C++?',
      options: [
        'A pointer that cannot be reassigned',
        'An alias for an existing variable',
        'A constant pointer',
        'A smart pointer'
      ],
      answer: 'An alias for an existing variable',
      language: 'C++'
    },
    {
      question: 'Which of these is NOT a C++ STL container?',
      options: ['vector', 'array', 'list', 'tree'],
      answer: 'tree',
      language: 'C++'
    },
    {
      question: 'What is the purpose of the virtual keyword in C++?',
      options: [
        'To enable polymorphism',
        'To create abstract classes',
        'To prevent inheritance',
        'Both A and B'
      ],
      answer: 'Both A and B',
      language: 'C++'
    },
    {
      question: 'Which operator is used for dynamic casting in C++?',
      options: ['static_cast', 'dynamic_cast', 'reinterpret_cast', 'const_cast'],
      answer: 'dynamic_cast',
      language: 'C++'
    },
    {
      question: 'What is a constructor in C++?',
      options: [
        'A special method for initializing objects',
        'A function that creates classes',
        'A way to construct strings',
        'A type of operator'
      ],
      answer: 'A special method for initializing objects',
      language: 'C++'
    },
    {
      question: 'Which header file is needed for file I/O in C++?',
      options: ['<filestream>', '<fstream>', '<file>', '<iostream>'],
      answer: '<fstream>',
      language: 'C++'
    },
    {
      question: 'What is the purpose of the const keyword in C++?',
      options: [
        'To define constants',
        'To prevent modification of variables',
        'To optimize performance',
        'All of the above'
      ],
      answer: 'All of the above',
      language: 'C++'
    },
    {
      question: 'Which of these is NOT a type of inheritance in C++?',
      options: ['Single', 'Multiple', 'Multilevel', 'Parallel'],
      answer: 'Parallel',
      language: 'C++'
    },
    {
      question: 'What is the size of the int data type in C++ on a 32-bit system?',
      options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on compiler'],
      answer: '4 bytes',
      language: 'C++'
    },
    {
      question: 'Which keyword is used to prevent function overloading?',
      options: ['final', 'static', 'const', 'private'],
      answer: 'final',
      language: 'C++'
    },

    // TypeScript (10 questions)
    {
      question: 'What does TypeScript add to JavaScript?',
      options: ['Static typing', 'New runtime', 'Different syntax', 'All of the above'],
      answer: 'Static typing',
      language: 'TypeScript'
    },
    {
      question: 'Which command compiles TypeScript to JavaScript?',
      options: ['tsc', 'typescript', 'ts-compile', 'compile-ts'],
      answer: 'tsc',
      language: 'TypeScript'
    },
    {
      question: 'What is the TypeScript file extension?',
      options: ['.js', '.ts', '.typescript', '.tjs'],
      answer: '.ts',
      language: 'TypeScript'
    },
    {
      question: 'Which keyword defines a type in TypeScript?',
      options: ['type', 'interface', 'class', 'All of the above'],
      answer: 'All of the above',
      language: 'TypeScript'
    },
    {
      question: 'What is the purpose of generics in TypeScript?',
      options: [
        'To create reusable components',
        'To handle asynchronous operations',
        'To improve performance',
        'To enable type checking'
      ],
      answer: 'To create reusable components',
      language: 'TypeScript'
    },
    {
      question: 'Which symbol is used for type assertions in TypeScript?',
      options: ['<>', 'as', 'Both A and B', 'Neither'],
      answer: 'Both A and B',
      language: 'TypeScript'
    },
    {
      question: 'What is an enum in TypeScript?',
      options: [
        'A way to define a set of named constants',
        'A type of loop',
        'A method for error handling',
        'A collection type'
      ],
      answer: 'A way to define a set of named constants',
      language: 'TypeScript'
    },
    {
      question: 'Which of these is NOT a TypeScript basic type?',
      options: ['any', 'unknown', 'never', 'undefined'],
      answer: 'undefined',
      language: 'TypeScript'
    },
    {
      question: 'What does the readonly modifier do?',
      options: [
        'Makes a property immutable',
        'Makes a method private',
        'Prevents inheritance',
        'Marks a class as abstract'
      ],
      answer: 'Makes a property immutable',
      language: 'TypeScript'
    },
    {
      question: 'Which decorator is used for class components in Angular?',
      options: ['@Component', '@Decorator', '@Class', '@NgComponent'],
      answer: '@Component',
      language: 'TypeScript'
    },

    // Ruby (10 questions)
    {
      question: 'Which keyword defines a method in Ruby?',
      options: ['def', 'function', 'method', 'fn'],
      answer: 'def',
      language: 'Ruby'
    },
    {
      question: 'What is the Ruby package manager called?',
      options: ['npm', 'gem', 'pip', 'bundler'],
      answer: 'gem',
      language: 'Ruby'
    },
    {
      question: 'Which symbol is used for comments in Ruby?',
      options: ['//', '#', '--', '/*'],
      answer: '#',
      language: 'Ruby'
    },
    {
      question: 'What is the Ruby web framework?',
      options: ['Django', 'Rails', 'Laravel', 'Express'],
      answer: 'Rails',
      language: 'Ruby'
    },
    {
      question: 'Which operator is used for string interpolation in Ruby?',
      options: ['+', '#{}', '${}', '&'],
      answer: '#{}',
      language: 'Ruby'
    },
    {
      question: 'What is the convention for boolean methods in Ruby?',
      options: ['is_ prefix', '? suffix', '! suffix', 'no special convention'],
      answer: '? suffix',
      language: 'Ruby'
    },
    {
      question: 'Which of these is NOT a Ruby data type?',
      options: ['Symbol', 'Hash', 'Array', 'Tuple'],
      answer: 'Tuple',
      language: 'Ruby'
    },
    {
      question: 'What does attr_accessor do in Ruby?',
      options: [
        'Creates getter and setter methods',
        'Makes a variable accessible',
        'Imports a module',
        'Handles exceptions'
      ],
      answer: 'Creates getter and setter methods',
      language: 'Ruby'
    },
    {
      question: 'Which loop is NOT native to Ruby?',
      options: ['for', 'while', 'until', 'do-while'],
      answer: 'do-while',
      language: 'Ruby'
    },
    {
      question: 'What is the output of `puts 5 / 2` in Ruby?',
      options: ['2', '2.5', '2.0', '2.500000'],
      answer: '2',
      language: 'Ruby'
    },

    // Go (10 questions)
    {
      question: 'How do you declare a variable in Go?',
      options: ['var x int', 'x := 0', 'int x = 0', 'Both A and B'],
      answer: 'Both A and B',
      language: 'Go'
    },
    {
      question: 'What is the entry point of a Go program?',
      options: ['main()', 'init()', 'start()', 'run()'],
      answer: 'main()',
      language: 'Go'
    },
    {
      question: 'Which keyword defines a function in Go?',
      options: ['func', 'def', 'function', 'fn'],
      answer: 'func',
      language: 'Go'
    },
    {
      question: 'What is a goroutine?',
      options: [
        'A lightweight thread',
        'A type of variable',
        'A package manager',
        'A testing framework'
      ],
      answer: 'A lightweight thread',
      language: 'Go'
    },
    {
      question: 'Which of these is NOT a Go basic type?',
      options: ['int', 'float', 'string', 'char'],
      answer: 'char',
      language: 'Go'
    },
    {
      question: 'What is the zero value for pointers in Go?',
      options: ['0', 'nil', 'undefined', 'null'],
      answer: 'nil',
      language: 'Go'
    },
    {
      question: 'Which command compiles Go code?',
      options: ['go build', 'go compile', 'go run', 'go make'],
      answer: 'go build',
      language: 'Go'
    },
    {
      question: 'What is the purpose of defer in Go?',
      options: [
        'To delay function execution',
        'To handle errors',
        'To define constants',
        'To create interfaces'
      ],
      answer: 'To delay function execution',
      language: 'Go'
    },
    {
      question: 'Which of these is NOT a Go collection type?',
      options: ['array', 'slice', 'map', 'tuple'],
      answer: 'tuple',
      language: 'Go'
    },
    {
      question: 'What is the output of `fmt.Println(len("Hello"))` in Go?',
      options: ['5', '6', '4', 'Error'],
      answer: '5',
      language: 'Go'
    },

    // Rust (10 questions)
    {
      question: 'What is Rust\'s ownership system?',
      options: ['Memory management model', 'Package management', 'Error handling', 'Concurrency model'],
      answer: 'Memory management model',
      language: 'Rust'
    },
    {
      question: 'Which keyword defines a variable in Rust?',
      options: ['var', 'let', 'const', 'def'],
      answer: 'let',
      language: 'Rust'
    },
    {
      question: 'What is the Rust package manager called?',
      options: ['npm', 'cargo', 'pip', 'bundler'],
      answer: 'cargo',
      language: 'Rust'
    },
    {
      question: 'Which symbol is used for pattern matching in Rust?',
      options: ['=>', '->', 'match', '|'],
      answer: '=>',
      language: 'Rust'
    },
    {
      question: 'What is the purpose of the Result type in Rust?',
      options: [
        'Error handling',
        'Memory management',
        'Concurrency',
        'Type conversion'
      ],
      answer: 'Error handling',
      language: 'Rust'
    },
    {
      question: 'Which of these is NOT a Rust primitive type?',
      options: ['i32', 'f64', 'str', 'array'],
      answer: 'array',
      language: 'Rust'
    },
    {
      question: 'What does the mut keyword do?',
      options: [
        'Makes a variable mutable',
        'Creates a mutex',
        'Defines a module',
        'Imports a crate'
      ],
      answer: 'Makes a variable mutable',
      language: 'Rust'
    },
    {
      question: 'Which trait is used for displaying values in Rust?',
      options: ['Display', 'Show', 'Debug', 'ToString'],
      answer: 'Display',
      language: 'Rust'
    },
    {
      question: 'What is the purpose of the borrow checker?',
      options: [
        'To enforce ownership rules',
        'To manage packages',
        'To optimize performance',
        'To handle errors'
      ],
      answer: 'To enforce ownership rules',
      language: 'Rust'
    },
    {
      question: 'Which macro is used for printing in Rust?',
      options: ['print!', 'println!', 'echo!', 'Both A and B'],
      answer: 'println!',
      language: 'Rust'
    },

    // PHP (10 questions)
    {
      question: 'What does PHP stand for?',
      options: ['Personal Home Page', 'PHP Hypertext Processor', 'Preprocessed Hypertext', 'Both A and B'],
      answer: 'Both A and B',
      language: 'PHP'
    },
    {
      question: 'Which symbol starts all PHP variables?',
      options: ['@', '#', '$', '&'],
      answer: '$',
      language: 'PHP'
    },
    {
      question: 'What is the PHP framework?',
      options: ['Django', 'Laravel', 'Rails', 'Express'],
      answer: 'Laravel',
      language: 'PHP'
    },
    {
      question: 'Which function outputs content in PHP?',
      options: ['print()', 'echo()', 'output()', 'Both A and B'],
      answer: 'Both A and B',
      language: 'PHP'
    },
    {
      question: 'What is the concatenation operator in PHP?',
      options: ['+', '.', '&', '||'],
      answer: '.',
      language: 'PHP'
    },
    {
      question: 'Which superglobal holds POST data?',
      options: ['$_GET', '$_POST', '$_REQUEST', '$_INPUT'],
      answer: '$_POST',
      language: 'PHP'
    },
    {
      question: 'What does PDO stand for in PHP?',
      options: [
        'PHP Data Objects',
        'Personal Database Options',
        'Prepared Data Operations',
        'Public Data Organization'
      ],
      answer: 'PHP Data Objects',
      language: 'PHP'
    },
    {
      question: 'Which operator is used for equality in PHP?',
      options: ['=', '==', '===', 'Both B and C'],
      answer: 'Both B and C',
      language: 'PHP'
    },
    {
      question: 'What is the correct way to include a file in PHP?',
      options: ['include "file.php";', 'require "file.php";', 'import "file.php";', 'Both A and B'],
      answer: 'Both A and B',
      language: 'PHP'
    },
    {
      question: 'Which function starts a session in PHP?',
      options: ['session()', 'session_start()', 'start_session()', 'init_session()'],
      answer: 'session_start()',
      language: 'PHP'
    },

    // Swift (10 questions)
    {
      question: 'Which company developed Swift?',
      options: ['Apple', 'Google', 'Microsoft', 'Facebook'],
      answer: 'Apple',
      language: 'Swift'
    },
    {
      question: 'What is the Swift REPL?',
      options: [
        'Read-Eval-Print Loop',
        'Runtime Environment Programming Language',
        'Rapid Execution Programming Logic',
        'None of the above'
      ],
      answer: 'Read-Eval-Print Loop',
      language: 'Swift'
    },
    {
      question: 'Which keyword declares a constant in Swift?',
      options: ['let', 'var', 'const', 'constant'],
      answer: 'let',
      language: 'Swift'
    },
    {
      question: 'What is the nil-coalescing operator in Swift?',
      options: ['??', '?:', '!', '?'],
      answer: '??',
      language: 'Swift'
    },
    {
      question: 'Which framework is used for UI in Swift?',
      options: ['UIKit', 'AppKit', 'SwiftUI', 'All of the above'],
      answer: 'All of the above',
      language: 'Swift'
    },
    {
      question: 'What is the purpose of guard in Swift?',
      options: [
        'Early exit from a function',
        'Error handling',
        'Memory management',
        'Type checking'
      ],
      answer: 'Early exit from a function',
      language: 'Swift'
    },
    {
      question: 'Which symbol is used for type casting in Swift?',
      options: ['as', 'is', 'cast', 'Both A and B'],
      answer: 'Both A and B',
      language: 'Swift'
    },
    {
      question: 'What is an optional in Swift?',
      options: [
        'A type that can hold a value or nil',
        'A function parameter',
        'A type of loop',
        'A protocol'
      ],
      answer: 'A type that can hold a value or nil',
      language: 'Swift'
    },
    {
      question: 'Which keyword defines a protocol in Swift?',
      options: ['protocol', 'interface', 'contract', 'proposal'],
      answer: 'protocol',
      language: 'Swift'
    },
    {
      question: 'What is the output of `print(5 / 2)` in Swift?',
      options: ['2', '2.5', '2.0', '2.500000'],
      answer: '2',
      language: 'Swift'
    }
  ];

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showTimeout, setShowTimeout] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerActive, setTimerActive] = useState(true);
  const [results, setResults] = useState<QuizResult>({
    total: 0,
    correct: 0,
    wrong: 0,
    skipped: 0,
    timeouts: 0,
    answers: []
  });

  // Filter questions by selected language
  const filteredQuestions = questions.filter(q => 
    selectedLanguage === 'All' || q.language === selectedLanguage
  );

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const progress = filteredQuestions.length > 0 ? ((currentQuestionIndex + 1) / filteredQuestions.length) * 100 : 0;

  // Initialize or reset quiz
  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setQuizFinished(false);
    setShowTimeout(false);
    setTimeLeft(10);
    setTimerActive(true);
    setResults({
      total: filteredQuestions.length,
      correct: 0,
      wrong: 0,
      skipped: 0,
      timeouts: 0,
      answers: []
    });
  };

  // Handle language change
  useEffect(() => {
    startQuiz();
  }, [selectedLanguage]);

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (timerActive && !quizFinished && filteredQuestions.length > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [timerActive, quizFinished, currentQuestionIndex, filteredQuestions]);

  // Reset timer when question changes
  useEffect(() => {
    if (!quizFinished && filteredQuestions.length > 0) {
      setTimeLeft(10);
      setTimerActive(true);
      setSelectedOption(null);
      setShowTimeout(false);
    }
  }, [currentQuestionIndex, quizFinished, filteredQuestions]);

  const handleAnswer = (selected: string) => {
    if (!timerActive || selectedOption !== null) return;
    
    setSelectedOption(selected);
    setTimerActive(false);
    
    const isCorrect = selected === currentQuestion.answer;
    
    setResults(prev => ({
      ...prev,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      wrong: !isCorrect ? prev.wrong + 1 : prev.wrong,
      answers: [
        ...prev.answers,
        {
          question: currentQuestion.question,
          userAnswer: selected,
          correctAnswer: currentQuestion.answer,
          isCorrect
        }
      ]
    }));

    // Auto-advance after 1 second
    setTimeout(() => {
      moveToNextQuestion();
    }, 1000);
  };

  const handleTimeout = () => {
    setTimerActive(false);
    setShowTimeout(true);
    setResults(prev => ({
      ...prev,
      timeouts: prev.timeouts + 1,
      answers: [
        ...prev.answers,
        {
          question: currentQuestion.question,
          userAnswer: null,
          correctAnswer: currentQuestion.answer,
          isCorrect: false
        }
      ]
    }));
  };

  const handleSkip = () => {
    setResults(prev => ({
      ...prev,
      skipped: prev.skipped + 1,
      answers: [
        ...prev.answers,
        {
          question: currentQuestion.question,
          userAnswer: null,
          correctAnswer: currentQuestion.answer,
          isCorrect: false
        }
      ]
    }));
    moveToNextQuestion();
  };

  const handleRetry = () => {
    setShowTimeout(false);
    setTimeLeft(10);
    setTimerActive(true);
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const languages: Language[] = ['All', 'JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'Ruby', 'Go', 'Rust', 'PHP', 'Swift'];

  if (filteredQuestions.length === 0) {
    return (
      <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Programming Languages Quiz
          </h1>
        </motion.div>

        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl shadow border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            No questions available
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            We couldn't find any questions matching your filters
          </p>
          <button
            onClick={() => setSelectedLanguage('All')}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Show All Questions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Programming Languages Quiz
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Test your knowledge across multiple programming languages
        </p>
      </motion.div>

      {/* Language Filter */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow border border-gray-200/50 dark:border-gray-700/50">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
        >
          <Filter className="h-5 w-5" />
          Filter by Language
          {showFilters ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4"
          >
            <div className="flex flex-wrap gap-2">
              {languages.map(lang => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedLanguage === lang
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {quizFinished ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-6">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Quiz Results
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-300">
                {results.correct}
              </div>
              <div className="text-sm text-green-700 dark:text-green-200">
                Correct Answers
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-red-600 dark:text-red-300">
                {results.wrong}
              </div>
              <div className="text-sm text-red-700 dark:text-red-200">
                Wrong Answers
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                {results.skipped}
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-200">
                Skipped Questions
              </div>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-300">
                {results.timeouts}
              </div>
              <div className="text-sm text-yellow-700 dark:text-yellow-200">
                Timeouts
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-6">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" 
              style={{ width: `${(results.correct / results.total) * 100}%` }}
            />
          </div>

          <div className="mb-6 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-2">Detailed Results:</h3>
            {results.answers.map((answer, index) => (
              <div key={index} className={`mb-4 p-3 rounded-lg border ${
                answer.isCorrect 
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/10' 
                  : 'border-red-500 bg-red-50 dark:bg-red-900/10'
              }`}>
                <p className="font-medium">{answer.question}</p>
                <div className={`mt-1 ${answer.isCorrect ? 'text-green-600 dark:text-green-300' : 'text-red-600 dark:text-red-300'}`}>
                  {answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </div>
                {answer.userAnswer && (
                  <p className="text-sm mt-1">Your answer: <span className="font-medium">{answer.userAnswer}</span></p>
                )}
                {!answer.isCorrect && (
                  <p className="text-sm mt-1">Correct answer: <span className="font-medium">{answer.correctAnswer}</span></p>
                )}
              </div>
            ))}
          </div>
          
          <button
            onClick={startQuiz}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            <RotateCw className="h-5 w-5" />
            Restart Quiz
          </button>
        </motion.div>
      ) : showTimeout ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-center"
        >
          <div className="text-5xl mb-6">⏱️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Time's Up!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You didn't answer in time. The correct answer was:
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 p-4 rounded-lg mb-6 font-medium">
            {currentQuestion.answer}
          </div>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={handleRetry}
              className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors font-medium"
            >
              Try Again
            </button>
            <button
              onClick={handleSkip}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <SkipForward className="h-5 w-5" />
              Skip Question
            </button>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Progress bar and timer */}
          <div className="flex justify-between items-center">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-4">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              timeLeft < 4 ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' : 
              timeLeft < 7 ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' : 
              'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
            }`}>
              <Clock className="h-4 w-4 mr-1" />
              {timeLeft}s
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{currentQuestion.language}</span>
            <span>Question {currentQuestionIndex + 1} of {filteredQuestions.length}</span>
          </div>

          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    onClick={() => handleAnswer(option)}
                    disabled={!!selectedOption}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedOption === option
                        ? option === currentQuestion.answer
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : 'border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                        : selectedOption
                        ? 'opacity-70 cursor-not-allowed'
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {option}
                    {selectedOption === option && (
                      <span className="float-right">
                        {option === currentQuestion.answer ? '✓' : '✗'}
                      </span>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handleSkip}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <SkipForward className="h-5 w-5" />
                Skip Question
              </button>
              
              {selectedOption && (
                <button
                  onClick={moveToNextQuestion}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  {currentQuestionIndex === filteredQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  <ArrowRight className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Quiz;