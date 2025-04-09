import React, { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import RequestContent from '../components/RequestContent';

const Requests = () => {
  const [formData, setFormData] = useState({
    courseCode: '',
    courseName: '',
    examId: '',
    examDate: '',
    submittedOn: new Date().toLocaleDateString(),
    reason: '',
    files: null,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Under Review');
    alert('Request submitted successfully! Status: Under Review');
    // Add API call logic here
  };

  const handleSaveDraft = (e) => {
    e.preventDefault();
    setStatus('Draft Saved');
    alert('Draft saved successfully!');
    // Add draft-saving logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
      <div className="flex-1 p-6 mx-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
          <main className="lg:col-span-3">
            <RequestContent
              formData={formData}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
              handleSaveDraft={handleSaveDraft}
              status={status}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Requests;