import React from 'react';

const HistoryCurrent = () => {
  const currentRequest = {
    id: 'EX-2023-003',
    course: 'PHY301',
    name: 'Quantum Physics',
    date: 'March 10, 2023',
    submitted: 'March 15, 2023',
    status: 'Approved',
    notes: 'Re-evaluation completed with no changes.',
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Current Request Details</h2>
      <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-pink-400 font-semibold text-lg">{currentRequest.course}</h3>
              <p className="text-gray-400 text-sm">{currentRequest.name}</p>
            </div>
            <span className="bg-green-500 text-gray-900 text-sm px-2 py-1 rounded-full">
              {currentRequest.status}
            </span>
          </div>
          <div className="space-y-2 text-gray-500 text-sm mt-2">
            <p className="flex items-center"><span className="mr-2 text-base">📄</span> Exam ID: {currentRequest.id}</p>
            <p className="flex items-center"><span className="mr-2 text-base">📅</span> Exam Date: {currentRequest.date}</p>
            <p className="flex items-center"><span className="mr-2 text-base">📥</span> Submitted on: {currentRequest.submitted}</p>
            <p className="flex items-center"><span className="mr-2 text-base">📝</span> Notes: {currentRequest.notes}</p>
          </div>
        </div>
        <div className="mt-4">
          <a href="#" className="text-pink-500 text-sm flex items-center">View Full Details <span className="ml-1">➜</span></a>
        </div>
      </div>
    </div>
  );
};

export default HistoryCurrent;