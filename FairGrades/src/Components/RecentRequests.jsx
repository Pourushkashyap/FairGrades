import React from 'react';

const RecentRequests = () => {
  return (
    <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-200 mb-4">Recent Requests</h2>
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-start">
          <div>
            <h3 className="text-pink-400 font-semibold">CS101</h3>
            <p className="text-gray-400 text-sm">Introduction to Computer Science</p>
            <p className="text-gray-500 text-sm">Exam ID: EX-2023-001</p>
            <p className="text-gray-500 text-sm">Exam Date: March 15, 2023</p>
            <p className="text-gray-500 text-sm">Submitted on: March 20, 2023</p>
          </div>
          <span className="bg-yellow-500 text-gray-900 text-sm px-3 py-1 rounded-full">Under Review</span>
          <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Details</a>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-start">
          <div>
            <h3 className="text-pink-400 font-semibold">MATH204</h3>
            <p className="text-gray-400 text-sm">Advanced Calculus</p>
            <p className="text-gray-500 text-sm">Exam ID: EX-2023-002</p>
            <p className="text-gray-500 text-sm">Exam Date: March 18, 2023</p>
            <p className="text-gray-500 text-sm">Submitted on: March 22, 2023</p>
          </div>
          <span className="bg-yellow-300 text-gray-900 text-sm px-3 py-1 rounded-full">Pending</span>
          <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Details</a>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-start">
          <div>
            <h3 className="text-pink-400 font-semibold">PHY301</h3>
            <p className="text-gray-400 text-sm">Quantum Physics</p>
            <p className="text-gray-500 text-sm">Exam ID: EX-2023-003</p>
            <p className="text-gray-500 text-sm">Exam Date: March 10, 2023</p>
            <p className="text-gray-500 text-sm">Submitted on: March 15, 2023</p>
          </div>
          <span className="bg-green-500 text-gray-900 text-sm px-3 py-1 rounded-full">Approved</span>
          <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Details</a>
        </div>
      </div>
      <a href="#" className="text-pink-500 text-sm mt-4 inline-block">View All</a>
    </div>
  );
};

export default RecentRequests;