// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => {

//   const link = [
//     { name: "Dashboard", route: "/dashboard" },
//     { name: "Home", route: "/home" },
//     { name: "Help", route: "/help" },
//     { name: "Requests", route: "/requests" },
//     { name: "History", route: "/history" },
//   ]
//   return (
//     <div className="flex justify-between items-center  bg-gray-900 text-white p-6 font-sans py-10">
//       <div className="flex items-center">
//         <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center mr-2">
//           <span className="text-white font-bold">EC</span>
//         </div>
//         <h1 className="text-2xl font-bold text-gray-200">ExamClarity</h1>
//       </div>
//       <div className="flex items-center space-x-6">

//         <nav className="flex space-x-4">
//           {/* <a href="#" className="text-gray-400 hover:text-pink-500">Dashboard</a>
//           <a href="#" className="text-gray-400 hover:text-pink-500">Requests</a>
//           <a href="#" className="text-gray-400 hover:text-pink-500">History</a>
//           <a href="#" className="text-gray-400 hover:text-pink-500">Help</a> */}

//           {link.map((link, index) => (
//             <NavLink
//               to={link.route}
//               key={index}
//               className={({ isActive }) =>
//                 `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-black"}`
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
//           <button className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center relative">
//             <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
//           </button>
//           <button className="bg-gray-700 text-white w-6 h-6 rounded-full flex items-center justify-center">
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



// // import React from 'react';
// // import { NavLink } from 'react-router-dom';

// // const Header = () => {
// //   const link = [
// //     { name: "Dashboard", route: "/dashboard" },
// //     { name: "Home", route: "/home" },
// //     { name: "Help", route: "/help" },
// //     { name: "Requests", route: "/requests" },
// //     { name: "History", route: "/history" },
// //   ];

// //   return (
// //     <div className="flex justify-between items-center bg-gray-900 text-white p-6 font-sans">
// //       <div className="flex items-center">
// //         <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center mr-2">
// //           <span className="text-white font-bold">EC</span>
// //         </div>
// //         <h1 className="text-2xl font-bold text-gray-200">ExamClarity</h1>
// //       </div>
// //       <div className="flex items-center space-x-6">
// //         <nav className="flex space-x-4">
// //           {link.map((link, index) => (
// //             <NavLink
// //               to={link.route}
// //               key={index}
// //               end={link.route === "/home"} // Ensure home is active at root
// //               className={({ isActive }) =>
// //                 `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-gray-400"} hover:text-pink-500`
// //               }
// //             >
// //               {link.name}
// //             </NavLink>
// //           ))}
// //         </nav>

// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
// //           />
// //         </div>
// //         <div className="flex space-x-2">
// //           <button className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center relative">
// //             <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
// //           </button>
// //           <button className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
// //             <span className="text-gray-400">👤</span>
// //           </button>
// //           <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
// //             + New Request
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Header;


import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const link = [
    { name: "Dashboard", route: "/dashboard" },
    { name: "Home", route: "/" }, // Changed from "/home" to "/" to match the router
    { name: "Help", route: "/help" },
    { name: "Requests", route: "/requests" },
    { name: "History", route: "/history" },
  ];

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-6 font-sans">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center mr-2">
          <span className="text-white font-bold">EC</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-200">ExamClarity</h1>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-4">
          {link.map((link, index) => (
            <NavLink
              to={link.route}
              key={index}
              end={link.route === "/"} // Ensure root (Home) is active at "/"
              className={({ isActive }) =>
                `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-gray-400"} hover:text-pink-500`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div className="flex space-x-2">
          <button className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center relative">
            <span className="absolute -top-1 -right-1 bg-pink-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">1</span>
          </button>
          <button className="bg-gray-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-gray-400">👤</span>
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
            + New Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;