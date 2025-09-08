import React, { useEffect, useState } from 'react';
import { GraduationCap, BookOpen, Briefcase, Trophy, ArrowRight } from 'lucide-react';

export const JourneyVisualization: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      icon: GraduationCap,
      title: 'Student',
      description: 'Build foundation knowledge and discover your interests',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-900/20',
    },
    {
      icon: BookOpen,
      title: 'Learner',
      description: 'Develop skills through courses and certifications',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      icon: Briefcase,
      title: 'Intern',
      description: 'Gain practical experience in real work environments',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-900/20',
    },
    {
      icon: Trophy,
      title: 'Employee',
      description: 'Launch your career and achieve professional growth',
      color: 'text-orange-600 dark:text-orange-400',
      bg: 'bg-orange-100 dark:bg-orange-900/20',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Your Journey to Success
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Fynally guides you through every stage of your career development, from student to professional
        </p>
      </div>

      <div className="relative">
        {/* Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = index === activeStage;
            const isPassed = index < activeStage;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isActive ? 'scale-110' : ''
                }`}
                onClick={() => setActiveStage(index)}
                role="button"
                tabIndex={0}
                aria-label={`Stage ${index + 1}: ${stage.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveStage(index);
                  }
                }}
              >
                {/* Card */}
                <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  isActive 
                    ? 'border-purple-600 dark:border-purple-400 shadow-purple-200 dark:shadow-purple-900/50' 
                    : isPassed
                    ? 'border-emerald-600 dark:border-emerald-400'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                }`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full ${stage.bg} flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    isActive ? 'animate-pulse' : ''
                  }`}>
                    <Icon className={`w-8 h-8 ${stage.color} transition-all duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage Number */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-purple-600 dark:bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {stages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStage 
                  ? 'bg-purple-600 dark:bg-purple-400 scale-125' 
                  : index < activeStage
                  ? 'bg-emerald-600 dark:bg-emerald-400'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-300 dark:hover:bg-purple-600'
              }`}
              aria-label={`Go to stage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};