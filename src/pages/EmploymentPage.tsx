import React, { useState, useEffect } from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  company_size: string;
  rating: number;
  logo: string;
};
import { MapPin, DollarSign, Building2, Clock, Users, TrendingUp, Search, Filter, Briefcase, Star } from 'lucide-react';

export const EmploymentPage: React.FC = () => {
  // ...existing code...
  // ...existing code...

  // ...existing code...

  // Get saved job objects (move to just before return)
  const [jobs, setJobs] = useState<Job[]>([]);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  // Toggle save job
  const handleSaveJob = (jobId: number) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockJobs = [
        {
          id: 1,
          title: 'Senior Frontend Developer',
          company: 'TechFlow Inc.',
          location: 'San Francisco, CA',
          type: 'Full-time',
          level: 'Senior',
          salary: '$120k - $160k',
          posted: '2 days ago',
          description: 'Lead the development of modern web applications using React, TypeScript, and GraphQL.',
          requirements: ['React.js', 'TypeScript', 'GraphQL', 'Node.js', '5+ years exp'],
          benefits: ['Health insurance', 'Stock options', 'Remote work', '401k'],
          company_size: '500-1000',
          rating: 4.7,
          logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          id: 2,
          title: 'Data Scientist',
          company: 'AI Innovations',
          location: 'New York, NY',
          type: 'Full-time',
          level: 'Mid-level',
          salary: '$90k - $130k',
          posted: '1 day ago',
          description: 'Build machine learning models and analyze complex datasets to drive business decisions.',
          requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics', '3+ years exp'],
          benefits: ['Health insurance', 'Flexible PTO', 'Learning budget', 'Gym membership'],
          company_size: '100-500',
          rating: 4.9,
          logo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          id: 3,
          title: 'Junior Software Engineer',
          company: 'StartupTech',
          location: 'Austin, TX',
          type: 'Full-time',
          level: 'Entry-level',
          salary: '$70k - $90k',
          posted: '3 days ago',
          description: 'Join our agile team to develop scalable web applications and learn from experienced developers.',
          requirements: ['JavaScript', 'React or Vue.js', 'Git', 'Computer Science degree'],
          benefits: ['Health insurance', 'Mentorship program', 'Stock options', 'Free lunch'],
          company_size: '10-50',
          rating: 4.5,
          logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          id: 4,
          title: 'Product Designer',
          company: 'Design Studio Pro',
          location: 'Los Angeles, CA',
          type: 'Full-time',
          level: 'Mid-level',
          salary: '$85k - $115k',
          posted: '1 week ago',
          description: 'Create user-centered designs for digital products and collaborate with cross-functional teams.',
          requirements: ['Figma', 'User Research', 'Prototyping', 'Design Systems', '3+ years exp'],
          benefits: ['Creative tools budget', 'Flexible hours', 'Remote work', 'Professional development'],
          company_size: '50-100',
          rating: 4.6,
          logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          id: 5,
          title: 'DevOps Engineer',
          company: 'CloudScale Solutions',
          location: 'Seattle, WA',
          type: 'Full-time',
          level: 'Senior',
          salary: '$130k - $170k',
          posted: '4 days ago',
          description: 'Design and maintain cloud infrastructure, implement CI/CD pipelines, and ensure system reliability.',
          requirements: ['AWS/Azure', 'Kubernetes', 'Docker', 'Terraform', '5+ years exp'],
          benefits: ['Stock options', 'Health insurance', '401k match', 'Conference budget'],
          company_size: '200-500',
          rating: 4.8,
          logo: 'https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=100'
        },
        {
          id: 6,
          title: 'Marketing Manager',
          company: 'BrandForward',
          location: 'Chicago, IL',
          type: 'Full-time',
          level: 'Mid-level',
          salary: '$75k - $100k',
          posted: '5 days ago',
          description: 'Lead digital marketing campaigns and drive brand awareness across multiple channels.',
          requirements: ['Digital Marketing', 'Google Ads', 'Analytics', 'Content Strategy', '4+ years exp'],
          benefits: ['Health insurance', 'Flexible PTO', 'Marketing tools access', 'Team events'],
          company_size: '100-200',
          rating: 4.4,
          logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100'
        }
      ];
      
      setJobs(mockJobs);
      setLoading(false);
    };

    fetchJobs();
  }, []);

  const levels = ['all', 'Entry-level', 'Mid-level', 'Senior'];
  const locations = ['all', 'Remote', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Los Angeles, CA', 'Seattle, WA', 'Chicago, IL'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || job.level === selectedLevel;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesLevel && matchesLocation;
  });

  const JobCard: React.FC<{ job: Job }> = ({ job }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img 
            src={job.logo} 
            alt={job.company}
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer">
              {job.title}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {job.company}
              </p>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-500 dark:text-gray-400">{job.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          job.level === 'Entry-level' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : job.level === 'Mid-level'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
            : 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
        }`}>
          {job.level}
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {job.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Clock className="w-4 h-4 mr-2" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <DollarSign className="w-4 h-4 mr-2" />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Users className="w-4 h-4 mr-2" />
          <span>{job.company_size} employees</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Requirements:</h4>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((requirement: string, index: number) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
            >
              {requirement}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Benefits:</h4>
        <div className="flex flex-wrap gap-2">
          {job.benefits.map((benefit: string, index: number) => (
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
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Posted {job.posted}
        </span>
        <div className="flex space-x-3">
          <button
            className={`border-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              savedJobs.includes(job.id)
                ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                : 'border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20'
            }`}
            onClick={() => handleSaveJob(job.id)}
          >
            {savedJobs.includes(job.id) ? 'Saved' : 'Save Job'}
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );

  const marketStats = [
    { icon: Briefcase, label: 'Job Openings', value: '25K+', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Avg Salary Growth', value: '12%', color: 'text-green-600' },
    { icon: Building2, label: 'Partner Companies', value: '500+', color: 'text-blue-600' },
    { icon: Users, label: 'Successful Placements', value: '15K+', color: 'text-orange-600' },
  ];

  const savedJobObjects = jobs.filter((job) => savedJobs.includes(job.id));
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Launch Your Career
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Find your dream job with top companies. Connect with employers who value your skills and are ready to invest in your future.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Market Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {marketStats.map((stat, index) => {
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

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                aria-label="Search jobs"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  aria-label="Filter by experience level"
                >
                  <option value="all">All Levels</option>
                  {levels.slice(1).map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

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
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredJobs.length} of {jobs.length} job opportunities
          </p>
        </div>

        {/* Saved Jobs Section */}
        {!loading && savedJobObjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">Saved Jobs</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {savedJobObjects.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}

        {/* Jobs Grid */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gray-300 dark:bg-gray-600 w-14 h-14 rounded-xl"></div>
                  <div className="flex-1">
                    <div className="bg-gray-300 dark:bg-gray-600 h-5 rounded mb-2"></div>
                    <div className="bg-gray-300 dark:bg-gray-600 h-4 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="bg-gray-300 dark:bg-gray-600 h-16 rounded mb-4"></div>
                <div className="bg-gray-300 dark:bg-gray-600 h-10 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}

        {!loading && filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No jobs found
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