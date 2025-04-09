// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {
//   const link = [
//     { name: "Dashboard", route: "/dashboard" },
//     { name: "Home", route: "/" }, // Changed from "/home" to "/" to match the router
//     { name: "Help", route: "/help" },
//     { name: "Requests", route: "/requests" },
//     { name: "History", route: "/history" },
//   ];

//   return (
//     <div className="flex justify-between items-center bg-gray-900 text-white p-6 font-sans">
//       <div className="flex items-center">
//         <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center mr-2">
//           <span className="text-white font-bold">EC</span>
//         </div>
//         <h1 className="text-2xl font-bold text-gray-200">ExamClarity</h1>
//       </div>
//       <div className="flex items-center space-x-6">
//         <nav className="flex space-x-4">
//           {link.map((link, index) => (
//             <NavLink
//               to={link.route}
//               key={index}
//               end={link.route === "/"} // Ensure root (Home) is active at "/"
//               className={({ isActive }) =>
//                 `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-gray-400"} hover:text-pink-500`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>
//         <div className="flex space-x-2">
//           <button className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center relative">
//             <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
//           </button>
//           <button className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
//             <span className="text-gray-400">👤</span>
//           </button>
//           <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
//             + New Request
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaRegBell } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// const Header = () => {
//   const links = [
//     { name: "Dashboard", route: "/dashboard" },
//     // { name: "Home", route: "/" },
//     { name: "Help", route: "/help" },
//     { name: "Requests", route: "/requests" },
//     { name: "History", route: "/history" },
//   ];

//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);

//   // Sample notifications data
//   const notifications = [
//     { id: 1, message: 'Your re-evaluation request for CS101 has been approved.', date: 'April 8, 2025', read: false },
//     { id: 2, message: 'New deadline updated for Physics Midterm Appeal.', date: 'April 7, 2025', read: true },
//     { id: 3, message: 'Your request for MATH204 is still under review.', date: 'April 6, 2025', read: false },
//     { id: 4, message: 'System maintenance scheduled for tomorrow.', date: 'April 5, 2025', read: true },
//     { id: 5, message: 'Earned 10 points for completing a challenge.', date: 'April 4, 2025', read: false },
//   ];

//   return (
//     <header className="bg-gray-900 text-white p-4 flex justify-between items-center w-full shadow-md">
//       {/* Logo and Title (Left Section) */}
//       <NavLink to={"/"} className="flex items-center space-x-2">
//         <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
//           <span className="text-white font-bold">EC</span>
//         </div>
//         <h1 className="text-2xl font-bold text-gray-200 hidden md:block">ExamClarity</h1>
//       </NavLink>

//       {/* Navigation and Actions (Center and Right Sections) */}
//       <div className="flex items-center space-x-6">
//         {/* Navigation Links */}
//         <nav className="flex space-x-4">
//           {links.map((link, index) => (
//             <NavLink
//               to={link.route}
//               key={index}
//               end={link.route === "/"}
//               className={({ isActive }) =>
//                 `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-gray-400"} hover:text-pink-500 text-sm md:text-base`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Search Input */}
//         <div className="relative hidden md:block">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-40 md:w-64"
//           />
//         </div>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-2">
//           {/* Notification Badge */}
//           <div className="relative">
//             <button className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
//               <FaRegBell className="text-white text-lg" />
//               <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
//             </button>
//           </div>

//           {/* User Profile Icon */}
//           <NavLink to={'/profile'} className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
//             <span className="text-gray-400"><FaRegUser /></span>
//           </NavLink>

//           {/* New Request Button (Commented Out) */}
//           {/* <button className="bg-pink-500 text-white px-3 py-2 rounded-lg hover:bg-pink-600 transition text-sm md:text-base">
//             + New Request
//           </button> */}
//         </div>
//       </div>

//       {/* Mobile Menu Toggle (Hidden on Desktop) */}
//       <div className="md:hidden">
//         <button className="text-gray-400 hover:text-pink-500 focus:outline-none">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const links = [
    { name: "Dashboard", route: "/dashboard" },
    // { name: "Home", route: "/" },
    { name: "Help", route: "/help" },
    { name: "Requests", route: "/requests" },
    { name: "History", route: "/history" },
    { name: "Profile", route: "/profile" },
  ];

  // State to toggle notification dropdown
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Sample notifications data
  const notifications = [
    { id: 1, message: 'Your re-evaluation request for CS101 has been approved.', date: 'April 8, 2025', read: false },
    { id: 2, message: 'New deadline updated for Physics Midterm Appeal.', date: 'April 7, 2025', read: true },
    { id: 3, message: 'Your request for MATH204 is still under review.', date: 'April 6, 2025', read: false },
    { id: 4, message: 'System maintenance scheduled for tomorrow.', date: 'April 5, 2025', read: true },
    { id: 5, message: 'Earned 10 points for completing a challenge.', date: 'April 4, 2025', read: false },
  ];

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center w-full shadow-md relative">
      {/* Logo and Title (Left Section) */}
      <NavLink to={"/"} className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">EC</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-200 hidden md:block">ExamClarity</h1>
      </NavLink>

      {/* Navigation and Actions (Center and Right Sections) */}
      <div className="flex items-center space-x-6">
        {/* Navigation Links */}
        <nav className="flex space-x-4">
          {links.map((link, index) => (
            <NavLink
              to={link.route}
              key={index}
              end={link.route === "/"}
              className={({ isActive }) =>
                `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-gray-400"} hover:text-pink-500 text-sm md:text-base`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Search Input */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 w-40 md:w-64"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Notification Badge with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-600 transition"
            >
              <FaRegBell className="text-white text-lg" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {notifications.filter(n => !n.read).length}
              </span>
            </button>
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-lg p-4 z-10 max-h-64 overflow-y-auto">
                <div className="space-y-2">
                  {notifications.slice(0, 5).map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-center p-2 rounded ${!notification.read ? 'bg-gray-700' : ''}`}
                    >
                      <span className="text-yellow-500 mr-2">🔔</span>
                      <div>
                        <p className={`text-gray-400 ${!notification.read && 'font-bold'}`}>{notification.message}</p>
                        <p className="text-gray-500 text-xs">{notification.date}</p>
                      </div>
                    </div>
                  ))}
                  <NavLink
                    to="/notification"
                    onClick={() => setIsNotificationOpen(false)}
                    className="block text-pink-500 text-sm mt-2 hover:underline"
                  >
                    All Notifications
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Icon */}
          <NavLink to="/profile" className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-gray-400">👤</span>
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Toggle (Hidden on Desktop) */}
      <div className="md:hidden">
        <button className="text-gray-400 hover:text-pink-500 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;