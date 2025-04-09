import bodypick from '../assets/img/images.jpeg'; // Replace with your image path



import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// import bodypick from '../assets/img/bodypick.jpg'; // Replace with your image path
import { NavLink } from 'react-router-dom';

const BodyCrausel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Handle scroll for subtle effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-[70vh] relative" ref={ref}>
      <div
        className="relative w-full h-full overflow-hidden transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, #66ff99 50%, transparent 100%)`,
        }}
      >
        {/* Content Container */}
        <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
          {/* Left Side Text Content */}
          <div
            className={`space-y-4 md:space-y-6 transform transition-all duration-1000 ease-out ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* <div className="flex items-center space-x-2">
              <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wider">
                Meet Consulting
              </span>
              <div className="h-0.5 w-8 md:w-12 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div> */}
            <h1 className="text-3xl mb-4 md:text-5xl font-bold text-white leading-tight">
              {/* Financial Analysis <br /> Meeting. */}
              Save Smart Invest Wisely Borrow Easily 
            </h1>
            {/* <Button
            to={"/KnowMore"}
              className="px-8 py-2  no-underline md:px-6 md:py-3 bg-gradient-to-r from-yellow-300 to-yellow-200 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Know Us
            </Button> */}
            {/* <NavLink
            to={"/KnowMore"}
              className="px-8 py-2  no-underline md:px-6 md:py-3 bg-gradient-to-r from-yellow-300 to-yellow-200 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Know Us
            </NavLink> */}
          </div>

          {/* Right Side Image */}
          <div
            className={`w-full md:w-1/2 h-full transform transition-all duration-1000 ease-out ${
              inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div
              className="w-full h-full transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                transform: `rotateY(${scrollPosition / 50}deg)`,
              }}
            >
              <img
                src={bodypick}
                alt="img"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCrausel;