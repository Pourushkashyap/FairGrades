import React, { useState } from 'react';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your re-evaluation request for CS101 has been approved.', date: 'April 8, 2025', read: false },
    { id: 2, message: 'New deadline updated for Physics Midterm Appeal.', date: 'April 7, 2025', read: true },
    { id: 3, message: 'Your request for MATH204 is still under review.', date: 'April 6, 2025', read: false },
    { id: 4, message: 'System maintenance scheduled for tomorrow.', date: 'April 5, 2025', read: true },
    { id: 5, message: 'Earned 10 points for completing a challenge.', date: 'April 4, 2025', read: false },
    { id: 6, message: 'Your profile has been updated successfully.', date: 'April 3, 2025', read: true },
    { id: 7, message: 'New feature available: Request tracking.', date: 'April 2, 2025', read: false },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 5;

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification = indexOfLastNotification - notificationsPerPage;
  const currentNotifications = notifications.slice(indexOfFirstNotification, indexOfLastNotification);
  const totalPages = Math.ceil(notifications.length / notificationsPerPage);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Notification List</h2>
      <div className="space-y-4">
        {currentNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-gray-700 p-4 rounded-lg border ${notification.read ? 'border-gray-600' : 'border-pink-500'} flex justify-between items-start`}
          >
            <div>
              <p className={`text-gray-400 ${!notification.read && 'font-bold'}`}>{notification.message}</p>
              <p className="text-gray-500 text-sm mt-1">{notification.date}</p>
            </div>
            <div className="space-x-2">
              {!notification.read && (
                <button
                  onClick={() => handleMarkAsRead(notification.id)}
                  className="text-pink-500 text-sm hover:underline"
                >
                  Mark as Read
                </button>
              )}
              <button
                onClick={() => handleDelete(notification.id)}
                className="text-gray-500 text-sm hover:text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-between mt-4 text-gray-400">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NotificationList;