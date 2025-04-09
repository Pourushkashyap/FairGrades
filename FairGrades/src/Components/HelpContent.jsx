import React from 'react';

const HelpContent = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">How to Use ExamClarity</h2>
      <p className="text-gray-400 mb-2">
        ExamClarity is designed to help you manage and track your exam re-evaluation requests efficiently. Follow these steps to get started:
      </p>
      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>Navigate to the Dashboard to view your recent requests and upcoming deadlines.</li>
        <li>Click "+ New Request" to submit a re-evaluation request with all required details.</li>
        <li>Check the status of your requests under the Requests tab.</li>
        <li>Use Quick Links for additional resources like guidelines and statistics.</li>
      </ul>
    </div>
  );
};

export default HelpContent;