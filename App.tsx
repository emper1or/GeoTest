
import React, { useState, useCallback } from 'react';
import { ALL_LOCATIONS, QUESTIONS_PER_TEST, CATEGORY_LABELS, EXAM_MAPS } from './constants';
import { QuizState, QuizMode, GeoLocation, UserAnswer, GeoCategory, ExamMap } from './types';
import { shuffleArray } from './utils';
import MapComponent from './components/MapComponent';
import { CheckCircle, XCircle, Trophy, Map as MapIcon, GraduationCap, ClipboardList, ChevronRight, Layers, ArrowLeft, BookOpen, Star } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>('START');
  const [quizMode, setQuizMode] = useState<QuizMode>('TEST');
  const [questions, setQuestions] = useState<GeoLocation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [lastAnswer, setLastAnswer] = useState<UserAnswer | null>(null);
  const [activeExam, setActiveExam] = useState<ExamMap | null>(null);

  const startExam = (exam: ExamMap) => {
    setQuizMode('TEST');
    setActiveExam(exam);
    const pool = ALL_LOCATIONS.filter(l => l.block === exam.id);
    const selected = shuffleArray(pool).slice(0, QUESTIONS_PER_TEST);
    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers([]);
    setLastAnswer(null);
    setGameState('PLAYING');
  };

  const startTraining = (category: GeoCategory | 'ALL', blockId?: 1 | 2) => {
    setQuizMode('TRAINING');
    setActiveExam(null);
    let pool = ALL_LOCATIONS;
    if (blockId) pool = pool.filter(l => l.block === blockId);
    if (category !== 'ALL') pool = pool.filter(l => l.category === category);
    
    setQuestions(shuffleArray(pool));
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
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setLastAnswer(null);
      setGameState('PLAYING');
    } else {
      if (quizMode === 'TEST') {
        setGameState('FINISHED');
      } else {
        setQuestions(shuffleArray(questions));
        setCurrentIndex(0);
        setLastAnswer(null);
        setGameState('PLAYING');
      }
    }
  };

  const score = answers.filter(a => a.isCorrect).length;
  const currentQuestion = questions[currentIndex];

  const calculateGrade = (s: number, total: number) => {
    const ratio = s / total;
    if (ratio >= 0.9) return { mark: '5', label: 'Отлично', color: 'text-green-600' };
    if (ratio >= 0.75) return { mark: '4', label: 'Хорошо', color: 'text-blue-600' };
    if (ratio >= 0.5) return { mark: '3', label: 'Удовлетворительно', color: 'text-yellow-600' };
    return { mark: '2', label: 'Неудача', color: 'text-red-600' };
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-50 font-sans overflow-hidden">
      <header className="bg-white border-b border-gray-200 py-2 sm:py-3 px-4 sm:px-6 flex justify-between items-center shadow-sm z-50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setGameState('START')}>
          <MapIcon className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
          <h1 className="text-sm sm:text-xl font-bold text-gray-800">Гео Диктант</h1>
        </div>
        {(gameState === 'PLAYING' || gameState === 'FEEDBACK') ? (
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden md:block text-xs text-gray-400 font-medium italic">
              {activeExam ? activeExam.title : 'Режим тренировки'}
            </span>
            <div className="flex items-center gap-2 text-[10px] sm:text-sm font-bold">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">
                {currentIndex + 1} / {questions.length}
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                {score} ✅
              </span>
            </div>
          </div>
        ) : null}
      </header>

      <main className="flex-1 overflow-hidden p-2 sm:p-4 relative flex flex-col">
        {gameState === 'START' && (
          <div className="flex-1 overflow-y-auto pb-10">
            <div className="max-w-4xl mx-auto space-y-8 mt-6">
              <div className="text-center">
                <h2 className="text-3xl font-black text-gray-900 leading-tight">Цифровая проверка карты</h2>
                <p className="text-gray-500 mt-3 text-lg">Выберите формат работы для ваших учеников</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button 
                  onClick={() => setGameState('EXAM_SELECT')}
                  className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-red-500 hover:shadow-xl transition-all text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <ClipboardList className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Принять зачет</h3>
                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                    Контрольная работа по одному из двух изолированных блоков. С оценкой и фиксированным числом вопросов.
                  </p>
                </button>

                <button 
                  onClick={() => setGameState('TRAINING_SELECT')}
                  className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <BookOpen className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Тренировка</h3>
                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                    Свободное изучение карты. Подсказки с ответами и визуализация русла рек для лучшего запоминания.
                  </p>
                </button>
              </div>

              <div className="bg-amber-50 border border-amber-100 p-6 rounded-3xl flex gap-5 items-start">
                <GraduationCap className="w-10 h-10 text-amber-600 shrink-0" />
                <div className="text-amber-800">
                  <h4 className="font-bold text-lg">Совет учителю</h4>
                  <p className="text-sm leading-relaxed mt-1 opacity-90">
                    Первый и второй блоки — это разные наборы данных. Вы можете поставить одну оценку за знание объектов, а вторую — за знание рекордов и крайних точек. Они не перемешиваются.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {gameState === 'EXAM_SELECT' && (
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <button onClick={() => setGameState('START')} className="mb-6 flex items-center gap-2 text-gray-400 hover:text-gray-800 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Назад
              </button>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Какой зачет принимаем?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {EXAM_MAPS.map(exam => (
                  <div 
                    key={exam.id}
                    onClick={() => startExam(exam)}
                    className={`bg-white p-8 rounded-3xl shadow-sm border-l-8 cursor-pointer transition-all hover:shadow-xl hover:translate-y-[-4px] active:scale-95 ${exam.id === 1 ? 'border-blue-500' : 'border-emerald-500'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <Star className={`w-8 h-8 ${exam.id === 1 ? 'text-blue-500' : 'text-emerald-500'}`} />
                      <span className="text-[10px] bg-gray-50 text-gray-400 px-2 py-1 rounded-full font-bold uppercase tracking-widest">Exam {exam.id}</span>
                    </div>
                    <h3 className="text-xl font-black text-gray-800 mb-2">{exam.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{exam.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {gameState === 'TRAINING_SELECT' && (
          <div className="flex-1 overflow-y-auto pb-10">
            <div className="max-w-5xl mx-auto">
              <button onClick={() => setGameState('START')} className="mb-6 flex items-center gap-2 text-gray-400 hover:text-gray-800 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Назад
              </button>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Тематические разделы:</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <button onClick={() => startTraining('ALL')} className="col-span-full bg-blue-600 text-white p-4 rounded-2xl font-bold shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all">
                  🔥 Все объекты сразу
                </button>
                {(Object.entries(CATEGORY_LABELS) as [GeoCategory, { label: string, icon: string }][]).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => startTraining(key)}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-500 transition-all flex flex-col items-center gap-3 active:scale-95"
                  >
                    <span className="text-4xl">{data.icon}</span>
                    <span className="text-sm font-bold text-gray-700">{data.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {(gameState === 'PLAYING' || gameState === 'FEEDBACK') && (
          <div className="flex flex-col h-full gap-4">
            <div className={`p-5 rounded-3xl border-l-8 shadow-sm transition-all ${gameState === 'FEEDBACK' ? (lastAnswer?.isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500') : 'bg-white border-blue-500'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-400 font-bold uppercase tracking-wider">
                      {CATEGORY_LABELS[currentQuestion.category].label}
                    </span>
                    {currentQuestion.block === 2 && <span className="text-[10px] bg-amber-100 px-2 py-0.5 rounded text-amber-600 font-bold uppercase tracking-wider">Рекорд</span>}
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-gray-800 leading-tight">
                    {currentQuestion.question}
                    {(quizMode === 'TRAINING' || gameState === 'FEEDBACK') && (
                      <span className="text-blue-600 block md:inline md:ml-4 opacity-80">— {currentQuestion.answer}</span>
                    )}
                  </h3>
                </div>

                {gameState === 'FEEDBACK' && (
                  <div className="flex items-center justify-between md:justify-end gap-5 border-t md:border-t-0 pt-4 md:pt-0">
                    <div className="flex flex-col items-end">
                      <div className={`flex items-center gap-2 font-black text-lg ${lastAnswer?.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {lastAnswer?.isCorrect ? <CheckCircle /> : <XCircle />}
                        {lastAnswer?.isCorrect ? 'Верно' : 'Промах'}
                      </div>
                      <span className="text-gray-400 text-xs font-mono">{Math.round(lastAnswer?.distance || 0)} км от цели</span>
                    </div>
                    <button
                      onClick={nextQuestion}
                      className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-xl active:scale-95 text-sm flex items-center gap-2"
                    >
                      Далее <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 min-h-0">
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
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl text-center relative overflow-hidden border border-gray-100">
              <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${activeExam?.id === 1 ? 'from-blue-500 to-indigo-500' : 'from-emerald-500 to-teal-500'}`}></div>
              <Trophy className="text-yellow-400 w-24 h-24 mx-auto mb-8 drop-shadow-xl" />
              
              <h2 className="text-4xl font-black text-gray-900 mb-2">Зачет завершен!</h2>
              <p className="text-gray-500 font-medium text-lg mb-10">{activeExam?.title}</p>
              
              <div className="flex items-center justify-center gap-12 mb-12">
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-bold uppercase mb-2">Правильных</p>
                  <p className="text-5xl font-black text-gray-800">{score} <span className="text-gray-300">/</span> {questions.length}</p>
                </div>
                <div className="w-px h-16 bg-gray-100"></div>
                <div className="text-center">
                  <p className="text-gray-400 text-xs font-bold uppercase mb-2">Оценка</p>
                  <div className={`text-7xl font-black ${calculateGrade(score, questions.length).color}`}>
                    {calculateGrade(score, questions.length).mark}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setGameState('EXAM_SELECT')}
                  className="bg-gray-900 hover:bg-black text-white font-bold py-5 px-10 rounded-3xl transition-all shadow-xl active:scale-95 flex-1"
                >
                  Другой зачет
                </button>
                <button
                  onClick={() => setGameState('START')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-5 px-10 rounded-3xl transition-all active:scale-95 flex-1"
                >
                  Главное меню
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
