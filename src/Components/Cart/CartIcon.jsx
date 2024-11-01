import React from 'react';
import Row from '../common/Row';
import Button from '../common/Button';

const CartItem = () => {
  return (  
    <Row className='border-[1px] border-gray-600 rounded flex-col mb-[30px]'>
      <Row className='border-b-[1px] border-gray-600 items-center w-full py-[10px] px-[10px] md:px-[20px] flex-col md:flex-row'>
        {/* Image Section */}
        <Row className='w-full md:w-[20%] flex justify-center md:justify-start mb-4 md:mb-0'>
          <img 
            className='w-1/2 h-[100px] md:w-2/3 md:h-[150px] object-cover rounded-[6px]' 
            src='https://media.istockphoto.com/id/1128905977/photo/womens-clothing-with-personal-accessories-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=VSffOD0j-PyZ6wV904xvOwpY_BcT1KQQhOGuavxaOMs=' 
            alt='product' 
          />
        </Row>

        {/* Product Name */}
        <p className='w-full md:w-[20%] text-[16px] md:text-[18px] text-black font-medium text-center mb-2 md:mb-0'>
          Demo Product
        </p>

        {/* Product Price */}
        <p className='w-full md:w-[20%] text-[16px] md:text-[18px] text-black font-medium text-center mb-2 md:mb-0'>
          Price: $10.00
        </p>

        {/* Quantity Controls */}
        <div className='w-full md:w-[20%] flex justify-center md:justify-center mb-2 md:mb-0'>
          <Row className="items-center justify-center">
            <Button title="-" className="bg-gray-300 hover:bg-gray-400 rounded px-2" />
            <p className="w-[40px] md:w-[70px] mx-2 md:mx-4 text-[14px] md:text-[16px] text-center font-semibold text-black">0</p>
            <Button title="+" className="bg-gray-300 hover:bg-gray-400 rounded px-2" />
          </Row>
        </div>

        {/* Total Price */}
        <p className='w-full md:w-[20%] text-[16px] md:text-[18px] text-black font-medium text-center'>
          Total: $0.00
        </p>
      </Row>
    </Row>
  );
}
 
export default CartItem;


