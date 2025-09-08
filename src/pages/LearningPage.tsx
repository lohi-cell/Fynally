import React, { useState, useEffect } from 'react';
import { Play, Clock, Star, BookOpen, AlignCenterVertical as Certificate, TrendingUp } from 'lucide-react';

export const LearningPage: React.FC = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockCourses = [
        {
          id: 1,
          title: 'Web Development Fundamentals',
          instructor: 'Sarah Johnson',
          rating: 4.9,
          students: 15420,
          duration: '40 hours',
          level: 'Beginner',
          price: 'Free',
          image: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=300',
          progress: 0,
          description: 'Master HTML, CSS, and JavaScript fundamentals to build modern websites.',
          modules: 12,
          certificate: true
        },
        {
          id: 2,
          title: 'Data Science with Python',
          instructor: 'Dr. Michael Chen',
          rating: 4.8,
          students: 12890,
          duration: '60 hours',
          level: 'Intermediate',
          price: '$49',
          image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300',
          progress: 25,
          description: 'Learn data analysis, visualization, and machine learning with Python.',
          modules: 18,
          certificate: true
        },
        {
          id: 3,
          title: 'Digital Marketing Strategy',
          instructor: 'Emma Rodriguez',
          rating: 4.7,
          students: 9650,
          duration: '25 hours',
          level: 'Beginner',
          price: '$29',
          image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300',
          progress: 0,
          description: 'Build comprehensive digital marketing campaigns across multiple channels.',
          modules: 10,
          certificate: true
        },
        {
          id: 4,
          title: 'UX/UI Design Principles',
          instructor: 'Alex Thompson',
          rating: 4.9,
          students: 18750,
          duration: '35 hours',
          level: 'Intermediate',
          price: '$39',
          image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
          progress: 60,
          description: 'Design user-centered interfaces that are both beautiful and functional.',
          modules: 14,
          certificate: true
        },
        {
          id: 5,
          title: 'Financial Planning & Analysis',
          instructor: 'Robert Kim',
          rating: 4.6,
          students: 7420,
          duration: '30 hours',
          level: 'Advanced',
          price: '$59',
          image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=300',
          progress: 0,
          description: 'Master financial modeling, budgeting, and strategic planning techniques.',
          modules: 16,
          certificate: true
        },
        {
          id: 6,
          title: 'Mobile App Development',
          instructor: 'Lisa Wang',
          rating: 4.8,
          students: 11200,
          duration: '50 hours',
          level: 'Intermediate',
          price: '$45',
          image: 'https://images.pexels.com/photos/3746938/pexels-photo-3746938.jpeg?auto=compress&cs=tinysrgb&w=300',
          progress: 80,
          description: 'Build cross-platform mobile applications using React Native.',
          modules: 20,
          certificate: true
        }
      ];
      
      setCourses(mockCourses);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  const CourseCard = ({ course }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group overflow-hidden">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.level}
        </div>
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-bold text-purple-600 dark:text-purple-400">
          {course.price}
        </div>
        
        {course.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
            <div className="flex items-center justify-between text-white text-sm mb-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
          by {course.instructor}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{course.rating}</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
            <span>{course.modules} modules</span>
            {course.certificate && (
              <div className="flex items-center">
                <Certificate className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-600 dark:text-green-400">Certificate</span>
              </div>
            )}
          </div>
        </div>
        
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group">
          <Play className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
          {course.progress > 0 ? 'Continue Learning' : 'Start Learning'}
        </button>
      </div>
    </div>
  );

  const stats = [
    { icon: BookOpen, label: 'Total Courses', value: '500+', color: 'text-purple-600' },
    { icon: Star, label: 'Average Rating', value: '4.8', color: 'text-yellow-500' },
    { icon: Certificate, label: 'Certificates Earned', value: '25K+', color: 'text-green-600' },
    { icon: TrendingUp, label: 'Completion Rate', value: '92%', color: 'text-blue-600' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Hub
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Expand your skills with expert-led courses, hands-on projects, and industry-recognized certifications. Your journey to mastery starts here.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Learning Paths */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Frontend Development', 'Data Science', 'Digital Marketing'].map((path, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white hover:shadow-xl transition-shadow cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">{path}</h3>
                <p className="text-white/80 mb-4">Complete pathway with 8-12 courses</p>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                  Start Path
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Popular Courses
            </h2>
            <button className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium">
              View All Courses →
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
                  <div className="bg-gray-300 dark:bg-gray-600 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-300 dark:bg-gray-600 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 dark:bg-gray-600 h-3 rounded mb-4"></div>
                  <div className="bg-gray-300 dark:bg-gray-600 h-10 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};