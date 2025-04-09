import React from 'react';

const UpcomingDeadlinesQuickLinks = () => {
  return (
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-200 mb-4">Upcoming Deadlines</h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400">Physics Midterm Appeal</p>
            <p className="text-gray-500 text-sm">Deadline: April 12, 2023</p>
          </div>
          <div>
            <p className="text-gray-400">Statistics Final Exam</p>
            <p className="text-gray-500 text-sm">Deadline: April 15, 2023</p>
          </div>
          <div>
            <p className="text-gray-400">Database Systems</p>
            <p className="text-gray-500 text-sm">Deadline: April 20, 2023</p>
          </div>
          <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Calendar</a>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-200 mb-4">Quick Links</h2>
        <div className="space-y-2">
          <a href="#" className="text-pink-500 text-sm flex items-center">
            <span className="mr-2">📋</span> Evaluation Guidelines
          </a>
          <a href="#" className="text-pink-500 text-sm flex items-center">
            <span className="mr-2">📊</span> View Statistics
          </a>
          <a href="#" className="text-pink-500 text-sm flex items-center">
            <span className="mr-2">🔍</span> Track Request Status
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDeadlinesQuickLinks;