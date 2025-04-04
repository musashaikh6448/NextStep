import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, RotateCw, Clock } from 'lucide-react';

type Language = 'All' | 'JavaScript' | 'Python' | 'Java' | 'C++' | 'TypeScript' | 'Ruby' | 'Go' | 'Rust' | 'PHP' | 'Swift' | 'HTML' | 'CSS' | 'ReactJS' | 'NodeJS' | 'ExpressJS' | 'Angular' | 'NextJS' | 'VueJS';

interface Question {
  question: string;
  options: string[];
  answer: string;
  language: Exclude<Language, 'All'>;
  difficulty: 'Easy' | 'Medium' | 'Hard';
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
  // Questions database
  const questions: Question[] = [
    // JavaScript (Easy, Medium, Hard)
    {
      question: 'Which operator is used for strict equality comparison in JavaScript?',
      options: ['==', '=', '===', '!='],
      answer: '===',
      language: 'JavaScript',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: console.log(typeof null)?',
      options: ['object', 'null', 'undefined', 'string'],
      answer: 'object',
      language: 'JavaScript',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a function in JavaScript?',
      options: ['function myFunction() {}', 'def myFunction() {}', 'func myFunction() {}', 'function = myFunction() {}'],
      answer: 'function myFunction() {}',
      language: 'JavaScript',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `let` keyword in JavaScript?',
      options: ['To declare a constant variable', 'To declare a block-scoped variable', 'To declare a global variable', 'To declare a function'],
      answer: 'To declare a block-scoped variable',
      language: 'JavaScript',
      difficulty: 'Easy'
    },
    {
      question: 'What does the `map` method do in JavaScript?',
      options: ['Creates a new array with the results of calling a provided function on every element in the calling array', 'Removes the last element from an array', 'Adds a new element to the end of an array', 'Searches for a specific item in an array'],
      answer: 'Creates a new array with the results of calling a provided function on every element in the calling array',
      language: 'JavaScript',
      difficulty: 'Medium'
    },
    {
      question: 'What is a closure in JavaScript?',
      options: ['A function that has access to its own scope, the outer function’s scope, and the global scope', 'A function that is executed immediately after it is created', 'A function that returns another function', 'A function that is used to create objects'],
      answer: 'A function that has access to its own scope, the outer function’s scope, and the global scope',
      language: 'JavaScript',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: console.log(0.1 + 0.2 === 0.3)?',
      options: ['true', 'false', 'undefined', 'NaN'],
      answer: 'false',
      language: 'JavaScript',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `Promise` object in JavaScript?',
      options: ['To handle asynchronous operations', 'To create a new array', 'To define a class', 'To perform mathematical calculations'],
      answer: 'To handle asynchronous operations',
      language: 'JavaScript',
      difficulty: 'Medium'
    },
    {
      question: 'What is the output of the following code: console.log(typeof NaN)?',
      options: ['number', 'undefined', 'NaN', 'object'],
      answer: 'number',
      language: 'JavaScript',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `this` keyword in JavaScript?',
      options: ['To refer to the current object', 'To declare a variable', 'To define a function', 'To create a new array'],
      answer: 'To refer to the current object',
      language: 'JavaScript',
      difficulty: 'Easy'
    },

    // Python (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a function in Python?',
      options: ['def', 'function', 'func', 'define'],
      answer: 'def',
      language: 'Python',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: print(type(None))?',
      options: ['<class \'NoneType\'>', '<class \'int\'>', '<class \'str\'>', '<class \'bool\'>'],
      answer: '<class \'NoneType\'>',
      language: 'Python',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a dictionary in Python?',
      options: ['{}', '[]', '()', 'dict()'],
      answer: '{}',
      language: 'Python',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `if` statement in Python?',
      options: ['To define a function', 'To create a loop', 'To make decisions', 'To handle exceptions'],
      answer: 'To make decisions',
      language: 'Python',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: print(2 ** 3)?',
      options: ['6', '8', '9', '10'],
      answer: '8',
      language: 'Python',
      difficulty: 'Medium'
    },
    {
      question: 'What is a list comprehension in Python?',
      options: ['A way to create lists', 'A way to iterate over lists', 'A way to sort lists', 'A way to filter lists'],
      answer: 'A way to create lists',
      language: 'Python',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `import` statement in Python?',
      options: ['To define a function', 'To create a module', 'To include external code', 'To handle exceptions'],
      answer: 'To include external code',
      language: 'Python',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: print(len([1, 2, 3]))?',
      options: ['1', '2', '3', '4'],
      answer: '3',
      language: 'Python',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `try` statement in Python?',
      options: ['To define a function', 'To create a loop', 'To handle exceptions', 'To make decisions'],
      answer: 'To handle exceptions',
      language: 'Python',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: print("Hello"[1])?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'Python',
      difficulty: 'Easy'
    },

