import React from 'react'


const Footer = () => {
  return (
    <div className="px-4 md:px-[10%] py-4 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center h-full text-white space-y-4 md:space-y-0 md:space-x-4">
          {/* Left Section */}
          <p className="text-center text-sm">&copy; 2024 JDS-Com. All Rights Reserved.</p>

          {/* Center Image Section */}
           <img
            className="w-[150px] md:w-[283px] object-contain"
            src={`${process.env.PUBLIC_URL}/imgs/cards.png`}
             alt="Cards" />

          {/* Right Section */}
          <p className="text-sm md:text-base">Scroll To Top</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

