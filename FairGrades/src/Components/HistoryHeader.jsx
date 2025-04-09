import React from 'react';

const HistoryHeader = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h1 className="text-2xl font-bold text-gray-200">Request History</h1>
      <p className="text-gray-400 mt-2">View the history of all your re-evaluation requests.</p>
    </div>
  );
};

export default HistoryHeader;