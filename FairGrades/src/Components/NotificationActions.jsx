import React from 'react';

const NotificationActions = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Actions</h2>
      <div className="space-y-4">
        <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
          Mark All as Read
        </button>
        <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
          Clear All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationActions;