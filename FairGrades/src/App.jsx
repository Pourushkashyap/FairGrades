import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Requests from './Pages/Requests'
import { Outlet } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <div >
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App


// import React from 'react';

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6 font-sans">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center">
//           <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center mr-2">
//             <span className="text-white font-bold">EC</span>
//           </div>
//           <h1 className="text-2xl font-bold text-gray-200">ExamClarity</h1>
//         </div>
//         <div className="flex items-center space-x-6">
//           <nav className="flex space-x-4">
//             <a href="#" className="text-gray-400 hover:text-pink-500">Dashboard</a>
//             <a href="#" className="text-gray-400 hover:text-pink-500">Requests</a>
//             <a href="#" className="text-gray-400 hover:text-pink-500">History</a>
//             <a href="#" className="text-gray-400 hover:text-pink-500">Help</a>
//           </nav>
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//           </div>
//           <div className="flex space-x-2">
//             <button className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center relative">
//               <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
//             </button>
//             <button className="bg-gray-700 text-white w-6 h-6 rounded-full flex items-center justify-center">
//               <span className="text-gray-400">👤</span>
//             </button>
//             <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
//               + New Request
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Subtitle */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-300">Dashboard</h2>
//         <p className="text-gray-500 text-sm">Monitor and manage your re-evaluation requests</p>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//         <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
//           <h3 className="text-gray-400 text-sm">Total Requests</h3>
//           <p className="text-3xl font-bold text-yellow-400 mt-2">24</p>
//           <p className="text-green-400 text-sm mt-1">↑ 12% last month</p>
//         </div>
//         <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
//           <h3 className="text-gray-400 text-sm">Pending Review</h3>
//           <p className="text-3xl font-bold text-yellow-400 mt-2">8</p>
//           <p className="text-green-400 text-sm mt-1">↑ 5% last month</p>
//         </div>
//         <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
//           <h3 className="text-gray-400 text-sm">Approved Requests</h3>
//           <p className="text-3xl font-bold text-yellow-400 mt-2">14</p>
//           <p className="text-green-400 text-sm mt-1">↑ 10% last month</p>
//         </div>
//         <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center">
//           <h3 className="text-gray-400 text-sm">Average Response Time</h3>
//           <p className="text-3xl font-bold text-yellow-400 mt-2">3.2 days</p>
//           <p className="text-green-400 text-sm mt-1">↑ 10% last month</p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Recent Requests */}
//         <div className="lg:col-span-2 bg-gray-800 p-4 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold text-gray-200 mb-4">Recent Requests</h2>
//           <div className="space-y-4">
//             <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-start">
//               <div>
//                 <h3 className="text-pink-400 font-semibold">CS101</h3>
//                 <p className="text-gray-400 text-sm">Introduction to Computer Science</p>
//                 <p className="text-gray-500 text-sm">Exam ID: EX-2023-001</p>
//                 <p className="text-gray-500 text-sm">Exam Date: March 15, 2023</p>
//                 <p className="text-gray-500 text-sm">Submitted on: March 20, 2023</p>
//               </div>
//               <span className="bg-yellow-500 text-gray-900 text-sm px-3 py-1 rounded-full">Under Review</span>
//               <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Details</a>
//             </div>
//             <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-start">
//               <div>
//                 <h3 className="text-pink-400 font-semibold">MATH204</h3>
//                 <p className="text-gray-400 text-sm">Advanced Calculus</p>
//                 <p className="text-gray-500 text-sm">Exam ID: EX-2023-002</p>
//                 <p className="text-gray-500 text-sm">Exam Date: March 18, 2023</p>
//                 <p className="text-gray-500 text-sm">Submitted on: March 22, 2023</p>
//               </div>
//               <span className="bg-yellow-300 text-gray-900 text-sm px-3 py-1 rounded-full">Pending</span>
//               <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Details</a>
//             </div>
//             <div className="bg-gray-700 p-4 rounded-lg flex justify-between items-start">
//               <div>
//                 <h3 className="text-pink-400 font-semibold">PHY301</h3>
//                 <p className="text-gray-400 text-sm">Quantum Physics</p>
//                 <p className="text-gray-500 text-sm">Exam ID: EX-2023-003</p>
//                 <p className="text-gray-500 text-sm">Exam Date: March 10, 2023</p>
//                 <p className="text-gray-500 text-sm">Submitted on: March 15, 2023</p>
//               </div>
//               <span className="bg-green-500 text-gray-900 text-sm px-3 py-1 rounded-full">Approved</span>
//               <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Details</a>
//             </div>
//           </div>
//           <a href="#" className="text-pink-500 text-sm mt-4 inline-block">View All</a>
//         </div>

//         {/* Upcoming Deadlines & Quick Links */}
//         <div className="lg:col-span-1 space-y-6">
//           <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold text-gray-200 mb-4">Upcoming Deadlines</h2>
//             <div className="space-y-4">
//               <div>
//                 <p className="text-gray-400">Physics Midterm Appeal</p>
//                 <p className="text-gray-500 text-sm">Deadline: April 12, 2023</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">Statistics Final Exam</p>
//                 <p className="text-gray-500 text-sm">Deadline: April 15, 2023</p>
//               </div>
//               <div>
//                 <p className="text-gray-400">Database Systems</p>
//                 <p className="text-gray-500 text-sm">Deadline: April 20, 2023</p>
//               </div>
//               <a href="#" className="text-pink-500 text-sm mt-2 inline-block">View Calendar</a>
//             </div>
//           </div>
//           <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold text-gray-200 mb-4">Quick Links</h2>
//             <div className="space-y-2">
//               <a href="#" className="text-pink-500 text-sm flex items-center">
//                 <span className="mr-2">📋</span> Evaluation Guidelines
//               </a>
//               <a href="#" className="text-pink-500 text-sm flex items-center">
//                 <span className="mr-2">📊</span> View Statistics
//               </a>
//               <a href="#" className="text-pink-500 text-sm flex items-center">
//                 <span className="mr-2">🔍</span> Track Request Status
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;