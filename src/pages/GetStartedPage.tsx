import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Briefcase, Trophy, ArrowRight } from 'lucide-react';

export const GetStartedPage: React.FC = () => {
  const pathways = [
    {
      icon: GraduationCap,
      title: 'Student',
      description: 'Build foundation knowledge and discover your interests',
      path: '/student',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      features: ['Study Resources', 'Academic Tools', 'Career Exploration', 'Skill Assessment']
    },
    {
      icon: BookOpen,
      title: 'Learner',
      description: 'Develop skills through courses and certifications',
      path: '/learning',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      features: ['Online Courses', 'Certifications', 'Skill Development', 'Progress Tracking']
    },
    {
      icon: Briefcase,
      title: 'Intern',
      description: 'Gain practical experience in real work environments',
      path: '/internships',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
      features: ['Internship Opportunities', 'Application Support', 'Interview Prep', 'Networking']
    },
    {
      icon: Trophy,
      title: 'Employee',
      description: 'Launch your career and achieve professional growth',
      path: '/employment',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      features: ['Job Opportunities', 'Career Advancement', 'Professional Network', 'Salary Insights']
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Path
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Select the stage that best describes your current situation. We'll provide personalized resources and guidance to help you succeed.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <Link
                key={index}
                to={pathway.path}
                className="group block"
              >
                <div className={`bg-gradient-to-br ${pathway.color} ${pathway.hoverColor} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mr-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{pathway.title}</h3>
                      <p className="text-white/90 text-lg">{pathway.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pathway.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Click to explore</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Not sure which path to choose?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Take our quick assessment to discover the best starting point for your journey, or schedule a demo to learn more about our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/assessment"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Take Assessment
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};