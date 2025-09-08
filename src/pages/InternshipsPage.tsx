import React, { useState, useEffect } from 'react';
import { MapPin, Clock, DollarSign, Building2, Calendar, Filter, Search, Bookmark, Briefcase } from 'lucide-react';

type Internship = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  logo: string;
  saved: boolean;
};

const InternshipsPage: React.FC = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchInternships = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockInternships = [
        {
          id: 1,
          title: 'Frontend Developer Intern',
          company: 'TechCorp Solutions',
          location: 'San Francisco, CA',
          type: 'Remote',
          duration: '3 months',
          salary: '$2,500/month',
          posted: '2 days ago',
          description: 'Join our dynamic team to build modern web applications using React and TypeScript.',
          requirements: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
          benefits: ['Mentorship', 'Learning stipend', 'Flexible hours'],
          logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100',
          saved: false
        },
        {
          id: 2,
          title: 'Data Science Intern',
          company: 'DataFlow Analytics',
          location: 'New York, NY',
          type: 'Hybrid',
          duration: '4 months',
          salary: '$3,000/month',
          posted: '1 week ago',
          description: 'Work with machine learning models and analyze large datasets to drive business insights.',
          requirements: ['Python', 'SQL', 'Machine Learning', 'Statistics'],
          benefits: ['Health insurance', 'Gym membership', 'Full-time offer potential'],
          logo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100',
          saved: true
        },
        {
          id: 3,
          title: 'Marketing Intern',
          company: 'BrandMax Agency',
          location: 'Los Angeles, CA',
          type: 'On-site',
          duration: '6 months',
          salary: '$2,000/month',
          posted: '3 days ago',
          description: 'Support digital marketing campaigns and content creation for leading consumer brands.',
          requirements: ['Social Media', 'Content Writing', 'Adobe Creative Suite', 'Analytics'],
          benefits: ['Creative freedom', 'Industry connections', 'Certificate program'],
          logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100',
          saved: false
        },
        {
          id: 4,
          title: 'UX Design Intern',
          company: 'DesignLab Studio',
          location: 'Austin, TX',
          type: 'Remote',
          duration: '3 months',
          salary: '$2,200/month',
          posted: '5 days ago',
          description: 'Create user-centered designs and conduct usability research for mobile applications.',
          requirements: ['Figma', 'User Research', 'Prototyping', 'Design Thinking'],
          benefits: ['Design tools access', 'Portfolio development', 'Team collaboration'],
          logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100',
          saved: false
        },
        {
          id: 5,
          title: 'Software Engineering Intern',
          company: 'CloudTech Inc.',
          location: 'Seattle, WA',
          type: 'On-site',
          duration: '4 months',
          salary: '$3,500/month',
          posted: '1 day ago',
          description: 'Develop scalable cloud infrastructure and work with distributed systems.',
          requirements: ['Java', 'Cloud platforms', 'Microservices', 'DevOps'],
          benefits: ['Relocation assistance', 'Stock options', 'Mentorship program'],
          logo: 'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=100',
          saved: true
        },
        {
          id: 6,
          title: 'Finance Intern',
          company: 'Capital Investments',
          location: 'Chicago, IL',
          type: 'Hybrid',
          duration: '5 months',
          salary: '$2,800/month',
          posted: '1 week ago',
          description: 'Assist with financial analysis, modeling, and investment research projects.',
          requirements: ['Excel', 'Financial modeling', 'Bloomberg Terminal', 'Analysis'],
          benefits: ['CFA support', 'Networking events', 'Return offer potential'],
          logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100',
          saved: false
        }
      ];
      
      setInternships(mockInternships);
      setLoading(false);
    };

    fetchInternships();
  }, []);

  const locations = ['all', 'Remote', 'San Francisco, CA', 'New York, NY', 'Los Angeles, CA', 'Austin, TX', 'Seattle, WA', 'Chicago, IL'];
  const types = ['all', 'Remote', 'On-site', 'Hybrid'];

  const filteredInternships = internships.filter((internship: Internship) => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || internship.location === selectedLocation || internship.type === selectedLocation;
    const matchesType = selectedType === 'all' || internship.type === selectedType;
    return matchesSearch && matchesLocation && matchesType;
  });

  const InternshipCard: React.FC<{ internship: Internship }> = ({ internship }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img 
            src={internship.logo} 
            alt={internship.company}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
              {internship.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              {internship.company}
            </p>
          </div>
        </div>
        <button 
          className={`p-2 rounded-lg transition-colors ${
            internship.saved 
              ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400'
          }`}
          aria-label={internship.saved ? 'Remove from saved' : 'Save internship'}
        >
          <Bookmark className={`w-5 h-5 ${internship.saved ? 'fill-current' : ''}`} />
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {internship.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Building2 className="w-4 h-4 mr-2" />
          <span>{internship.type}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          <span>{internship.duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>{internship.salary}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Required Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {internship.requirements.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Benefits:</h4>
        <div className="flex flex-wrap gap-2">
          {internship.benefits.map((benefit, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-1" />
          <span>Posted {internship.posted}</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Internship
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover opportunities to gain real-world experience, build your network, and kickstart your career with top companies.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search internships, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-label="Search internships"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-label="Filter by location"
                >
                  <option value="all">All Locations</option>
                  {locations.slice(1).map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-label="Filter by work type"
              >
                <option value="all">All Types</option>
                {types.slice(1).map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredInternships.length} of {internships.length} internships
          </p>
        </div>

        {/* Internships Grid */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gray-300 dark:bg-gray-600 w-12 h-12 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="bg-gray-300 dark:bg-gray-600 h-4 rounded mb-2"></div>
                    <div className="bg-gray-300 dark:bg-gray-600 h-3 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="bg-gray-300 dark:bg-gray-600 h-16 rounded mb-4"></div>
                <div className="bg-gray-300 dark:bg-gray-600 h-10 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        )}

        {!loading && filteredInternships.length === 0 && (
          <div className="text-center py-16">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No internships found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters to find more opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipsPage;