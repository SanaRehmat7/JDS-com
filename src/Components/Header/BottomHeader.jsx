import React from 'react'
import Row from '../common/Row'

// Menu items constant
const menuItems = [
    "Home & Living ",   
    "Best Clothing",
    "Electronics", 
    "Sports & Outdoors", 
    "Beauty & Health", 
    "Kids & Baby", 
    "Toys & Hobbies",
  ];

  const BottomHeader = () => {
    return (
      // Lower Section: Menu Items
      <nav className="w-full bg-[#2c3a47]">
        <Row className="justify-center gap-8 py-4 flex-wrap">
          {menuItems.map((item, index) => (
            <p
              key={index}
              className="text-lg hover:text-slate-400 cursor-pointer"
            >
              {item}
            </p>
          ))}
        </Row>
      </nav>
    );
  };
 
export default BottomHeader;