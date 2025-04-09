import React from 'react';

const FormSection = ({ formData, handleChange, handleFileChange, handleSubmit, handleSaveDraft, status }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Course Details */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Course Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400">Course Code</label>
            <select
              name="courseCode"
              value={formData.courseCode}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded"
            >
              <option value="">Select Course</option>
              <option value="CS101">CS101</option>
              <option value="MATH204">MATH204</option>
              <option value="PHY301">PHY301</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400">Course Name</label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded"
              placeholder="e.g., Introduction to Computer Science"
              readOnly
            />
          </div>
        </div>
        <div className="mt-2">
          <label className="block text-gray-400">Exam ID</label>
          <input
            type="text"
            name="examId"
            value={formData.examId}
            onChange={handleChange}
            className="w-full bg-gray-700 p-2 rounded"
            placeholder="e.g., EX-2023-001"
          />
        </div>
        <button
          type="button"
          className="mt-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
        >
          Fetch Details
        </button>
      </div>

      {/* Exam Details */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Exam Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400">Exam Date</label>
            <input
              type="date"
              name="examDate"
              value={formData.examDate}
              onChange={handleChange}
              className="w-full bg-gray-700 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-400">Submitted On</label>
            <input
              type="text"
              name="submittedOn"
              value={formData.submittedOn}
              readOnly
              className="w-full bg-gray-700 p-2 rounded"
            />
          </div>
        </div>
        <p className="text-gray-500 mt-2 text-sm">Ensure the exam date matches your records for transparency.</p>
      </div>

      {/* Re-evaluation Reason */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Reason for Re-evaluation</h3>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full bg-gray-700 p-2 rounded h-24"
          placeholder="Please provide a detailed reason for your request (e.g., grading discrepancy, unclear marking)."
        />
        <a href="#" className="text-pink-500 hover:text-pink-400 mt-2 inline-block">View Guidelines</a>
      </div>

      {/* Supporting Documents */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Upload Supporting Documents</h3>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full bg-gray-700 p-2 rounded"
        />
        <p className="text-gray-500 mt-2 text-sm">Upload relevant files (max 10MB) to support your request.</p>
      </div>

      {/* Status & Submission */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Request Status</h3>
        <p className={`text-${status === 'Under Review' ? 'yellow' : status === 'Draft Saved' ? 'gray' : 'white'}-500`}>
          {status || 'Pending Submission'}
        </p>
        <div className="mt-4 space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            disabled={!formData.courseCode || !formData.examDate || !formData.reason}
          >
            Submit Request
          </button>
          <button
            type="button"
            onClick={handleSaveDraft}
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            Save Draft
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSection;