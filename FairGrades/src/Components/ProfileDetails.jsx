import React from 'react';

const ProfileDetails = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    studentId: 'S123456',
    joined: 'January 15, 2023',
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Account Details</h2>
      <div className="space-y-2 text-gray-400">
        <p><span className="font-medium">Name:</span> {user.name}</p>
        <p><span className="font-medium">Email:</span> {user.email}</p>
        <p><span className="font-medium">Student ID:</span> {user.studentId}</p>
        <p><span className="font-medium">Joined:</span> {user.joined}</p>
      </div>
      <a href="#" className="text-pink-500 text-sm mt-4 inline-block">Edit Profile</a>
    </div>
  );
};

export default ProfileDetails;