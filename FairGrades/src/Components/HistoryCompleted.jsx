import React from 'react';

const HistoryCompleted = () => {
  const completedRequests = [
    { id: 'EX-2023-004', course: 'CS102', name: 'Data Structures', date: 'Feb 20, 2023', submitted: 'Feb 25, 2023', status: 'Approved', result: 'Score updated to 85' },
    { id: 'EX-2023-005', course: 'MATH201', name: 'Linear Algebra', date: 'Feb 15, 2023', submitted: 'Feb 20, 2023', status: 'Denied', result: 'No grading discrepancy found' },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Completed Requests</h2>
      <div className="space-y-4">
        {completedRequests.map((request) => (
          <div key={request.id} className="bg-gray-700 p-4 rounded-lg border border-gray-600 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-pink-400 font-semibold text-lg">{request.course}</h3>
                  <p className="text-gray-400 text-sm">{request.name}</p>
                </div>
                <span className={`${request.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'} text-gray-900 text-sm px-2 py-1 rounded-full`}>
                   {request.status}
                </span>
              </div>
              <div className="space-y-2 text-gray-500 text-sm mt-2">
                <p className="flex items-center"><span className="mr-2 text-base">📄</span> Exam ID: {request.id}</p>
                <p className="flex items-center"><span className="mr-2 text-base">📅</span> Exam Date: {request.date}</p>
                <p className="flex items-center"><span className="mr-2 text-base">📥</span> Submitted on: {request.submitted}</p>
                <p className="flex items-center"><span className="mr-2 text-base">✅</span> Result: {request.result}</p>
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

export default HistoryCompleted;