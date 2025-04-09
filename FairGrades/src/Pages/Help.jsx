import React,{useState} from 'react';
import HelpHeader from '../Components/HelpHeader.jsx'
import HelpContent from '../Components/HelpContent.jsx'
import HelpFAQ from '../Components/HelpFAQ.jsx'
import HelpContact from '../Components/HelpContact.jsx'
import Footer from '../Components/Footer.jsx';
const Help = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* <Header /> */}
      <div className="flex-1 p-6 mx-24">
        <HelpHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <HelpContent />
            <HelpFAQ />
          </div>
          <div className="lg:col-span-1">
            <HelpContact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;