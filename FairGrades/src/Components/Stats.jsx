import React from 'react';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-gray-400 text-sm">Total Requests</h3>
        <p className="text-white text-2xl font-bold">24</p>
        <p className="text-green-500 text-sm">+12% last month</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-gray-400 text-sm">Pending Review</h3>
        <p className="text-white text-2xl font-bold">8</p>
        <p className="text-red-500 text-sm">+5% last month</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-gray-400 text-sm">Approved Requests</h3>
        <p className="text-white text-2xl font-bold">14</p>
        <p className="text-green-500 text-sm">+10% last month</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
        <h3 className="text-gray-400 text-sm">Average Response Time</h3>
        <p className="text-white text-2xl font-bold">3.2 days</p>
        <p className="text-green-500 text-sm">+10% last month</p>
      </div>
    </div>
  );
};

export default Stats;