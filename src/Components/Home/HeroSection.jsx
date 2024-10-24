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
          <button className="h-[50px] w-full md:w-[20%] text-white bg-black font-medium">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[46%] flex justify-center">
          <div className="w-[424px] h-[542px] relative">
            {/* Image with Wobble Animation */}
            <img
              className="animate-wobble w-full h-full rounded-tl-[160px] rounded-br-[160px] object-cover"
              src="https://images.unsplash.com/photo-1729438873852-47c24a018407?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
              alt="Hero Section"
            />

            {/* Overlay with Wobble Animation */}
            <div className="animate-wobble absolute top-0 left-0 w-full h-full rounded-tl-[160px] rounded-br-[160px] bg-black/30" />
          </div>
        </div>

      </Row>
    </div>
    </div>
  );
};

export default HeroSection;
