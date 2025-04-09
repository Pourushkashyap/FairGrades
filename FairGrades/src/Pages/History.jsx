import React,{useState} from 'react';
import HistoryHeader from '../Components/HelpHeader.jsx'
import HistorySummary from '../Components/HistorySummary.jsx'
import HistoryPending from '../Components/HistoryPending.jsx'
import HistoryCurrent from '../Components/HistoryCurrent.jsx'
import HistoryCompleted from '../Components/HistoryCompleted.jsx'
import Footer from '../Components/Footer.jsx'
const History = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
      <div className="flex-1 p-6 mx-24">
        <HistoryHeader />
        <div className="space-y-6">
          <HistorySummary />
          <HistoryPending />
          <HistoryCurrent />
          <HistoryCompleted />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;