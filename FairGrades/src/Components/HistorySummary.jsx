import React from 'react';

const HistorySummary = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Request Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-gray-400">Total Requests</p>
          <p className="text-white text-lg font-bold">25</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Pending Requests</p>
          <p className="text-white text-lg font-bold">5</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400">Completed Requests</p>
          <p className="text-white text-lg font-bold">20</p>
        </div>
      </div>
    </div>
  );
};

export default HistorySummary;