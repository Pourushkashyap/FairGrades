import React from 'react';

const RecentRequests = () => {
  return (
    <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-200">Recent Requests</h2>
        <a href="#" className="text-pink-500 text-sm">View All</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* CS101 Card */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col justify-between border border-gray-600">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-pink-400 font-semibold text-lg">CS101</h3>
                <p className="text-gray-400 text-sm">Introduction to Computer Science</p>
              </div>
              <span className="bg-yellow-500 text-gray-900 text-sm px-2 py-1 rounded-full">Under Review</span>
            </div>
            <div className="space-y-2 text-gray-500 text-sm mt-2">
              <p className="flex items-center"><span className="mr-2 text-base">📄</span> Exam ID: EX-2023-001</p>
              <p className="flex items-center"><span className="mr-2 text-base">📅</span> Exam Date: March 15, 2023</p>
              <p className="flex items-center"><span className="mr-2 text-base">📥</span> Submitted on: March 20, 2023</p>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="text-pink-500 text-sm flex items-center">View Details <span className="ml-1">➜</span></a>
          </div>
        </div>

        {/* MATH204 Card */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col justify-between border border-gray-600">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-pink-400 font-semibold text-lg">MATH204</h3>
                <p className="text-gray-400 text-sm">Advanced Calculus</p>
              </div>
              <span className="bg-yellow-300 text-gray-900 text-sm px-2 py-1 rounded-full">Pending</span>
            </div>
            <div className="space-y-2 text-gray-500 text-sm mt-2">
              <p className="flex items-center"><span className="mr-2 text-base">📄</span> Exam ID: EX-2023-002</p>
              <p className="flex items-center"><span className="mr-2 text-base">📅</span> Exam Date: March 18, 2023</p>
              <p className="flex items-center"><span className="mr-2 text-base">📥</span> Submitted on: March 22, 2023</p>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="text-pink-500 text-sm flex items-center">View Details <span className="ml-1">➜</span></a>
          </div>
        </div>

        {/* PHY301 Card */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md flex flex-col justify-between border border-gray-600">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-pink-400 font-semibold text-lg">PHY301</h3>
                <p className="text-gray-400 text-sm">Quantum Physics</p>
              </div>
              <span className="bg-green-500 text-gray-900 text-sm px-2 py-1 rounded-full">Approved</span>
            </div>
            <div className="space-y-2 text-gray-500 text-sm mt-2">
              <p className="flex items-center"><span className="mr-2 text-base">📄</span> Exam ID: EX-2023-003</p>
              <p className="flex items-center"><span className="mr-2 text-base">📅</span> Exam Date: March 10, 2023</p>
              <p className="flex items-center"><span className="mr-2 text-base">📥</span> Submitted on: March 15, 2023</p>
            </div>
          </div>
          <div className="mt-4">
            <a href="#" className="text-pink-500 text-sm flex items-center">View Details <span className="ml-1">➜</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRequests;

