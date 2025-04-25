import React from 'react';

const Tabs = () => {
    return (
        <div className="flex justify-evenly gap-2 items-center h-16 bg-white shadow-md font-semibold text-gray-800 px-4">
        <div className=" 
     md:px-6 md:py-2 clip-custom text-sm md:text-lg">
          <h1>SHOP NOW</h1>
        </div>
      
        <h1 className="hover:text-blue-500 text-sm md:text-lg cursor-pointer transition">MAN</h1>
        <h1 className="hover:text-blue-500 cursor-pointer md:text-lg transition">WOMAN</h1>
        <h1 className="hover:text-blue-500 cursor-pointer md:text-lg transition">KIDS</h1>
        <h1 className=" text-red-600 hover:underline md:text-lg cursor-pointer">GET 5% OFF ON APP</h1>
      </div>
      
    );
};

export default Tabs;