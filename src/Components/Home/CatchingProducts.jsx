import React from 'react'
import { Link } from 'react-router-dom';

const CatchingProducts = () => {
  return (
    <div className="px-4 md:px-content-padding py-8">
      <div className="w-full bg-[#3b4f6e] p-6 rounded-lg">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-[24px] md:text-[30px] font-semibold text-white uppercase">
            Catching Products
          </h1>
        </div>

        {/* Main Content */}
         <div className="flex flex-col md:flex-row gap-[24px] items-center">
            {/* Rotated Text */}
           <div className="h-[648px] w-[52px] relative">
           <p className="text-[34px] h-full w-[648px] text-white -rotate-90 absolute top-1/2 left-0 transform -translate-y-1/2 text-center z-10 pointer-events-none">
           Explore new and prominent styles.
            </p>
        </div> 

         {/* Large Image */}
          <Link to='/product-details'>
          <img
          className="w-full md:w-[648px] h-[300px] md:h-[648px] object-cover rounded-md cursor-pointer z-20 relative"
          src="https://images.unsplash.com/photo-1588524594091-77b993b0619f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlc3QlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="top popular"
           />
          </Link>
          
            <div className="grid grid-cols-2 gap-[16px] w-full md:w-1/2">
            {Array(4).fill(0).map((_, index) => (
            <Link to='/product-details' key={index}> 
            <div className="w-full h-[150px] md:h-[312px]">
            <img
            src="https://images.unsplash.com/photo-1569863629718-20f8b6c62460?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlc3QlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="top popular"
            className="w-full h-full object-cover rounded-md"
            />
          </div>
          </Link>
        
        ))}
       </div>
      </div>
    </div>
  </div>
  );
}

export default CatchingProducts;
