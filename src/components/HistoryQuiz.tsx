import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface HistoryQuizProps {
  quizQuestions: QuizQuestion[];
}

const HistoryQuiz: React.FC<HistoryQuizProps> = ({ quizQuestions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Handle option selection
  const handleOptionSelect = (optionIndex: number) => {
    if (!isAnswerRevealed) {
      setSelectedOption(optionIndex);
    }
  };

  // Check answer and move to next question
  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    setIsAnswerRevealed(true);
    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  // Move to next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Reset quiz
  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0047AB] mb-4">TEST YOUR KNOWLEDGE</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Challenge yourself with this interactive quiz about Quezon City's history and discover fascinating facts
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!quizCompleted ? (
            <motion.div 
              key={`question-${currentQuestionIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              {/* Quiz progress */}
              <div className="bg-blue-600 p-4">
                <div className="flex justify-between items-center text-white">
                  <span className="font-medium">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                  <span className="font-medium">Score: {score}</span>
                </div>
                <div className="w-full bg-blue-300 h-2 mt-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-white h-full rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="p-8">
                <div className="flex items-start mb-8">
                  <FaQuestionCircle className="text-blue-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-gray-800">{quizQuestions[currentQuestionIndex].question}</h3>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                        selectedOption === index 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      } ${
                        isAnswerRevealed && index === quizQuestions[currentQuestionIndex].correctAnswer
                          ? 'bg-green-50 border-green-500'
                          : isAnswerRevealed && selectedOption === index && selectedOption !== quizQuestions[currentQuestionIndex].correctAnswer
                            ? 'bg-red-50 border-red-500'
                            : ''
                      }`}
                      whileHover={{ scale: selectedOption === null ? 1.01 : 1 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                          selectedOption === index ? 'bg-blue-600 text-white' : 'bg-gray-200'
                        } ${
                          isAnswerRevealed && index === quizQuestions[currentQuestionIndex].correctAnswer
                            ? 'bg-green-500 text-white'
                            : isAnswerRevealed && selectedOption === index && selectedOption !== quizQuestions[currentQuestionIndex].correctAnswer
                              ? 'bg-red-500 text-white'
                              : ''
                        }`}>
                          {isAnswerRevealed && index === quizQuestions[currentQuestionIndex].correctAnswer ? (
                            <FaCheckCircle className="text-sm" />
                          ) : isAnswerRevealed && selectedOption === index && selectedOption !== quizQuestions[currentQuestionIndex].correctAnswer ? (
                            <FaTimesCircle className="text-sm" />
                          ) : (
                            <span className="text-sm">{String.fromCharCode(65 + index)}</span>
                          )}
                        </div>
                        <span className="text-lg">{option}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Explanation - shown only when answer is revealed */}
                <AnimatePresence>
                  {isAnswerRevealed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-blue-50 p-4 rounded-lg mb-8 border border-blue-200"
                    >
                      <p className="text-blue-800">
                        <span className="font-bold">Explanation:</span> {quizQuestions[currentQuestionIndex].explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex justify-end gap-4">
                  {!isAnswerRevealed ? (
                    <motion.button
                      onClick={handleCheckAnswer}
                      disabled={selectedOption === null}
                      className={`px-8 py-3 rounded-lg font-medium ${
                        selectedOption === null 
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      whileHover={{ scale: selectedOption === null ? 1 : 1.03 }}
                      whileTap={{ scale: selectedOption === null ? 1 : 0.98 }}
                    >
                      Check Answer
                    </motion.button>
                  ) : (
                    <motion.button
                      onClick={handleNextQuestion}
                      className="px-8 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden text-center p-12"
            >
              <div className="mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-blue-600">{score}/{quizQuestions.length}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {score === quizQuestions.length 
                    ? 'Perfect Score!' 
                    : score >= quizQuestions.length / 2 
                      ? 'Great Job!' 
                      : 'Nice Try!'}
                </h3>
                <p className="text-gray-600 mb-8">
                  {score === quizQuestions.length 
                    ? 'You\'re a true Quezon City history expert!' 
                    : score >= quizQuestions.length / 2 
                      ? 'You know quite a bit about Quezon City\'s history!' 
                      : 'Keep exploring to learn more about Quezon City\'s fascinating history!'}
                </p>
              </div>
              
              <motion.button
                onClick={handleResetQuiz}
                className="px-8 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Try Again
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryQuiz; 