import React from 'react';

const HelpFAQ = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-gray-400 font-medium">How long does a re-evaluation take?</h3>
          <p className="text-gray-500 text-sm">Re-evaluation typically takes 3-5 business days, depending on the complexity.</p>
        </div>
        <div>
          <h3 className="text-gray-400 font-medium">Can I upload multiple files?</h3>
          <p className="text-gray-500 text-sm">Yes, you can upload up to 5 files, each under 10MB.</p>
        </div>
        <div>
          <h3 className="text-gray-400 font-medium">What should I do if my request is denied?</h3>
          <p className="text-gray-500 text-sm">Contact support via the form below for further assistance.</p>
        </div>
      </div>
      <a href="#" className="text-pink-500 text-sm mt-4 inline-block">View More FAQs</a>
    </div>
  );
};

export default HelpFAQ;