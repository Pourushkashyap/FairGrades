import React from 'react'
import Header from '../Components/Header'
import Stats from '../Components/Stats'
import UpcomingDeadlinesQuickLinks from '../Components/UpcomingDeadlinesQuickLinks'
import RecentRequests from '../Components/RecentRequests'

const Dashboard = () => {
  return (
    <>
        

<div className="min-h-screen  bg-gray-900 text-white p-6 font-sans">
  <div className='mx-24'>
      <div className="mb-6  ">
        <h2 className="text-xl font-semibold text-gray-300">Dashboard</h2>
        <p className="text-gray-500 text-sm">Monitor and manage your re-evaluation requests</p>
      </div>
      <Stats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentRequests />
        <UpcomingDeadlinesQuickLinks />
      </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard