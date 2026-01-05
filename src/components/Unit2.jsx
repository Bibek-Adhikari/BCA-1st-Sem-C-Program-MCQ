// Unit2.jsx
import React, { useState, useEffect, useRef } from 'react';

const Unit2Quiz = () => {
  // Questions array (same as before)
  const questions = [
    {
      id: 1,
      question: "Which header file is required for standard I/O functions in C?",
      options: ["<stdio.h>", "<stdlib.h>", "<conio.h>", "<math.h>"],
      answer: 0,
      explanation: "The <stdio.h> header file contains declarations for standard input/output functions like printf() and scanf()."
    },
    {
      id: 2,
      question: "What does the printf() function do?",
      options: [
        "Reads input from keyboard",
        "Displays output on screen",
        "Calculates mathematical operations",
        "Allocates memory"
      ],
      answer: 1,
      explanation: "printf() is a formatted output function that displays output on the screen."
    },
    {
      id: 3,
      question: "Which format specifier is used for integer values in printf()?",
      options: ["%f", "%d", "%c", "%s"],
      answer: 1,
      explanation: "%d is the format specifier for integer (decimal) values."
    },
    {
      id: 4,
      question: "What is the correct syntax for printf()?",
      options: [
        'printf(variable, "format string")',
        'printf("format string", variable1, variable2, ...)',
        'printf(variable1, variable2, "format string")',
        'printf(&variable, "format string")'
      ],
      answer: 1,
      explanation: "The correct syntax is printf(\"format string\", variable1, variable2, ...);"
    },
    {
      id: 5,
      question: "Which function is used for formatted input in C?",
      options: ["printf()", "scanf()", "getchar()", "putchar()"],
      answer: 1,
      explanation: "scanf() is the formatted input function that reads input from the keyboard."
    },
    {
      id: 6,
      question: "What does the & operator do in scanf()?",
      options: [
        "Logical AND operation",
        "Address operator",
        "Bitwise AND operation",
        "Increment operator"
      ],
      answer: 1,
      explanation: "The & is the address operator, required to store input into variables by providing their memory addresses."
    },
    {
      id: 7,
      question: "Which of these is NOT a formatted I/O function?",
      options: ["printf()", "scanf()", "getchar()", "All are formatted"],
      answer: 2,
      explanation: "getchar() is an unformatted I/O function for character-level operations."
    },
    {
      id: 8,
      question: "What does getchar() function do?",
      options: [
        "Reads a string",
        "Reads a single character",
        "Reads an integer",
        "Displays a character"
      ],
      answer: 1,
      explanation: "getchar() reads a single character from standard input."
    },
    {
      id: 9,
      question: "Which header file contains getch() and getche() functions?",
      options: ["<stdio.h>", "<conio.h>", "<stdlib.h>", "<ctype.h>"],
      answer: 1,
      explanation: "getch(), getche(), and putch() are available in <conio.h> (mainly for Turbo C/DOS-based compilers)."
    },
    {
      id: 10,
      question: "What is the difference between getch() and getche()?",
      options: [
        "getch() reads with echo, getche() without",
        "getch() reads without echo, getche() with echo",
        "Both are identical",
        "getch() is for strings, getche() for characters"
      ],
      answer: 1,
      explanation: "getch() reads character without echo (not displayed), getche() reads character with echo (displayed)."
    },
    {
      id: 11,
      question: "Which control structure is used for decision making?",
      options: ["if statement", "while loop", "for loop", "All of these"],
      answer: 0,
      explanation: "if statement is specifically for decision making, while loops are for repetition."
    },
    {
      id: 12,
      question: "What is the purpose of control structures?",
      options: [
        "Memory management",
        "Determine flow of execution",
        "File handling",
        "Mathematical calculations"
      ],
      answer: 1,
      explanation: "Control structures determine the flow of execution in a program."
    },
    {
      id: 13,
      question: "How many types of control structures are there?",
      options: ["2", "3", "4", "5"],
      answer: 2,
      explanation: "Four types: Sequential, Decision Making, Looping, and Jump Statements."
    },
    {
      id: 14,
      question: "Which statement executes code only if a condition is true?",
      options: ["if", "if-else", "switch", "while"],
      answer: 0,
      explanation: "The if statement executes a block of code only if the condition is true."
    },
    {
      id: 15,
      question: "What does the if-else statement do?",
      options: [
        "Executes only if condition is true",
        "Executes only if condition is false",
        "Executes one block if true, another if false",
        "Checks multiple conditions"
      ],
      answer: 2,
      explanation: "if-else executes one block if condition is true, otherwise executes the else block."
    },
    {
      id: 16,
      question: "What is a nested if-else statement?",
      options: [
        "Multiple if statements in sequence",
        "An if-else inside another if-else",
        "An if statement without else",
        "A switch statement alternative"
      ],
      answer: 1,
      explanation: "A nested if-else is an if-else statement inside another if-else statement."
    },
    {
      id: 17,
      question: "Which statement is best for checking multiple conditions sequentially?",
      options: ["if", "if-else", "else-if ladder", "switch"],
      answer: 2,
      explanation: "The else-if ladder is specifically designed for checking multiple conditions sequentially."
    },
    {
      id: 18,
      question: "What is the main advantage of switch statement?",
      options: [
        "Works with all data types",
        "Multiple choice decision making",
        "Can use relational operators",
        "No break statements needed"
      ],
      answer: 1,
      explanation: "switch is ideal for multiple choice decision making based on a single expression."
    },
    {
      id: 19,
      question: "Which limitation applies to switch statement?",
      options: [
        "Cannot use integer expressions",
        "Cannot use character expressions",
        "Cannot use relational operators",
        "Cannot have default case"
      ],
      answer: 2,
      explanation: "switch cannot use relational operators like >, <, >=, etc."
    },
    {
      id: 20,
      question: "What is another name for the conditional operator?",
      options: ["Unary operator", "Binary operator", "Ternary operator", "Relational operator"],
      answer: 2,
      explanation: "The conditional operator (? :) is also known as the ternary operator."
    },
    {
      id: 21,
      question: "What is the syntax of ternary operator?",
      options: [
        "(condition) ? expression1 : expression2",
        "condition ? : expression1 expression2",
        "(condition) : expression1 ? expression2",
        "condition ? expression1 : expression2"
      ],
      answer: 0,
      explanation: "Correct syntax: (condition) ? expression1 : expression2"
    },
    {
      id: 22,
      question: "Which loop checks condition before execution?",
      options: ["while", "do-while", "for", "Both while and for"],
      answer: 3,
      explanation: "Both while and for loops check condition before executing the loop body."
    },
    {
      id: 23,
      question: "Which loop executes at least once?",
      options: ["while", "do-while", "for", "All loops"],
      answer: 1,
      explanation: "do-while loop executes the body first, then checks the condition."
    },
    {
      id: 24,
      question: "When is for loop typically used?",
      options: [
        "When iterations are unknown",
        "When condition is false initially",
        "When number of iterations is known",
        "For infinite loops"
      ],
      answer: 2,
      explanation: "for loop is used when the number of iterations is known beforehand."
    },
    {
      id: 25,
      question: "What is a nested loop?",
      options: [
        "Loop with multiple conditions",
        "Loop inside another loop",
        "Loop with break statement",
        "Infinite loop"
      ],
      answer: 1,
      explanation: "A nested loop is a loop inside another loop."
    },
    {
      id: 26,
      question: "What does the break statement do in a loop?",
      options: [
        "Skips current iteration",
        "Terminates the loop",
        "Continues to next iteration",
        "Restarts the loop"
      ],
      answer: 1,
      explanation: "break statement terminates the loop or switch statement immediately."
    },
    {
      id: 27,
      question: "What does the continue statement do?",
      options: [
        "Terminates the loop",
        "Skips current iteration",
        "Restarts program",
        "Exits program"
      ],
      answer: 1,
      explanation: "continue skips the current iteration and continues with the next iteration."
    },
    {
      id: 28,
      question: "Why is goto statement discouraged?",
      options: [
        "Too slow",
        "Uses too much memory",
        "Makes programs difficult to understand",
        "Not available in all compilers"
      ],
      answer: 2,
      explanation: "goto makes programs difficult to understand and maintain (spaghetti code)."
    },
    {
      id: 29,
      question: "What will be output: int a=5; printf(\"%d\", a++);",
      options: ["5", "6", "0", "Error"],
      answer: 0,
      explanation: "Post-increment: prints 5 first, then increments to 6."
    },
    {
      id: 30,
      question: "Which format specifier is used for float with 2 decimal places?",
      options: ["%f", "%.2f", "%2f", "%f.2"],
      answer: 1,
      explanation: "%.2f displays float with 2 decimal places."
    },
    {
      id: 31,
      question: "What is wrong: scanf(\"%d\", age);",
      options: [
        "Missing & operator",
        "Wrong format specifier",
        "Missing parentheses",
        "Nothing wrong"
      ],
      answer: 0,
      explanation: "Missing & operator: should be scanf(\"%d\", &age);"
    },
    {
      id: 32,
      question: "Which is NOT a jump statement?",
      options: ["break", "continue", "goto", "switch"],
      answer: 3,
      explanation: "switch is a control statement, not a jump statement."
    },
    {
      id: 33,
      question: "What will: for(;;) printf(\"hello\"); do?",
      options: [
        "Print once",
        "Print 10 times",
        "Infinite loop",
        "Compile error"
      ],
      answer: 2,
      explanation: "for(;;) is an infinite loop as it has no condition to terminate."
    },
    {
      id: 34,
      question: "What is output: int x=10; if(x=5) printf(\"yes\"); else printf(\"no\");",
      options: ["yes", "no", "Error", "Nothing"],
      answer: 0,
      explanation: "x=5 is assignment (not comparison), which evaluates to true, so prints \"yes\"."
    },
    {
      id: 35,
      question: "Which reads character without echo?",
      options: ["getchar()", "getche()", "getch()", "scanf()"],
      answer: 2,
      explanation: "getch() reads character without displaying it (without echo)."
    },
    {
      id: 36,
      question: "What is required in every switch case?",
      options: ["break", "default", "continue", "None are required"],
      answer: 3,
      explanation: "break is optional but recommended; default is optional; continue cannot be used in switch."
    },
    {
      id: 37,
      question: "What does putchar() do?",
      options: [
        "Reads character",
        "Displays character",
        "Reads string",
        "Displays string"
      ],
      answer: 1,
      explanation: "putchar() displays a single character on the screen."
    },
    {
      id: 38,
      question: "Which is an unformatted I/O function?",
      options: ["printf()", "scanf()", "putch()", "All are formatted"],
      answer: 2,
      explanation: "putch() is an unformatted I/O function from <conio.h>."
    },
    {
      id: 39,
      question: "What is: int a=10,b=20; int c=(a>b)?a:b;",
      options: ["10", "20", "0", "Error"],
      answer: 1,
      explanation: "Ternary operator returns b (20) since a>b is false."
    },
    {
      id: 40,
      question: "What is limitation of scanf() with strings?",
      options: [
        "Cannot read integers",
        "Doesn't handle spaces well",
        "Too fast",
        "Needs & operator"
      ],
      answer: 1,
      explanation: "scanf() stops reading string at first space encountered."
    },
    {
      id: 41,
      question: "What will: int i=1; while(i<=5); {printf(\"%d\",i); i++;} do?",
      options: [
        "Print 1 to 5",
        "Print 1",
        "Infinite loop",
        "Nothing"
      ],
      answer: 2,
      explanation: "Semicolon after while creates infinite loop: while(i<=5);"
    },
    {
      id: 42,
      question: "What is correct syntax for if statement?",
      options: [
        "if condition { }",
        "if (condition) { }",
        "if {condition}",
        "if condition then { }"
      ],
      answer: 1,
      explanation: "Correct syntax: if (condition) { statements; }"
    },
    {
      id: 43,
      question: "Which operator has highest precedence?",
      options: ["+", "=", "?:", "++"],
      answer: 3,
      explanation: "Increment/decrement has higher precedence than arithmetic, assignment, and ternary operators."
    },
    {
      id: 44,
      question: "What does default do in switch?",
      options: [
        "Executes always",
        "Executes when no case matches",
        "Terminates switch",
        "Required in all switches"
      ],
      answer: 1,
      explanation: "default executes when none of the case values match the expression."
    },
    {
      id: 45,
      question: "What is output: for(i=0;i<3;i++); printf(\"%d\",i);",
      options: ["0", "1", "2", "3"],
      answer: 3,
      explanation: "Loop runs 3 times (i=0,1,2), then i becomes 3, semicolon after for means empty loop body."
    },
    {
      id: 46,
      question: "What is: int x=10; do{printf(\"%d\",x); x--;} while(x>10); output?",
      options: ["10", "9 to 1", "No output", "Infinite loop"],
      answer: 0,
      explanation: "do-while executes once before checking condition, so prints 10 once."
    },
    {
      id: 47,
      question: "Which format specifier for hexadecimal?",
      options: ["%h", "%x", "%hex", "%d"],
      answer: 1,
      explanation: "%x is the format specifier for hexadecimal numbers."
    },
    {
      id: 48,
      question: "What is missing: int n; printf(\"Enter number:\"); _____(\"%d\",&n);",
      options: ["scanf", "printf", "getchar", "input"],
      answer: 0,
      explanation: "scanf() is needed to read input into variable n."
    },
    {
      id: 49,
      question: "Which is correct for reading two integers?",
      options: [
        'scanf("%d%d", &a,&b)',
        'scanf("%d %d", a, b)',
        'scanf("%d,%d", &a,&b)',
        'scanf("%d%d", a,b)'
      ],
      answer: 0,
      explanation: "Correct: scanf(\"%d%d\", &a,&b) - reads two integers with & operator."
    },
    {
      id: 50,
      question: "What is PREPARED BY in the PDF?",
      options: [
        "Compiler name",
        "Author name",
        "Function name",
        "Variable name"
      ],
      answer: 1,
      explanation: "PREPARED BY: Sanjay Khattri indicates the author/preparer of the document."
    }
  ];

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(50).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3000); // 50 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for auto-scroll
  const questionRef = useRef(null);
  const optionsRef = useRef(null);

  // Timer effect
  useEffect(() => {
    if (!quizStarted || showResult || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, showResult, timeLeft]);

  // Update answered count
  useEffect(() => {
    const count = userAnswers.filter(answer => answer !== null).length;
    setAnsweredCount(count);
  }, [userAnswers]);

  const handleOptionSelect = (optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[selectedQuestion] = optionIndex;
    setUserAnswers(newAnswers);

    // Auto-scroll to show selection
    if (optionsRef.current) {
      optionsRef.current.children[optionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  const handleQuestionSelect = (questionNumber) => {
    const index = questionNumber - 1;
    setSelectedQuestion(index);
    setCurrentQuestionIndex(index);
    setShowExplanation(false);

    // Smooth scroll to question
    if (questionRef.current) {
      questionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNext = () => {
    if (selectedQuestion < questions.length - 1) {
      const nextIndex = selectedQuestion + 1;
      setSelectedQuestion(nextIndex);
      setCurrentQuestionIndex(nextIndex);
      setShowExplanation(false);

      if (questionRef.current) {
        questionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handlePrev = () => {
    if (selectedQuestion > 0) {
      const prevIndex = selectedQuestion - 1;
      setSelectedQuestion(prevIndex);
      setCurrentQuestionIndex(prevIndex);
      setShowExplanation(false);

      if (questionRef.current) {
        questionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setShowResult(true);
      setQuizCompleted(true);
      setQuizStarted(false);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setShowResult(false);
    setQuizCompleted(false);
    setUserAnswers(Array(50).fill(null));
    setTimeLeft(3000);
    setSelectedQuestion(0);
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        score += 2;
      }
    });
    return score;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeStatus = () => {
    if (timeLeft > 1500) return 'safe';
    if (timeLeft > 300) return 'warning';
    return 'danger';
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Start Screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white/20">
            {/* Animated Title */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                C Programming Mastery
              </h1>
              <p className="text-2xl text-white/80 font-light">Unit 2: I/O & Control Structures</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-blue-500/30">
                <div className="text-4xl font-bold text-white mb-2">50</div>
                <div className="text-blue-200">Questions</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
                <div className="text-4xl font-bold text-white mb-2">50:00</div>
                <div className="text-purple-200">Time Limit</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
                <div className="text-4xl font-bold text-white mb-2">100</div>
                <div className="text-green-200">Total Marks</div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 mb-10 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                <span className="text-cyan-400">📚</span> Quiz Guidelines
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "✅", text: "Each question carries 2 marks" },
                  { icon: "⏱️", text: "50 minutes time limit" },
                  { icon: "🔄", text: "Navigate freely between questions" },
                  { icon: "📝", text: "Review answers before submission" },
                  { icon: "🎯", text: "Auto-submit when time expires" },
                  { icon: "📊", text: "Detailed results after completion" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics Grid */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">Topics Covered</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "Standard I/O", "Formatted I/O", "Control Flow",
                  "Decision Making", "Loops", "Jump Statements",
                  "Operators", "Functions"
                ].map((topic, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-white font-medium">{topic}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStartQuiz}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                🚀 Start Quiz Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </button>

            <div className="mt-8 text-white/60 text-sm">
              Prepared by: Sanjay Khattri
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (showResult) {
    const score = calculateScore();
    const percentage = (score / 100) * 100;
    const correctAnswers = questions.filter((q, idx) => userAnswers[idx] === q.answer).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10">
            {/* Results Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Quiz Completed!
              </h1>
              <p className="text-xl text-white/70">Your Performance Summary</p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold text-white mb-2">{score}</div>
                <div className="text-blue-100 text-lg">Total Score</div>
                <div className="text-blue-200/70">/ 100</div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold text-white mb-2">{percentage.toFixed(1)}%</div>
                <div className="text-purple-100 text-lg">Percentage</div>
                <div className="text-purple-200/70">Accuracy</div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold text-white mb-2">{correctAnswers}</div>
                <div className="text-green-100 text-lg">Correct</div>
                <div className="text-green-200/70">/ 50 Questions</div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold text-white mb-2">{50 - correctAnswers}</div>
                <div className="text-orange-100 text-lg">Incorrect</div>
                <div className="text-orange-200/70">To Review</div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Performance Breakdown</h2>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-green-400">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Correct
                  </span>
                  <span className="flex items-center gap-2 text-red-400">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    Incorrect
                  </span>
                  <span className="flex items-center gap-2 text-yellow-400">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    Unanswered
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {questions.map((q, idx) => (
                  <div
                    key={q.id}
                    onClick={() => {
                      setShowResult(false);
                      setQuizStarted(true);
                      handleQuestionSelect(idx + 1);
                    }}
                    className={`h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all ${userAnswers[idx] === q.answer
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white'
                      : userAnswers[idx] === null
                        ? 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 text-yellow-200 border border-yellow-500/30'
                        : 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                      } hover:scale-110 hover:shadow-lg`}
                    title={`Q${idx + 1}: ${userAnswers[idx] === q.answer ? 'Correct' : userAnswers[idx] === null ? 'Unanswered' : 'Incorrect'}`}
                  >
                    {idx + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Review */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Detailed Review</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                {questions.map((q, idx) => (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl border backdrop-blur-sm ${userAnswers[idx] === q.answer
                      ? 'bg-green-500/5 border-green-500/20'
                      : 'bg-red-500/5 border-red-500/20'
                      }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="font-bold text-white">Q{q.id}:</span>
                        <span className="text-white/90 ml-2">{q.question}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${userAnswers[idx] === q.answer
                        ? 'bg-green-500/20 text-green-300'
                        : 'bg-red-500/20 text-red-300'
                        }`}>
                        {userAnswers[idx] === q.answer ? '+2' : '0'}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Your Answer</div>
                        <div className={`p-3 rounded-lg ${userAnswers[idx] === q.answer
                          ? 'bg-green-500/10 text-green-300 border border-green-500/30'
                          : 'bg-red-500/10 text-red-300 border border-red-500/30'
                          }`}>
                          {userAnswers[idx] !== null ? q.options[userAnswers[idx]] : 'Not Answered'}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-white/70 mb-1">Correct Answer</div>
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/30">
                          {q.options[q.answer]}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-white/60">
                      <span className="font-bold text-cyan-300">Explanation:</span> {q.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={handleStartQuiz}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🔄 Retake Quiz
                </span>
              </button>

              <button
                onClick={() => window.print()}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🖨️ Print Results
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Quiz Interface
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 mb-6 border border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Quiz Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Unit 2: C Programming</h1>
                  <p className="text-white/70">Input/Output & Control Structures</p>
                </div>
              </div>
            </div>

            {/* Timer & Progress */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Timer */}
              <div className={`px-6 py-3 rounded-xl border backdrop-blur-sm ${getTimeStatus() === 'safe' ? 'border-green-500/30 bg-green-500/10' :
                getTimeStatus() === 'warning' ? 'border-yellow-500/30 bg-yellow-500/10' :
                  'border-red-500/30 bg-red-500/10'}`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold font-mono ${getTimeStatus() === 'safe' ? 'text-green-400' :
                    getTimeStatus() === 'warning' ? 'text-yellow-400' :
                      'text-red-400'}`}>
                    {formatTime(timeLeft)}
                  </div>
                  <div className={`text-sm ${getTimeStatus() === 'safe' ? 'text-green-300/70' :
                    getTimeStatus() === 'warning' ? 'text-yellow-300/70' :
                      'text-red-300/70'}`}>
                    Time Remaining
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {currentQuestionIndex + 1} <span className="text-white/50">/ {questions.length}</span>
                </div>
                <div className="text-sm text-white/70">Questions</div>
              </div>

              {/* Score */}
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {calculateScore()} <span className="text-white/50">/ 100</span>
                </div>
                <div className="text-sm text-white/70">Score</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-white/70 mb-2">
              <span>Progress: {((currentQuestionIndex + 1) / questions.length * 100).toFixed(1)}%</span>
              <span>Answered: {answeredCount}/{questions.length}</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel - Question Navigator */}
          <div className="lg:w-1/4">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-3 rounded-xl border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">{answeredCount}</div>
                  <div className="text-sm text-green-300/70">Answered</div>
                </div>
                <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 p-3 rounded-xl border border-red-500/20">
                  <div className="text-2xl font-bold text-red-400">{questions.length - answeredCount}</div>
                  <div className="text-sm text-red-300/70">Pending</div>
                </div>
              </div>
            </div>

            {/* Question Navigator */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">Question Navigator</h3>
                <div className="text-sm text-white/50">Click to jump</div>
              </div>

              <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-5 gap-2 mb-6">
                {questions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionSelect(index + 1)}
                    className={`relative h-12 rounded-xl transition-all duration-300 ${selectedQuestion === index
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 transform scale-105'
                      : userAnswers[index] !== null
                        ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:border-green-400/50'
                        : 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50'
                      } group`}
                  >
                    <span className={`font-medium ${selectedQuestion === index ? 'text-white' :
                      userAnswers[index] !== null ? 'text-green-300' : 'text-white/70'}`}>
                      {index + 1}
                    </span>

                    {/* Selection indicator */}
                    {selectedQuestion === index && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}

                    {/* Answer status indicator */}
                    {userAnswers[index] !== null && (
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                  <span className="text-white/80">Current Question</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30"></div>
                  <span className="text-white/80">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-800/50 border border-gray-700/50"></div>
                  <span className="text-white/80">Unanswered</span>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 mt-6 border border-white/10">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={handlePrev}
                  disabled={selectedQuestion === 0}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${selectedQuestion === 0
                    ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 hover:from-blue-500/30 hover:to-cyan-500/30 hover:text-blue-200 border border-blue-500/30'
                    }`}
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedQuestion === questions.length - 1}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${selectedQuestion === questions.length - 1
                    ? 'bg-gray-800/30 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 hover:from-green-500/30 hover:to-emerald-500/30 hover:text-green-200 border border-green-500/30'
                    }`}
                >
                  Next →
                </button>
              </div>

              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className={`w-full py-3 rounded-xl mb-4 transition-all ${showExplanation
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
                  : 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}
              >
                {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
              </button>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold hover:from-red-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-red-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </span>
                ) : (
                  'Submit Quiz'
                )}
              </button>
            </div>
          </div>

          {/* Right Panel - Question & Options */}
          <div className="lg:w-3/4">
            {/* Question Card */}
            <div
              ref={questionRef}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-6 border border-white/10"
            >
              {/* Question Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                    <span className="text-lg font-bold text-blue-300">Q{currentQuestion.id}</span>
                  </div>
                  <div className="text-sm text-white/50">
                    {currentQuestionIndex + 1} of {questions.length}
                  </div>
                </div>
                <div className="text-sm text-white/50">
                  Marks: <span className="text-green-400 font-bold">2</span>
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-relaxed">
                {currentQuestion.question}
              </h2>

              {/* Options Grid */}
              <div ref={optionsRef} className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${userAnswers[selectedQuestion] === index
                      ? 'border-blue-500 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 transform scale-[1.02] shadow-lg shadow-blue-500/20'
                      : 'border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/30'
                      }`}
                  >
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl mr-6 transition-all ${userAnswers[selectedQuestion] === index
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-gray-800/50 text-white/70 group-hover:bg-gray-700/50'
                        }`}>
                        <span className="text-xl font-bold">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <div className="text-lg md:text-xl text-white/90">{option}</div>

                      {/* Selection indicator */}
                      {userAnswers[selectedQuestion] === index && (
                        <div className="ml-auto">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                            <span className="text-white">✓</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Current Selection Display */}
              {userAnswers[selectedQuestion] !== null && (
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
                    <div className="font-bold text-cyan-300">Your Selection:</div>
                  </div>
                  <div className="text-xl text-white">
                    {currentQuestion.options[userAnswers[selectedQuestion]]}
                  </div>
                </div>
              )}

              {/* Explanation */}
              {showExplanation && (
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white">💡</span>
                    </div>
                    <div className="font-bold text-purple-300">Explanation</div>
                  </div>
                  <div className="text-white/80 leading-relaxed">
                    {currentQuestion.explanation}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-white">Quick Tips</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "🎯", text: "Read questions carefully" },
                  { icon: "⏱️", text: "Manage your time wisely" },
                  { icon: "🔄", text: "Review marked questions" },
                  { icon: "📝", text: "Double-check before submit" }
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
                    <span className="text-2xl">{tip.icon}</span>
                    <span className="text-white/90">{tip.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default Unit2Quiz;