    // Java (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a class in Java?',
      options: ['class', 'interface', 'struct', 'define'],
      answer: 'class',
      language: 'Java',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: System.out.println(5 / 2)?',
      options: ['2', '2.5', '3', '2.0'],
      answer: '2',
      language: 'Java',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a String object in Java?',
      options: ['String str = "Hello";', 'String str = new String("Hello");', 'Both of the above', 'None of the above'],
      answer: 'Both of the above',
      language: 'Java',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `public` keyword in Java?',
      options: ['To define a private member', 'To define a protected member', 'To define a public member', 'To define a static member'],
      answer: 'To define a public member',
      language: 'Java',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: System.out.println(5 % 2)?',
      options: ['1', '2', '3', '4'],
      answer: '1',
      language: 'Java',
      difficulty: 'Medium'
    },
    {
      question: 'What is an interface in Java?',
      options: ['A class that cannot be instantiated', 'A class that can be instantiated', 'A method that can be overridden', 'A method that cannot be overridden'],
      answer: 'A class that cannot be instantiated',
      language: 'Java',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `final` keyword in Java?',
      options: ['To define a constant', 'To define a variable', 'To define a method', 'To define a class'],
      answer: 'To define a constant',
      language: 'Java',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: System.out.println(Math.max(5, 2))?',
      options: ['2', '3', '4', '5'],
      answer: '5',
      language: 'Java',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `throws` keyword in Java?',
      options: ['To handle exceptions', 'To throw exceptions', 'To catch exceptions', 'To define exceptions'],
      answer: 'To throw exceptions',
      language: 'Java',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: System.out.println("Hello".charAt(1))?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'Java',
      difficulty: 'Easy'
    },

    // C++ (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a class in C++?',
      options: ['class', 'struct', 'interface', 'define'],
      answer: 'class',
      language: 'C++',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: std::cout << 5 / 2;?',
      options: ['2', '2.5', '3', '2.0'],
      answer: '2',
      language: 'C++',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a string object in C++?',
      options: ['std::string str = "Hello";', 'string str = "Hello";', 'Both of the above', 'None of the above'],
      answer: 'Both of the above',
      language: 'C++',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `public` keyword in C++?',
      options: ['To define a private member', 'To define a protected member', 'To define a public member', 'To define a static member'],
      answer: 'To define a public member',
      language: 'C++',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: std::cout << 5 % 2;?',
      options: ['1', '2', '3', '4'],
      answer: '1',
      language: 'C++',
      difficulty: 'Medium'
    },
    {
      question: 'What is a pointer in C++?',
      options: ['A variable that stores the address of another variable', 'A variable that stores a value', 'A function that returns a value', 'A class that defines a data type'],
      answer: 'A variable that stores the address of another variable',
      language: 'C++',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `const` keyword in C++?',
      options: ['To define a constant', 'To define a variable', 'To define a method', 'To define a class'],
      answer: 'To define a constant',
      language: 'C++',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: std::cout << std::max(5, 2);?',
      options: ['2', '3', '4', '5'],
      answer: '5',
      language: 'C++',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `try` keyword in C++?',
      options: ['To handle exceptions', 'To throw exceptions', 'To catch exceptions', 'To define exceptions'],
      answer: 'To handle exceptions',
      language: 'C++',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: std::cout << "Hello".at(1);?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'C++',
      difficulty: 'Easy'
    },

    // TypeScript (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a variable in TypeScript?',
      options: ['var', 'let', 'const', 'All of the above'],
      answer: 'All of the above',
      language: 'TypeScript',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: console.log(typeof null)?',
      options: ['object', 'null', 'undefined', 'string'],
      answer: 'object',
      language: 'TypeScript',
      difficulty: 'Medium'
    },
    {
      question: 'How do you declare a function in TypeScript?',
      options: ['function myFunction() {}', 'def myFunction() {}', 'func myFunction() {}', 'function = myFunction() {}'],
      answer: 'function myFunction() {}',
      language: 'TypeScript',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `interface` keyword in TypeScript?',
      options: ['To define a class', 'To define a type', 'To define a variable', 'To define a function'],
      answer: 'To define a type',
      language: 'TypeScript',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: console.log(typeof []);?',
      options: ['object', 'array', 'undefined', 'string'],
      answer: 'object',
      language: 'TypeScript',
      difficulty: 'Medium'
    },
    {
      question: 'What is a generic in TypeScript?',
      options: ['A way to create reusable components', 'A way to define types', 'A way to handle exceptions', 'A way to create classes'],
      answer: 'A way to define types',
      language: 'TypeScript',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `any` type in TypeScript?',
      options: ['To define a variable that can hold any value', 'To define a variable that can only hold numbers', 'To define a variable that can only hold strings', 'To define a variable that can only hold booleans'],
      answer: 'To define a variable that can hold any value',
      language: 'TypeScript',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: console.log(typeof {});?',
      options: ['object', 'undefined', 'string', 'number'],
      answer: 'object',
      language: 'TypeScript',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `readonly` keyword in TypeScript?',
      options: ['To define a constant', 'To define a variable', 'To define a method', 'To define a class'],
      answer: 'To define a constant',
      language: 'TypeScript',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: console.log(typeof function(){});?',
      options: ['function', 'object', 'undefined', 'string'],
      answer: 'function',
      language: 'TypeScript',
      difficulty: 'Easy'
    },

    // Ruby (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a method in Ruby?',
      options: ['def', 'function', 'method', 'define'],
      answer: 'def',
      language: 'Ruby',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: puts nil.class?',
      options: ['NilClass', 'Object', 'String', 'Integer'],
      answer: 'NilClass',
      language: 'Ruby',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a hash in Ruby?',
      options: ['{}', '[]', '()', 'hash()'],
      answer: '{}',
      language: 'Ruby',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `if` statement in Ruby?',
      options: ['To define a method', 'To create a loop', 'To make decisions', 'To handle exceptions'],
      answer: 'To make decisions',
      language: 'Ruby',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: puts 2 ** 3?',
      options: ['6', '8', '9', '10'],
      answer: '8',
      language: 'Ruby',
      difficulty: 'Medium'
    },
    {
      question: 'What is a block in Ruby?',
      options: ['A way to group statements', 'A way to define a method', 'A way to handle exceptions', 'A way to create a loop'],
      answer: 'A way to group statements',
      language: 'Ruby',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `require` statement in Ruby?',
      options: ['To include external code', 'To define a method', 'To create a loop', 'To handle exceptions'],
      answer: 'To include external code',
      language: 'Ruby',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: puts [1, 2, 3].length?',
      options: ['1', '2', '3', '4'],
      answer: '3',
      language: 'Ruby',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `rescue` statement in Ruby?',
      options: ['To define a method', 'To create a loop', 'To handle exceptions', 'To make decisions'],
      answer: 'To handle exceptions',
      language: 'Ruby',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: puts "Hello"[1]?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'Ruby',
      difficulty: 'Easy'
    },

    // Go (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a function in Go?',
      options: ['func', 'function', 'def', 'define'],
      answer: 'func',
      language: 'Go',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: fmt.Println(5 / 2)?',
      options: ['2', '2.5', '3', '2.0'],
      answer: '2',
      language: 'Go',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a map in Go?',
      options: ['var map map[string]int', 'map := make(map[string]int)', 'Both of the above', 'None of the above'],
      answer: 'Both of the above',
      language: 'Go',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `package` keyword in Go?',
      options: ['To define a module', 'To define a function', 'To define a variable', 'To define a constant'],
      answer: 'To define a module',
      language: 'Go',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: fmt.Println(5 % 2)?',
      options: ['1', '2', '3', '4'],
      answer: '1',
      language: 'Go',
      difficulty: 'Medium'
    },
    {
      question: 'What is a goroutine in Go?',
      options: ['A lightweight thread managed by the Go runtime', 'A function that returns a value', 'A way to handle exceptions', 'A way to create a loop'],
      answer: 'A lightweight thread managed by the Go runtime',
      language: 'Go',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `const` keyword in Go?',
      options: ['To define a constant', 'To define a variable', 'To define a function', 'To define a package'],
      answer: 'To define a constant',
      language: 'Go',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: fmt.Println(math.Max(5, 2))?',
      options: ['2', '3', '4', '5'],
      answer: '5',
      language: 'Go',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `defer` keyword in Go?',
      options: ['To handle exceptions', 'To delay the execution of a function until the surrounding function returns', 'To define a constant', 'To define a variable'],
      answer: 'To delay the execution of a function until the surrounding function returns',
      language: 'Go',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: fmt.Println("Hello"[1])?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'Go',
      difficulty: 'Easy'
    },

    // Rust (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a function in Rust?',
      options: ['fn', 'function', 'def', 'define'],
      answer: 'fn',
      language: 'Rust',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: println!("{}", 5 / 2)?',
      options: ['2', '2.5', '3', '2.0'],
      answer: '2',
      language: 'Rust',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a hash map in Rust?',
      options: ['let mut map = HashMap::new();', 'let map: HashMap<String, i32> = HashMap::new();', 'Both of the above', 'None of the above'],
      answer: 'Both of the above',
      language: 'Rust',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `let` keyword in Rust?',
      options: ['To define a variable', 'To define a constant', 'To define a function', 'To define a module'],
      answer: 'To define a variable',
      language: 'Rust',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: println!("{}", 5 % 2)?',
      options: ['1', '2', '3', '4'],
      answer: '1',
      language: 'Rust',
      difficulty: 'Medium'
    },
    {
      question: 'What is a trait in Rust?',
      options: ['A way to define shared behavior', 'A way to define a variable', 'A way to handle exceptions', 'A way to create a loop'],
      answer: 'A way to define shared behavior',
      language: 'Rust',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `const` keyword in Rust?',
      options: ['To define a constant', 'To define a variable', 'To define a function', 'To define a module'],
      answer: 'To define a constant',
      language: 'Rust',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: println!("{}", std::cmp::max(5, 2))?',
      options: ['2', '3', '4', '5'],
      answer: '5',
      language: 'Rust',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `match` keyword in Rust?',
      options: ['To handle exceptions', 'To compare a value against a series of patterns', 'To define a constant', 'To define a variable'],
      answer: 'To compare a value against a series of patterns',
      language: 'Rust',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: println!("{}", "Hello".chars().nth(1).unwrap())?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'Rust',
      difficulty: 'Easy'
    },

    // PHP (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a function in PHP?',
      options: ['function', 'def', 'func', 'define'],
      answer: 'function',
      language: 'PHP',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: echo gettype(null);?',
      options: ['NULL', 'object', 'string', 'integer'],
      answer: 'NULL',
      language: 'PHP',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create an associative array in PHP?',
      options: ['array("key" => "value")', '["key" => "value"]', 'Both of the above', 'None of the above'],
      answer: 'Both of the above',
      language: 'PHP',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `echo` statement in PHP?',
      options: ['To output one or more strings', 'To define a function', 'To create a loop', 'To handle exceptions'],
      answer: 'To output one or more strings',
      language: 'PHP',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: echo 5 % 2;?',
      options: ['1', '2', '3', '4'],
      answer: '1',
      language: 'PHP',
      difficulty: 'Medium'
    },
    {
      question: 'What is a class in PHP?',
      options: ['A blueprint for creating objects', 'A way to define a variable', 'A way to handle exceptions', 'A way to create a loop'],
      answer: 'A blueprint for creating objects',
      language: 'PHP',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `const` keyword in PHP?',
      options: ['To define a constant', 'To define a variable', 'To define a function', 'To define a class'],
      answer: 'To define a constant',
      language: 'PHP',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: echo max(5, 2);?',
      options: ['2', '3', '4', '5'],
      answer: '5',
      language: 'PHP',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `try` keyword in PHP?',
      options: ['To handle exceptions', 'To throw exceptions', 'To catch exceptions', 'To define exceptions'],
      answer: 'To handle exceptions',
      language: 'PHP',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: echo "Hello"[1];?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'PHP',
      difficulty: 'Easy'
    },

    // Swift (Easy, Medium, Hard)
    {
      question: 'Which keyword is used to define a function in Swift?',
      options: ['func', 'function', 'def', 'define'],
      answer: 'func',
      language: 'Swift',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: print(5 / 2)?',
      options: ['2', '2.5', '3', '2.0'],
      answer: '2',
      language: 'Swift',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a dictionary in Swift?',
      options: ['var dict = ["key": "value"]', 'let dict: [String: String] = ["key": "value"]', 'Both of the above', 'None of the above'],
      answer: 'Both of the above',
      language: 'Swift',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `let` keyword in Swift?',
      options: ['To define a constant', 'To define a variable', 'To define a function', 'To define a class'],
      answer: 'To define a constant',
      language: 'Swift',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: print(5 % 2)?',
      options: ['1', '2', '3', '4'],
      answer: '1',
      language: 'Swift',
      difficulty: 'Medium'
    },
    {
      question: 'What is a closure in Swift?',
      options: ['A self-contained block of functionality that can be passed around and used in your code', 'A way to define a variable', 'A way to handle exceptions', 'A way to create a loop'],
      answer: 'A self-contained block of functionality that can be passed around and used in your code',
      language: 'Swift',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `var` keyword in Swift?',
      options: ['To define a variable', 'To define a constant', 'To define a function', 'To define a class'],
      answer: 'To define a variable',
      language: 'Swift',
      difficulty: 'Easy'
    },
    {
      question: 'What is the output of the following code: print(max(5, 2))?',
      options: ['2', '3', '4', '5'],
      answer: '5',
      language: 'Swift',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `guard` keyword in Swift?',
      options: ['To handle exceptions', 'To perform early exits', 'To define a constant', 'To define a variable'],
      answer: 'To perform early exits',
      language: 'Swift',
      difficulty: 'Hard'
    },
    {
      question: 'What is the output of the following code: print("Hello"[1])?',
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
      language: 'Swift',
      difficulty: 'Easy'
    },

    // HTML (Easy, Medium, Hard)
    {
      question: 'Which tag is used to define a hyperlink in HTML?',
      options: ['<a>', '<link>', '<href>', '<url>'],
      answer: '<a>',
      language: 'HTML',
      difficulty: 'Easy'
    },
    {
      question: 'What is the correct way to create a comment in HTML?',
      options: ['<!-- Comment -->', '<comment> Comment </comment>', '<!-- Comment --!>', '<! Comment !>'],
      answer: '<!-- Comment -->',
      language: 'HTML',
      difficulty: 'Medium'
    },
    {
      question: 'Which attribute is used to specify an alternate text for an image in HTML?',
      options: ['alt', 'title', 'src', 'href'],
      answer: 'alt',
      language: 'HTML',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `<div>` tag in HTML?',
      options: ['To define a division or section in an HTML document', 'To create a hyperlink', 'To define a list', 'To create a table'],
      answer: 'To define a division or section in an HTML document',
      language: 'HTML',
      difficulty: 'Easy'
    },
    {
      question: 'What is the correct way to create an ordered list in HTML?',
      options: ['<ol>', '<ul>', '<li>', '<dl>'],
      answer: '<ol>',
      language: 'HTML',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `<form>` tag in HTML?',
      options: ['To create a form for user input', 'To define a division or section in an HTML document', 'To create a hyperlink', 'To define a list'],
      answer: 'To create a form for user input',
      language: 'HTML',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `<table>` tag in HTML?',
      options: ['To define a table', 'To create a hyperlink', 'To define a list', 'To create a form for user input'],
      answer: 'To define a table',
      language: 'HTML',
      difficulty: 'Easy'
    },
    {
      question: 'What is the correct way to create a table row in HTML?',
      options: ['<tr>', '<td>', '<th>', '<table>'],
      answer: '<tr>',
      language: 'HTML',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `<button>` tag in HTML?',
      options: ['To create a clickable button', 'To define a division or section in an HTML document', 'To create a hyperlink', 'To define a list'],
      answer: 'To create a clickable button',
      language: 'HTML',
      difficulty: 'Hard'
    },
    {
      question: 'What is the correct way to create a table header in HTML?',
      options: ['<th>', '<td>', '<tr>', '<table>'],
      answer: '<th>',
      language: 'HTML',
      difficulty: 'Easy'
    },

    // CSS (Easy, Medium, Hard)
    {
      question: 'Which property is used to change the background color of an element in CSS?',
      options: ['background-color', 'color', 'bg-color', 'bgcolor'],
      answer: 'background-color',
      language: 'CSS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the correct syntax to select an element with the class "example" in CSS?',
      options: ['.example', '#example', 'example', 'class.example'],
      answer: '.example',
      language: 'CSS',
      difficulty: 'Medium'
    },
    {
      question: 'Which property is used to control the spacing between lines of text in CSS?',
      options: ['line-height', 'text-spacing', 'letter-spacing', 'word-spacing'],
      answer: 'line-height',
      language: 'CSS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `color` property in CSS?',
      options: ['To change the background color of an element', 'To change the text color of an element', 'To control the spacing between lines of text', 'To define the font size of an element'],
      answer: 'To change the text color of an element',
      language: 'CSS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the correct syntax to select an element with the id "example" in CSS?',
      options: ['.example', '#example', 'example', 'id.example'],
      answer: '#example',
      language: 'CSS',
      difficulty: 'Medium'
    },
    {
      question: 'Which property is used to define the font size of an element in CSS?',
      options: ['font-size', 'text-size', 'font-weight', 'text-weight'],
      answer: 'font-size',
      language: 'CSS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `margin` property in CSS?',
      options: ['To control the spacing outside of an element', 'To control the spacing inside of an element', 'To change the background color of an element', 'To change the text color of an element'],
      answer: 'To control the spacing outside of an element',
      language: 'CSS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the correct syntax to select all elements of a specific type in CSS?',
      options: ['element', '.element', '#element', 'type.element'],
      answer: 'element',
      language: 'CSS',
      difficulty: 'Medium'
    },
    {
      question: 'Which property is used to define the border of an element in CSS?',
      options: ['border', 'border-style', 'border-width', 'border-color'],
      answer: 'border',
      language: 'CSS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `padding` property in CSS?',
      options: ['To control the spacing inside of an element', 'To control the spacing outside of an element', 'To change the background color of an element', 'To change the text color of an element'],
      answer: 'To control the spacing inside of an element',
      language: 'CSS',
      difficulty: 'Easy'
    },

    // ReactJS (Easy, Medium, Hard)
    {
      question: 'Which method is used to update the state in a React component?',
      options: ['setState', 'updateState', 'changeState', 'modifyState'],
      answer: 'setState',
      language: 'ReactJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `useEffect` hook in React?',
      options: ['To perform side effects in function components', 'To manage state in function components', 'To create a new component', 'To render a component'],
      answer: 'To perform side effects in function components',
      language: 'ReactJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you pass data from a parent component to a child component in React?',
      options: ['Using props', 'Using state', 'Using context', 'Using refs'],
      answer: 'Using props',
      language: 'ReactJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `useState` hook in React?',
      options: ['To manage state in function components', 'To perform side effects in function components', 'To create a new component', 'To render a component'],
      answer: 'To manage state in function components',
      language: 'ReactJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `useContext` hook in React?',
      options: ['To manage state in function components', 'To perform side effects in function components', 'To access the context in function components', 'To create a new component'],
      answer: 'To access the context in function components',
      language: 'ReactJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a custom hook in React?',
      options: ['By defining a function that uses other hooks', 'By defining a class that extends React.Component', 'By using the `createHook` function', 'By using the `useHook` function'],
      answer: 'By defining a function that uses other hooks',
      language: 'ReactJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `useReducer` hook in React?',
      options: ['To manage state in function components', 'To perform side effects in function components', 'To create a new component', 'To handle complex state logic in function components'],
      answer: 'To handle complex state logic in function components',
      language: 'ReactJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `useMemo` hook in React?',
      options: ['To memoize a value in function components', 'To perform side effects in function components', 'To manage state in function components', 'To create a new component'],
      answer: 'To memoize a value in function components',
      language: 'ReactJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a ref in React?',
      options: ['Using the `useRef` hook', 'Using the `createRef` function', 'Using the `useState` hook', 'Using the `useEffect` hook'],
      answer: 'Using the `useRef` hook',
      language: 'ReactJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `useCallback` hook in React?',
      options: ['To memoize a callback function in function components', 'To perform side effects in function components', 'To manage state in function components', 'To create a new component'],
      answer: 'To memoize a callback function in function components',
      language: 'ReactJS',
      difficulty: 'Easy'
    },

    // NodeJS (Easy, Medium, Hard)
    {
      question: 'Which method is used to read a file in NodeJS?',
      options: ['fs.readFile', 'fs.read', 'fs.open', 'fs.readSync'],
      answer: 'fs.readFile',
      language: 'NodeJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `express` module in NodeJS?',
      options: ['To create a web server', 'To manage files', 'To handle databases', 'To perform asynchronous operations'],
      answer: 'To create a web server',
      language: 'NodeJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you install a package in NodeJS?',
      options: ['npm install', 'npm get', 'npm add', 'npm import'],
      answer: 'npm install',
      language: 'NodeJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `require` function in NodeJS?',
      options: ['To include external modules', 'To create a web server', 'To manage files', 'To handle databases'],
      answer: 'To include external modules',
      language: 'NodeJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `http` module in NodeJS?',
      options: ['To create an HTTP server', 'To manage files', 'To handle databases', 'To perform asynchronous operations'],
      answer: 'To create an HTTP server',
      language: 'NodeJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a new route in ExpressJS?',
      options: ['app.get', 'app.post', 'app.route', 'app.create'],
      answer: 'app.get',
      language: 'NodeJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `path` module in NodeJS?',
      options: ['To handle and transform file paths', 'To create a web server', 'To manage files', 'To handle databases'],
      answer: 'To handle and transform file paths',
      language: 'NodeJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `fs` module in NodeJS?',
      options: ['To interact with the file system', 'To create a web server', 'To manage files', 'To handle databases'],
      answer: 'To interact with the file system',
      language: 'NodeJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you start an ExpressJS server?',
      options: ['app.listen', 'app.start', 'app.run', 'app.serve'],
      answer: 'app.listen',
      language: 'NodeJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `process` object in NodeJS?',
      options: ['To provide information about the Node.js process', 'To create a web server', 'To manage files', 'To handle databases'],
      answer: 'To provide information about the Node.js process',
      language: 'NodeJS',
      difficulty: 'Easy'
    },

    // ExpressJS (Easy, Medium, Hard)
    {
      question: 'Which method is used to create a new route in ExpressJS?',
      options: ['app.get', 'app.post', 'app.route', 'app.create'],
      answer: 'app.get',
      language: 'ExpressJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of middleware in ExpressJS?',
      options: ['To handle requests', 'To manage routes', 'To process data', 'To perform side effects'],
      answer: 'To handle requests',
      language: 'ExpressJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you start an ExpressJS server?',
      options: ['app.listen', 'app.start', 'app.run', 'app.serve'],
      answer: 'app.listen',
      language: 'ExpressJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `express` module in ExpressJS?',
      options: ['To create a web server', 'To manage files', 'To handle databases', 'To perform asynchronous operations'],
      answer: 'To create a web server',
      language: 'ExpressJS',
      difficulty: 'Easy'
    },
    {
      question: 'How do you install ExpressJS?',
      options: ['npm install express', 'npm get express', 'npm add express', 'npm import express'],
      answer: 'npm install express',
      language: 'ExpressJS',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `req` object in ExpressJS?',
      options: ['To represent the HTTP request', 'To represent the HTTP response', 'To manage routes', 'To process data'],
      answer: 'To represent the HTTP request',
      language: 'ExpressJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `res` object in ExpressJS?',
      options: ['To represent the HTTP response', 'To represent the HTTP request', 'To manage routes', 'To process data'],
      answer: 'To represent the HTTP response',
      language: 'ExpressJS',
      difficulty: 'Easy'
    },
    {
      question: 'How do you define a route parameter in ExpressJS?',
      options: ['Using a colon (:)', 'Using a question mark (?)', 'Using a hash (#)', 'Using an asterisk (*)'],
      answer: 'Using a colon (:)',
      language: 'ExpressJS',
      difficulty: 'Medium'
    },
    {
      question: 'What is the purpose of the `next` function in ExpressJS?',
      options: ['To pass control to the next middleware function', 'To handle requests', 'To manage routes', 'To process data'],
      answer: 'To pass control to the next middleware function',
      language: 'ExpressJS',
      difficulty: 'Hard'
    },
    {
      question: 'How do you set the status code of a response in ExpressJS?',
      options: ['res.status(code)', 'res.setStatus(code)', 'res.code(code)', 'res.sendStatus(code)'],
      answer: 'res.status(code)',
      language: 'ExpressJS',
      difficulty: 'Easy'
    },

    // Angular (Easy, Medium, Hard)
    {
      question: 'Which decorator is used to define a component in Angular?',
      options: ['@Component', '@Directive', '@Module', '@Injectable'],
      answer: '@Component',
      language: 'Angular',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `ngIf` directive in Angular?',
      options: ['To conditionally display an element', 'To loop over a list of items', 'To bind data to an element', 'To handle events'],
      answer: 'To conditionally display an element',
      language: 'Angular',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a service in Angular?',
      options: ['Using the `@Injectable` decorator', 'Using the `@Component` decorator', 'Using the `@Directive` decorator', 'Using the `@Module` decorator'],
      answer: 'Using the `@Injectable` decorator',
      language: 'Angular',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `ngFor` directive in Angular?',
      options: ['To loop over a list of items', 'To conditionally display an element', 'To bind data to an element', 'To handle events'],
      answer: 'To loop over a list of items',
      language: 'Angular',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `ngModel` directive in Angular?',
      options: ['To bind data to an element', 'To conditionally display an element', 'To loop over a list of items', 'To handle events'],
      answer: 'To bind data to an element',
      language: 'Angular',
      difficulty: 'Medium'
    },
    {
      question: 'How do you define a module in Angular?',
      options: ['Using the `@NgModule` decorator', 'Using the `@Component` decorator', 'Using the `@Directive` decorator', 'Using the `@Injectable` decorator'],
      answer: 'Using the `@NgModule` decorator',
      language: 'Angular',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `ngClass` directive in Angular?',
      options: ['To add and remove CSS classes', 'To conditionally display an element', 'To loop over a list of items', 'To bind data to an element'],
      answer: 'To add and remove CSS classes',
      language: 'Angular',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `ngStyle` directive in Angular?',
      options: ['To add and remove inline styles', 'To conditionally display an element', 'To loop over a list of items', 'To bind data to an element'],
      answer: 'To add and remove inline styles',
      language: 'Angular',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a custom directive in Angular?',
      options: ['Using the `@Directive` decorator', 'Using the `@Component` decorator', 'Using the `@Injectable` decorator', 'Using the `@Module` decorator'],
      answer: 'Using the `@Directive` decorator',
      language: 'Angular',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `ngTemplateOutlet` directive in Angular?',
      options: ['To insert an embedded view from a template', 'To conditionally display an element', 'To loop over a list of items', 'To bind data to an element'],
      answer: 'To insert an embedded view from a template',
      language: 'Angular',
      difficulty: 'Easy'
    },

    // NextJS (Easy, Medium, Hard)
    {
      question: 'Which file is used to define the main entry point of a NextJS application?',
      options: ['pages/_app.js', 'pages/index.js', 'next.config.js', 'public/index.html'],
      answer: 'pages/_app.js',
      language: 'NextJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `getStaticProps` function in NextJS?',
      options: ['To fetch data at build time', 'To fetch data at request time', 'To handle client-side navigation', 'To manage state'],
      answer: 'To fetch data at build time',
      language: 'NextJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a dynamic route in NextJS?',
      options: ['Using square brackets in the file name', 'Using curly braces in the file name', 'Using parentheses in the file name', 'Using angle brackets in the file name'],
      answer: 'Using square brackets in the file name',
      language: 'NextJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `getServerSideProps` function in NextJS?',
      options: ['To fetch data at request time', 'To fetch data at build time', 'To handle client-side navigation', 'To manage state'],
      answer: 'To fetch data at request time',
      language: 'NextJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `useRouter` hook in NextJS?',
      options: ['To handle client-side navigation', 'To fetch data at build time', 'To fetch data at request time', 'To manage state'],
      answer: 'To handle client-side navigation',
      language: 'NextJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a custom `_document.js` file in NextJS?',
      options: ['By creating a file in the `pages` directory', 'By creating a file in the `public` directory', 'By creating a file in the `components` directory', 'By creating a file in the `styles` directory'],
      answer: 'By creating a file in the `pages` directory',
      language: 'NextJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `next.config.js` file in NextJS?',
      options: ['To configure the NextJS application', 'To fetch data at build time', 'To fetch data at request time', 'To handle client-side navigation'],
      answer: 'To configure the NextJS application',
      language: 'NextJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `getInitialProps` method in NextJS?',
      options: ['To fetch data on the server side', 'To fetch data on the client side', 'To handle client-side navigation', 'To manage state'],
      answer: 'To fetch data on the server side',
      language: 'NextJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a custom `_app.js` file in NextJS?',
      options: ['By creating a file in the `pages` directory', 'By creating a file in the `public` directory', 'By creating a file in the `components` directory', 'By creating a file in the `styles` directory'],
      answer: 'By creating a file in the `pages` directory',
      language: 'NextJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `Link` component in NextJS?',
      options: ['To handle client-side navigation', 'To fetch data at build time', 'To fetch data at request time', 'To manage state'],
      answer: 'To handle client-side navigation',
      language: 'NextJS',
      difficulty: 'Easy'
    },

    // VueJS (Easy, Medium, Hard)
    {
      question: 'Which directive is used to bind data to an element in VueJS?',
      options: ['v-bind', 'v-model', 'v-on', 'v-if'],
      answer: 'v-bind',
      language: 'VueJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `computed` property in VueJS?',
      options: ['To define reactive data', 'To define methods', 'To define computed properties', 'To handle events'],
      answer: 'To define computed properties',
      language: 'VueJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a VueJS component?',
      options: ['Using the `Vue.component` method', 'Using the `Vue.extend` method', 'Using the `Vue.create` method', 'Using the `Vue.define` method'],
      answer: 'Using the `Vue.component` method',
      language: 'VueJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `v-model` directive in VueJS?',
      options: ['To create two-way data bindings', 'To bind data to an element', 'To handle events', 'To define computed properties'],
      answer: 'To create two-way data bindings',
      language: 'VueJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `v-if` directive in VueJS?',
      options: ['To conditionally render an element', 'To bind data to an element', 'To handle events', 'To define computed properties'],
      answer: 'To conditionally render an element',
      language: 'VueJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you define a method in a VueJS component?',
      options: ['Using the `methods` property', 'Using the `computed` property', 'Using the `data` property', 'Using the `props` property'],
      answer: 'Using the `methods` property',
      language: 'VueJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `v-for` directive in VueJS?',
      options: ['To loop over a list of items', 'To conditionally render an element', 'To bind data to an element', 'To handle events'],
      answer: 'To loop over a list of items',
      language: 'VueJS',
      difficulty: 'Easy'
    },
    {
      question: 'What is the purpose of the `v-on` directive in VueJS?',
      options: ['To handle events', 'To bind data to an element', 'To conditionally render an element', 'To define computed properties'],
      answer: 'To handle events',
      language: 'VueJS',
      difficulty: 'Medium'
    },
    {
      question: 'How do you create a custom directive in VueJS?',
      options: ['Using the `Vue.directive` method', 'Using the `Vue.component` method', 'Using the `Vue.extend` method', 'Using the `Vue.create` method'],
      answer: 'Using the `Vue.directive` method',
      language: 'VueJS',
      difficulty: 'Hard'
    },
    {
      question: 'What is the purpose of the `v-show` directive in VueJS?',
      options: ['To conditionally display an element', 'To bind data to an element', 'To handle events', 'To define computed properties'],
      answer: 'To conditionally display an element',
      language: 'VueJS',
      difficulty: 'Easy'
    }
  ];

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showTimeout, setShowTimeout] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [timerActive, setTimerActive] = useState(false);
  const [results, setResults] = useState<QuizResult>({
    total: 0,
    correct: 0,
    wrong: 0,
    skipped: 0,
    timeouts: 0,
    answers: []
  });

  const languageCards = [
    {
      name: 'JavaScript',
      color: 'from-yellow-400 to-yellow-600',
      icon: 'JS',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-400/20'
    },
    {
      name: 'Python',
      color: 'from-blue-400 to-blue-600',
      icon: 'Py',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/20'
    },
    {
      name: 'Java',
      color: 'from-red-500 to-red-700',
      icon: 'Java',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      name: 'C++',
      color: 'from-purple-500 to-purple-700',
      icon: 'C++',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      name: 'TypeScript',
      color: 'from-blue-500 to-blue-700',
      icon: 'TS',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'Ruby',
      color: 'from-red-400 to-red-600',
      icon: 'Rb',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-400/20'
    },
    {
      name: 'Go',
      color: 'from-cyan-500 to-cyan-700',
      icon: 'Go',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      name: 'Rust',
      color: 'from-orange-500 to-orange-700',
      icon: 'Rs',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      name: 'PHP',
      color: 'from-indigo-500 to-indigo-700',
      icon: 'PHP',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      name: 'Swift',
      color: 'from-orange-400 to-orange-600',
      icon: 'Sw',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-400/20'
    },
    {
      name: 'HTML',
      color: 'from-green-500 to-green-700',
      icon: 'HTML',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      name: 'CSS',
      color: 'from-pink-500 to-pink-700',
      icon: 'CSS',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20'
    },
    {
      name: 'ReactJS',
      color: 'from-teal-500 to-teal-700',
      icon: 'React',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20'
    },
    {
      name: 'NodeJS',
      color: 'from-lime-500 to-lime-700',
      icon: 'Node',
      bgColor: 'bg-lime-500/10',
      borderColor: 'border-lime-500/20'
    },
    {
      name: 'ExpressJS',
      color: 'from-gray-500 to-gray-700',
      icon: 'Express',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/20'
    },
    {
      name: 'Angular',
      color: 'from-red-500 to-red-700',
      icon: 'Angular',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      name: 'NextJS',
      color: 'from-blue-500 to-blue-700',
      icon: 'Next',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      name: 'VueJS',
      color: 'from-green-500 to-green-700',
      icon: 'Vue',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      name: 'All',
      color: 'from-green-500 to-green-700',
      icon: 'All',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
  ];

  // Filter questions by selected language
  const filteredQuestions = selectedLanguage === 'All'
    ? questions
    : questions.filter(q => q.language === selectedLanguage);

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const progress = filteredQuestions.length > 0 ? ((currentQuestionIndex + 1) / filteredQuestions.length) * 100 : 0;

  // Initialize or reset quiz
  const startQuiz = (language: Language) => {
    setSelectedLanguage(language);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setQuizFinished(false);
    setShowTimeout(false);
    setTimeLeft(20);
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

  // Reset everything when leaving the quiz
  const resetQuiz = () => {
    setSelectedLanguage(null);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setQuizFinished(false);
    setShowTimeout(false);
    setTimerActive(false);
    setResults({
      total: 0,
      correct: 0,
      wrong: 0,
      skipped: 0,
      timeouts: 0,
      answers: []
    });
  };

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
    if (!quizFinished && filteredQuestions.length > 0 && selectedLanguage) {
      setTimeLeft(20);
      setTimerActive(true);
      setSelectedOption(null);
      setShowTimeout(false);
    }
  }, [currentQuestionIndex, quizFinished, filteredQuestions, selectedLanguage]);

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

  const handleRetry = () => {
    setShowTimeout(false);
    setTimeLeft(20);
    setTimerActive(true);
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (!selectedLanguage) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Programming Languages Quiz
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Select a language to test your knowledge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languageCards.map((card) => (
            <motion.div
              key={card.name}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
              onClick={() => startQuiz(card.name as Language)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
              <div className={`relative flex flex-col h-full p-6 rounded-lg border ${card.borderColor} ${card.bgColor} overflow-hidden`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.name}</h3>
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${card.color} text-white font-bold`}>
                    {card.icon}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {card.name === 'All'
                    ? 'Mixed questions from all languages'
                    : `Test your ${card.name} knowledge with ${questions.filter(q => q.language === card.name).length} questions`}
                </p>
                <div className="mt-auto">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white/50 dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    Start Quiz
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (filteredQuestions.length === 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-12">
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
            We couldn't find any questions for {selectedLanguage}
          </p>
          <button
            onClick={resetQuiz}
            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            Back to Language Selection
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
          {selectedLanguage} Quiz
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Test your {selectedLanguage === 'All' ? 'programming' : selectedLanguage} knowledge
        </p>
      </motion.div>

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

          <div className="flex justify-center gap-4">
            <button
              onClick={resetQuiz}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors font-medium"
            >
              Back to Languages
            </button>
            <button
              onClick={() => startQuiz(selectedLanguage)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <RotateCw className="h-5 w-5" />
              Restart Quiz
            </button>
          </div>
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
              onClick={moveToNextQuestion}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <ArrowRight className="h-5 w-5" />
              Next Question
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
              timeLeft < 8 ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' :
              timeLeft < 14 ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300' :
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
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                ← Back to Languages
              </button>

              <div className="flex gap-2">
                <button
                  onClick={moveToNextQuestion}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  {currentQuestionIndex === filteredQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Quiz;
