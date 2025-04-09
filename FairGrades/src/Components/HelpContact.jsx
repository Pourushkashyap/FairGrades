import React from 'react';

const HelpContact = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">Contact Us</h2>
      <p className="text-gray-400 mb-2">Need further assistance? Reach out to us:</p>
      <ul className="text-gray-500 space-y-2">
        <li>Email: support@examclarity.com</li>
        <li>Phone: +1-800-555-1234</li>
        <li>Hours: Mon-Fri, 9 AM - 5 PM (EST)</li>
      </ul>
      <form className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full bg-gray-700 text-white p-2 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default HelpContact;