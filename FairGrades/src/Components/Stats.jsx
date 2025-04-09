import React from 'react';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
        <h3 className="text-gray-400 text-sm">Total Requests</h3>
        <p className="text-3xl font-bold text-yellow-400 mt-2">24</p>
        <p className="text-green-400 text-sm mt-1">↑ 12% last month</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
        <h3 className="text-gray-400 text-sm">Pending Review</h3>
        <p className="text-3xl font-bold text-yellow-400 mt-2">8</p>
        <p className="text-green-400 text-sm mt-1">↑ 5% last month</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
        <h3 className="text-gray-400 text-sm">Approved Requests</h3>
        <p className="text-3xl font-bold text-yellow-400 mt-2">14</p>
        <p className="text-green-400 text-sm mt-1">↑ 10% last month</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
        <h3 className="text-gray-400 text-sm">Average Response Time</h3>
        <p className="text-3xl font-bold text-yellow-400 mt-2">3.2 days</p>
        <p className="text-green-400 text-sm mt-1">↑ 10% last month</p>
      </div>
    </div>
  );
};

export default Stats;