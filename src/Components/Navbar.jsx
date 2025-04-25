import React from 'react';
import { ImCart } from 'react-icons/im';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full shadow-xl z-50 backdrop-blur-md navbar bg-base-100 ">
  <div className="flex-1">
   <div className='flex items-center gap-2 lg:px-10 py-2'>
   <img src="../../src/assets/download.png" alt=""  className='w-8 lg:w-12'/>
   <h1 className="lg:text-3xl"><span className='font-bold'>FABRI</span>LIFE</h1>
   <label className="input ml-auto">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Products by title and tags" />
</label> 
   </div>
   
  </div>
  
  <div className="flex gap-2 lg:px-10 ml-2">
    <button className="btn text-xl lg:text-2xl"><ImCart />
    </button>
  </div>
</div>
    );
};

export default Navbar;