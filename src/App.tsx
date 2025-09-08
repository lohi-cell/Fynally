import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { StudentPage } from './pages/StudentPage';
import { LearningPage } from './pages/LearningPage';
import InternshipsPage from './pages/InternshipsPage';
import { EmploymentPage } from './pages/EmploymentPage';
import { DemoPage } from './pages/DemoPage';
import { GetStartedPage } from './pages/GetStartedPage';
import TakeAssessmentPage from './pages/TakeAssessmentPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/employment" element={<EmploymentPage />} />
            <Route path="/assessment" element={<TakeAssessmentPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;