import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="text-gray-400 flex items-center">
            <input type="checkbox" className="mr-2" />
            Email Notifications
          </label>
        </div>
        <div>
          <label className="text-gray-400 flex items-center">
            <input type="checkbox" className="mr-2" checked />
            Dark Mode (Enabled)
          </label>
        </div>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 mt-4">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;