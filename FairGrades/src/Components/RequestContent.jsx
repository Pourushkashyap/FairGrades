import React from 'react';
import FormSection from './FormSection';

const RequestContent = ({ formData, handleChange, handleFileChange, handleSubmit, handleSaveDraft, status }) => {
  return (
    <main className="flex-1 mr-6">
      <h2 className="text-2xl font-semibold mb-4">New Re-evaluation Request</h2>
      <p className="text-gray-400 mb-6">Submit a request for exam re-evaluation with all required details.</p>
      <FormSection
        formData={formData}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        handleSaveDraft={handleSaveDraft}
        status={status}
      />
    </main>
  );
};

export default RequestContent;


// import React from 'react';

// const RequestContent = ({ formData, handleChange, handleFileChange, handleSubmit, handleSaveDraft, status }) => {
//   return (
//     <main className="space-y-6">
//       <div>
//         <h2 className="text-2xl font-semibold text-gray-200 mb-4">New Re-evaluation Request</h2>
//         <p className="text-gray-400 mb-6">Submit a request for exam re-evaluation with all required details.</p>
//       </div>
//       <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-400 mb-2">Course Code</label>
//             <input
//               type="text"
//               name="courseCode"
//               value={formData.courseCode}
//               onChange={handleChange}
//               className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-400 mb-2">Course Name</label>
//             <input
//               type="text"
//               name="courseName"
//               value={formData.courseName}
//               onChange={handleChange}
//               className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-400 mb-2">Exam ID</label>
//             <input
//               type="text"
//               name="examId"
//               value={formData.examId}
//               onChange={handleChange}
//               className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-400 mb-2">Exam Date</label>
//             <input
//               type="date"
//               name="examDate"
//               value={formData.examDate}
//               onChange={handleChange}
//               className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-400 mb-2">Reason</label>
//             <textarea
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               className="w-full bg-gray-700 text-white p-2 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-400 mb-2">Upload Files</label>
//             <input
//               type="file"
//               name="files"
//               onChange={handleFileChange}
//               className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             />
//           </div>
//           <div className="flex space-x-4">
//             <button
//               type="submit"
//               className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
//             >
//               Submit Request
//             </button>
//             <button
//               type="button"
//               onClick={handleSaveDraft}
//               className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
//             >
//               Save Draft
//             </button>
//           </div>
//           {status && <p className="text-gray-400 mt-2">Status: {status}</p>}
//         </form>
//       </div>
//     </main>
//   );
// };

// // If FormSection exists, replace the form with <FormSection /> and adjust props accordingly
// export default RequestContent;