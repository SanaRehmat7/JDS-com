import React from 'react';
import Row from '../common/Row'; // Ensure you have this import

const HeroSection = () => {
  return (
    <div className="px-content-padding">
    <div className="w-full px-[10%] bg-slate-50 py-10">
      <Row className="w-full items-center justify-between flex-wrap gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-[46%] space-y-8">
          <h1 className="text-[48px] md:text-[74px] text-slate-800 font-light">
            Collections
          </h1>
          <p className="text-[18px] md:text-[30px] text-black">
            Explore and shop various products from multiple collections and brands, all in one place.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-[#00000061] transition">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w--[46%]">
          <div className="w-[400px] h-[520px] relative">
            {/* Image with Wobble Animation */}
            <img
              className="animate-wobble w-full h-full rounded-tl-[160px] rounded-br-[160px] object-cover"
              src="https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Hero Section"
           />



            {/* Overlay with Wobble Animation */}
             <div className="animate-wobble absolute top-[20px] left-[18px] w-full h-full rounded-tl-[160px] rounded-br-[160px] bg-black/30" /> 
        
          </div>
        </div>

      </Row>
    </div>
    </div>
  );
};

export default HeroSection;
