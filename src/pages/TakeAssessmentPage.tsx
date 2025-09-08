
import React, { useState } from 'react';

const DOMAIN_QUESTIONS: Record<string, { question: string; options: string[]; answer: number }[]> = {
  web: [
    { question: 'What does HTML stand for?', options: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'High Text Markup Language', 'None'], answer: 1 },
    { question: 'Which CSS property changes text color?', options: ['font-style', 'color', 'background', 'text-align'], answer: 1 },
  ],
  mobile: [
    { question: 'Which language is used for Android development?', options: ['Swift', 'Kotlin', 'JavaScript', 'Ruby'], answer: 1 },
    { question: 'iOS apps are primarily written in?', options: ['Java', 'Swift', 'C#', 'Go'], answer: 1 },
  ],
  data: [
    { question: 'Which library is popular for data analysis in Python?', options: ['React', 'Pandas', 'Spring', 'TensorFlow'], answer: 1 },
    { question: 'What is a DataFrame?', options: ['A type of database', 'A table-like data structure', 'A chart', 'A web page'], answer: 1 },
  ],
  cloud: [
    { question: 'AWS stands for?', options: ['Amazon Web Services', 'Advanced Web Solutions', 'Azure Web Services', 'None'], answer: 0 },
    { question: 'Which is NOT a cloud provider?', options: ['Google Cloud', 'Azure', 'Heroku', 'MySQL'], answer: 3 },
  ],
  ai: [
    { question: 'What is Machine Learning?', options: ['Manual programming', 'Learning from data', 'Learning from books', 'None'], answer: 1 },
    { question: 'Which is a popular AI framework?', options: ['TensorFlow', 'React', 'Vue', 'Django'], answer: 0 },
  ],
  cyber: [
    { question: 'What does VPN stand for?', options: ['Virtual Private Network', 'Very Personal Network', 'Verified Public Network', 'None'], answer: 0 },
    { question: 'Which is a common cyber attack?', options: ['Phishing', 'Fishing', 'Wishing', 'None'], answer: 0 },
  ],
  devops: [
    { question: 'What does CI/CD stand for?', options: ['Continuous Integration/Continuous Deployment', 'Code Inspection/Code Debugging', 'Cloud Integration/Cloud Development', 'None'], answer: 0 },
    { question: 'Which tool is used for containerization?', options: ['Docker', 'Jenkins', 'Git', 'Node'], answer: 0 },
  ],
};

const DOMAIN_LABELS: Record<string, string> = {
  web: 'Web Development',
  mobile: 'Mobile Development',
  data: 'Data Science',
  cloud: 'Cloud Computing',
  ai: 'Artificial Intelligence',
  cyber: 'Cybersecurity',
  devops: 'DevOps',
};

const TakeAssessmentPage: React.FC = () => {
  const [step, setStep] = useState<'select' | 'questions' | 'results'>('select');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [scores, setScores] = useState<Record<string, number>>({});

  // Handle domain selection
  const handleDomainChange = (domain: string, checked: boolean) => {
    setSelectedDomains((prev) =>
      checked ? [...prev, domain] : prev.filter((d) => d !== domain)
    );
  };

  // Start assessment
  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDomains.length > 0) {
      setStep('questions');
    }
  };

  // Handle answer change
  const handleAnswerChange = (domain: string, qIdx: number, optIdx: number) => {
    setAnswers((prev) => {
      const domainAnswers = prev[domain] ? [...prev[domain]] : Array(DOMAIN_QUESTIONS[domain].length).fill(-1);
      domainAnswers[qIdx] = optIdx;
      return { ...prev, [domain]: domainAnswers };
    });
  };

  // Submit answers and calculate scores
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newScores: Record<string, number> = {};
    selectedDomains.forEach((domain) => {
      const domainQuestions = DOMAIN_QUESTIONS[domain];
      const domainAnswers = answers[domain] || [];
      let score = 0;
      domainQuestions.forEach((q, idx) => {
        if (domainAnswers[idx] === q.answer) score += 1;
      });
      newScores[domain] = score;
    });
    setScores(newScores);
    setStep('results');
  };

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 mt-24">
      <h1 className="text-3xl font-bold mb-4">Take Assessment</h1>
      <p className="mb-6 text-lg max-w-xl text-center">
        Not sure which path to choose? Take our quick assessment to discover which journey fits you best!
      </p>

      {step === 'select' && (
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Choose Technologies You're Interested In:</h2>
          <form className="space-y-4" onSubmit={handleStart}>
            <div className="flex flex-wrap gap-4">
              {Object.keys(DOMAIN_LABELS).map((domain) => (
                <label key={domain} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDomains.includes(domain)}
                    onChange={(e) => handleDomainChange(domain, e.target.checked)}
                    className="form-checkbox"
                  />
                  <span>{DOMAIN_LABELS[domain]}</span>
                </label>
              ))}
            </div>
            <button type="submit" className="mt-6 w-full px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors font-semibold">
              Start Assessment
            </button>
          </form>
        </div>
      )}

      {step === 'questions' && (
        <form className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Answer the following questions:</h2>
          {selectedDomains.map((domain) => (
            <div key={domain} className="mb-8">
              <h3 className="text-lg font-bold mb-2 text-emerald-600 dark:text-emerald-400">{DOMAIN_LABELS[domain]}</h3>
              {DOMAIN_QUESTIONS[domain].map((q, qIdx) => (
                <div key={qIdx} className="mb-4">
                  <div className="mb-2 font-medium">{q.question}</div>
                  <div className="flex flex-col gap-2">
                    {q.options.map((opt, optIdx) => (
                      <label key={optIdx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`${domain}-q${qIdx}`}
                          checked={answers[domain]?.[qIdx] === optIdx}
                          onChange={() => handleAnswerChange(domain, qIdx, optIdx)}
                          className="form-radio"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <button type="submit" className="mt-6 w-full px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors font-semibold">
            Submit Answers
          </button>
        </form>
      )}

      {step === 'results' && (
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Your Assessment Results</h2>
          <ul className="space-y-4">
            {selectedDomains.map((domain) => (
              <li key={domain} className="flex justify-between items-center">
                <span className="font-medium">{DOMAIN_LABELS[domain]}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{scores[domain]} / {DOMAIN_QUESTIONS[domain].length}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-8 w-full px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors font-semibold"
            onClick={() => {
              setStep('select');
              setSelectedDomains([]);
              setAnswers({});
              setScores({});
            }}
          >
            Retake Assessment
          </button>
        </div>
      )}
    </div>
  );
};

export default TakeAssessmentPage;
