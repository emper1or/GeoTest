
import React, { useState, useCallback, useMemo } from 'react';
import { ALL_LOCATIONS, QUESTIONS_COUNT } from './constants';
import { QuizState, QuizMode, GeoLocation, UserAnswer } from './types';
import { shuffleArray } from './utils';
import MapComponent from './components/MapComponent';
import { CheckCircle, XCircle, Trophy, RefreshCcw, Play, Map as MapIcon, GraduationCap, ClipboardList, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>('START');
  const [quizMode, setQuizMode] = useState<QuizMode>('TEST');
  const [questions, setQuestions] = useState<GeoLocation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [lastAnswer, setLastAnswer] = useState<UserAnswer | null>(null);

  const startQuiz = (mode: QuizMode) => {
    setQuizMode(mode);
    let quizList: GeoLocation[];
    if (mode === 'TEST') {
      quizList = shuffleArray(ALL_LOCATIONS).slice(0, QUESTIONS_COUNT);
    } else {
      quizList = shuffleArray(ALL_LOCATIONS);
    }
    setQuestions(quizList);
    setCurrentIndex(0);
    setAnswers([]);
    setLastAnswer(null);
    setGameState('PLAYING');
  };

  const handleAnswer = useCallback((answer: UserAnswer) => {
    setLastAnswer(answer);
    setAnswers(prev => [...prev, answer]);
    setGameState('FEEDBACK');
  }, []);

  const nextQuestion = () => {
    if (quizMode === 'TEST') {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setLastAnswer(null);
        setGameState('PLAYING');
      } else {
        setGameState('FINISHED');
      }
    } else {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setQuestions(shuffleArray(ALL_LOCATIONS));
        setCurrentIndex(0);
      }
      setLastAnswer(null);
      setGameState('PLAYING');
    }
  };

  const score = answers.filter(a => a.isCorrect).length;
  const currentQuestion = questions[currentIndex];

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-50 font-sans overflow-hidden">
      {/* Header - More compact on mobile */}
      <header className="bg-white border-b border-gray-200 py-2 sm:py-3 px-4 sm:px-6 flex justify-between items-center shadow-sm z-50">
        <div className="flex items-center gap-1 sm:gap-2">
          <MapIcon className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          <h1 className="text-sm sm:text-xl font-bold text-gray-800 truncate max-w-[120px] sm:max-w-none">Гео Диктант</h1>
        </div>
        {(gameState === 'PLAYING' || gameState === 'FEEDBACK') ? (
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-sm font-medium">
            <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
              {quizMode === 'TEST' ? `${currentIndex + 1} / ${questions.length}` : 'Тренировка'}
            </span>
            <span className="bg-green-100 text-green-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
              Счет: {score}
            </span>
          </div>
        ) : null}
      </header>

      <main className="flex-1 overflow-hidden p-2 sm:p-4 relative flex flex-col">
        {gameState === 'START' && (
          <div className="flex-1 overflow-y-auto pb-8">
            <div className="max-w-4xl mx-auto mt-4 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border-t-4 border-blue-600 flex flex-col items-center">
                <ClipboardList className="text-blue-600 w-12 h-12 sm:w-16 sm:h-16 mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Экзамен</h2>
                <p className="text-sm sm:text-gray-500 mb-6 flex-1">
                  10 случайных вопросов. Названия объектов скрыты. Проверьте свою память.
                </p>
                <button
                  onClick={() => startQuiz('TEST')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg active:scale-95 text-sm sm:text-base"
                >
                  Начать экзамен
                </button>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border-t-4 border-emerald-500 flex flex-col items-center">
                <GraduationCap className="text-emerald-500 w-12 h-12 sm:w-16 sm:h-16 mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Тренировка</h2>
                <p className="text-sm sm:text-gray-500 mb-6 flex-1">
                  Бесконечный режим. Названия объектов видны. Учитесь без ограничений.
                </p>
                <button
                  onClick={() => startQuiz('TRAINING')}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg active:scale-95 text-sm sm:text-base"
                >
                  Режим обучения
                </button>
              </div>
            </div>
          </div>
        )}

        {(gameState === 'PLAYING' || gameState === 'FEEDBACK') && (
          <div className="flex flex-col h-full gap-2 sm:gap-4">
            {/* Top Question Card - Compact on mobile */}
            <div className={`p-3 sm:p-4 rounded-xl border-l-4 sm:border-l-8 shadow-sm transition-all ${gameState === 'FEEDBACK' ? (lastAnswer?.isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500') : 'bg-white border-blue-500'}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div className="flex-1">
                  <p className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">
                    {gameState === 'PLAYING' ? (quizMode === 'TEST' ? 'Где находится:' : 'Найдите:') : 'Результат:'}
                  </p>
                  <h3 className="text-sm sm:text-xl font-bold text-gray-800 leading-tight">
                    {currentQuestion.question}
                    {(quizMode === 'TRAINING' || gameState === 'FEEDBACK') && (
                      <span className="text-blue-600 block sm:inline sm:ml-2">— {currentQuestion.answer}</span>
                    )}
                  </h3>
                </div>

                {gameState === 'FEEDBACK' && (
                  <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <div className="flex items-center gap-1 sm:gap-2">
                      {lastAnswer?.isCorrect ? (
                        <div className="flex items-center gap-1 text-green-600 font-bold bg-green-100 px-2 py-1 rounded-lg text-xs sm:text-sm">
                          <CheckCircle className="w-4 h-4" /> <span className="hidden sm:inline">Верно!</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-red-600 font-bold bg-red-100 px-2 py-1 rounded-lg text-xs sm:text-sm">
                          <XCircle className="w-4 h-4" /> <span className="hidden sm:inline">Мимо</span>
                        </div>
                      )}
                      <span className="text-gray-400 text-[10px] italic">
                        {Math.round(lastAnswer?.distance || 0)}км
                      </span>
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="bg-gray-800 hover:bg-black text-white px-4 sm:px-6 py-2 rounded-lg font-bold transition-all shadow-md active:scale-95 text-xs sm:text-sm flex items-center gap-1"
                    >
                      {quizMode === 'TEST' && currentIndex === questions.length - 1 ? 'Финиш' : 'Дальше'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative min-h-0">
              <MapComponent 
                currentQuestion={currentQuestion}
                onAnswer={handleAnswer}
                lastAnswer={lastAnswer}
                isFeedbackMode={gameState === 'FEEDBACK'}
              />
            </div>
          </div>
        )}

        {gameState === 'FINISHED' && (
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-2xl mx-auto mt-4 sm:mt-8 bg-white p-6 sm:p-10 rounded-2xl shadow-xl text-center">
              <Trophy className="text-yellow-500 w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">Экзамен завершен!</h2>
              <div className="text-5xl sm:text-7xl font-black text-blue-600 my-4 sm:my-8">
                {score} <span className="text-gray-300">/</span> {questions.length}
              </div>
              <p className="text-sm sm:text-lg text-gray-500 mb-8 px-4">
                {score === questions.length ? 'Выдающийся результат! Вы — знаток географии!' : 
                 score > 7 ? 'Отлично! Вы хорошо ориентируетесь по карте.' : 
                 'Неплохо, но стоит еще немного попрактиковаться.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => setGameState('START')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-xl transition-all active:scale-95"
                >
                  В меню
                </button>
                <button
                  onClick={() => startQuiz('TEST')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  <RefreshCcw className="w-5 h-5" />
                  Пересдать
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
