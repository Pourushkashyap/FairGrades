import React from 'react';

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium mb-2 text-gray-200">Upcoming Deadlines</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Physics Midterm Appeal: Deadline April 12, 2023</li>
          <li>Statistics Final Exam: Deadline April 15, 2023</li>
          <li>Database Systems: Deadline April 20, 2023</li>
        </ul>
        <a href="#" className="text-pink-500 hover:text-pink-400 mt-2 block text-sm">View Calendar</a>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium mb-2 text-gray-200">Quick Links</h3>
        <ul className="text-gray-400 space-y-2">
          <li><a href="#" className="text-pink-500 hover:text-pink-400 text-sm">Evaluation Guidelines</a></li>
          <li><a href="#" className="text-pink-500 hover:text-pink-400 text-sm">View Statistics</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;