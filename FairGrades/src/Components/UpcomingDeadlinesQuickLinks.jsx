import React from 'react';

const UpcomingDeadlinesQuickLinks = () => {
  return (
    <div className="lg:col-span-1 space-y-6">
      {/* Upcoming Deadlines Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-200 mb-4">Upcoming Deadlines</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <p className="text-gray-400 flex items-center">
              <span className="mr-2 text-base">📅</span> Physics Midterm Appeal
            </p>
            <p className="text-gray-500 text-sm">Deadline: April 12, 2023</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <p className="text-gray-400 flex items-center">
              <span className="mr-2 text-base">📅</span> Statistics Final Exam
            </p>
            <p className="text-gray-500 text-sm">Deadline: April 15, 2023</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <p className="text-gray-400 flex items-center">
              <span className="mr-2 text-base">📅</span> Database Systems
            </p>
            <p className="text-gray-500 text-sm">Deadline: April 20, 2023</p>
          </div>
          <a href="#" className="text-pink-500 text-sm flex items-center">
            <span className="mr-2 text-base">📅</span> View Calendar
          </a>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-200 mb-4">Quick Links</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <a href="#" className="text-pink-500 text-sm flex items-center">
              <span className="mr-2 text-base">❓</span> Re-evaluation Guidelines
            </a>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <a href="#" className="text-pink-500 text-sm flex items-center">
              <span className="mr-2 text-base">📊</span> View Statistics
            </a>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
            <a href="#" className="text-pink-500 text-sm flex items-center">
              <span className="mr-2 text-base">🔍</span> Track Request Status
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDeadlinesQuickLinks;