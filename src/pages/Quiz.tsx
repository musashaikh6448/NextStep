import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const Quiz: React.FC = () => {
  const questions: Question[] = [
    {
      question: 'Which of these is a statically typed language?',
      options: ['JavaScript', 'Python', 'C++', 'Ruby'],
      answer: 'C++',
    },
    {
      question: 'What does HTML stand for?',
      options: ['HyperText Markup Language', 'HyperText Machine Language', 'HyperText Marking Language', 'HyperText Markup Link'],
      answer: 'HyperText Markup Language',
    },
    {
      question: 'Which programming language is known as the "language of the web"?',
      options: ['Java', 'Python', 'JavaScript', 'C#'],
      answer: 'JavaScript',
    },
    {
      question: 'Which of the following is NOT an object-oriented programming language?',
      options: ['Java', 'C++', 'Python', 'C'],
      answer: 'C',
    },
    {
      question: 'What is the extension for a Python file?',
      options: ['.py', '.java', '.html', '.cpp'],
      answer: '.py',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (selected: string) => {
    setSelectedOption(selected);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      <h2>Programming Languages Quiz</h2>
      {quizFinished ? (
        <div>
          <h3>Your score: {score} out of {questions.length}</h3>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name="answer"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleAnswer(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <button onClick={handleNext} disabled={selectedOption === null}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
