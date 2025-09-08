import React, { useState, useEffect } from 'react';
import { BookOpen, Video, FileText, Users, Calendar, Trophy, Search, Filter } from 'lucide-react';

export const StudentPage: React.FC = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchResources = async () => {
      setLoading(true);
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockResources = [
        {
          id: 1,
          title: 'Introduction to Computer Science',
          category: 'course',
          type: 'Video Course',
          duration: '8 weeks',
          level: 'Beginner',
          rating: 4.8,
          students: 12500,
          description: 'Learn fundamental programming concepts and problem-solving skills.',
          image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          id: 2,
          title: 'Study Techniques That Actually Work',
          category: 'article',
          type: 'Article',
          duration: '10 min read',
          level: 'All Levels',
          rating: 4.6,
          students: 8900,
          description: 'Evidence-based study methods to improve your academic performance.',
          image: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          id: 3,
          title: 'Mathematics for Everyone',
          category: 'course',
          type: 'Interactive Course',
          duration: '12 weeks',
          level: 'Intermediate',
          rating: 4.9,
          students: 15200,
          description: 'Master mathematical concepts through interactive problem-solving.',
          image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          id: 4,
          title: 'Time Management for Students',
          category: 'webinar',
          type: 'Live Webinar',
          duration: '1 hour',
          level: 'All Levels',
          rating: 4.7,
          students: 6800,
          description: 'Learn to balance studies, work, and personal life effectively.',
          image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          id: 5,
          title: 'Research Paper Writing Guide',
          category: 'guide',
          type: 'PDF Guide',
          duration: '45 pages',
          level: 'Intermediate',
          rating: 4.5,
          students: 9300,
          description: 'Complete guide to writing compelling research papers.',
          image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300'
        },
        {
          id: 6,
          title: 'Student Study Group',
          category: 'community',
          type: 'Study Group',
          duration: 'Ongoing',
          level: 'All Levels',
          rating: 4.4,
          students: 3200,
          description: 'Join fellow students for collaborative learning and support.',
          image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=300'
        }
      ];
      
      setResources(mockResources);
      setLoading(false);
    };

    fetchResources();
  }, []);

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'course', label: 'Courses', icon: Video },
    { id: 'article', label: 'Articles', icon: FileText },
    { id: 'webinar', label: 'Webinars', icon: Calendar },
    { id: 'guide', label: 'Guides', icon: Trophy },
    { id: 'community', label: 'Community', icon: Users },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const ResourceCard = ({ resource }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group overflow-hidden">
      <div className="relative">
        <img 
          src={resource.image} 
          alt={resource.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-purple-600 dark:text-purple-400">
          {resource.type}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {resource.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          {resource.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>⭐ {resource.rating}</span>
            <span>👥 {resource.students.toLocaleString()}</span>
            <span>⏱️ {resource.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            resource.level === 'Beginner' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
              : resource.level === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
              : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
          }`}>
            {resource.level}
          </span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Access Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student Resources Hub
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover a comprehensive collection of learning materials, study guides, and educational content designed to enhance your academic journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-label="Search resources"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                      }`}
                      aria-pressed={selectedCategory === category.id}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
                <div className="bg-gray-300 dark:bg-gray-600 h-48 rounded-lg mb-4"></div>
                <div className="bg-gray-300 dark:bg-gray-600 h-4 rounded mb-2"></div>
                <div className="bg-gray-300 dark:bg-gray-600 h-3 rounded mb-4"></div>
                <div className="bg-gray-300 dark:bg-gray-600 h-8 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {filteredResources.length} of {resources.length} resources
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No resources found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search terms or selecting a different category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};