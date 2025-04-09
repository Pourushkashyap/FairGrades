import React from 'react';

const ProfileHistory = () => {
  const requestSummary = {
    total: 15,
    pending: 2,
    completed: 13,
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Request History Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-gray-400">Total Requests</p>
          <p className="text-white text-lg font-bold">{requestSummary.total}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Pending Requests</p>
          <p className="text-white text-lg font-bold">{requestSummary.pending}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Completed Requests</p>
          <p className="text-white text-lg font-bold">{requestSummary.completed}</p>
        </div>
      </div>
      <a href="/history" className="text-pink-500 text-sm mt-4 inline-block">View Full History</a>
    </div>
  );
};

export default ProfileHistory;