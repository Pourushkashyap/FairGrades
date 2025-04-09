import React from 'react';

const HistoryPending = () => {
  const pendingRequests = [
    { id: 'EX-2023-001', course: 'CS101', name: 'Introduction to Computer Science', date: 'March 15, 2023', submitted: 'March 20, 2023', status: 'Under Review' },
    { id: 'EX-2023-002', course: 'MATH204', name: 'Advanced Calculus', date: 'March 18, 2023', submitted: 'March 22, 2023', status: 'Pending' },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Pending Requests</h2>
      <div className="space-y-4">
        {pendingRequests.map((request) => (
          <div key={request.id} className="bg-gray-700 p-4 rounded-lg border border-gray-600 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-pink-400 font-semibold text-lg">{request.course}</h3>
                  <p className="text-gray-400 text-sm">{request.name}</p>
                </div>
                <span className={`${request.status === 'Under Review' ? 'bg-yellow-500' : 'bg-yellow-300'} text-gray-900 text-sm px-2 py-1 rounded-full`}>
                  {request.status}
                </span>
              </div>
              <div className="space-y-2 text-gray-500 text-sm mt-2">
                <p className="flex items-center"><span className="mr-2 text-base">📄</span> Exam ID: {request.id}</p>
                <p className="flex items-center"><span className="mr-2 text-base">📅</span> Exam Date: {request.date}</p>
                <p className="flex items-center"><span className="mr-2 text-base">📥</span> Submitted on: {request.submitted}</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-pink-500 text-sm flex items-center">View Details <span className="ml-1">➜</span></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPending;