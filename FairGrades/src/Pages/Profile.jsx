import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfileDetails from '../components/ProfileDetails';
import ProfileSettings from '../components/ProfileSettings';
import ProfileHistory from '../components/ProfileHistory';
import Footer from '../Components/Footer'

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
       <div className="flex-1 p-6 mx-24">
        <ProfileHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <ProfileDetails />
            <ProfileSettings />
          </div>
          <div>
            <ProfileHistory />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;