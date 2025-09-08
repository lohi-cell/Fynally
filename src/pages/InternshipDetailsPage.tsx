import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const InternshipDetailsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const internship = location.state?.internship;

  if (!internship) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">No internship details found.</p>
        <button className="ml-4 px-4 py-2 bg-purple-600 text-white rounded" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">{internship.title}</h1>
        <h2 className="text-xl font-semibold mb-2">{internship.company}</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{internship.location} | {internship.type} | {internship.duration}</p>
        <p className="mb-6 text-gray-700 dark:text-gray-200">{internship.description}</p>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Requirements:</h3>
          <ul className="list-disc ml-6">
            {internship.requirements.map((req: string, idx: number) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Benefits:</h3>
          <ul className="list-disc ml-6">
            {internship.benefits.map((ben: string, idx: number) => (
              <li key={idx}>{ben}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <span className="font-semibold">Salary:</span> {internship.salary}
        </div>
        <button
          className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          onClick={() => alert("Application submitted!")}
        >
          Apply for Internship
        </button>
      </div>
    </div>
  );
};

export default InternshipDetailsPage;
