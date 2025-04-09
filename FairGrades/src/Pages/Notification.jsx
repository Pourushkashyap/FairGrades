import React from 'react';
import NotificationHeader from '../Components/NotificationHeader.jsx'
import NotificationList from '../Components/NotificationList.jsx'
import NotificationActions from '../Components/NotificationActions';
import Footer from '../components/Footer';

const Notification = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
     
      <div className="flex-1 p-6 mx-24">
        <NotificationHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-1">
            <NotificationList />
          </div>
          <div className="lg:col-span-1">
            <NotificationActions />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notification;