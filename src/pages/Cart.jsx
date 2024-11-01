import React, { useState } from 'react';
import Container from '../Components/common/Container';
import Row from '../Components/common/Row';
 import Layout from '../Components/common/Layout';
import CartIcon from '../Components/Cart/CartIcon';

const CartDetails = () => {
return (
        <Layout>
        <Container className='my-[40px] bg-slate-50'>
          <Row className="mb-[30px] justify-center">
            <h6 className='text-[24px] text-slate-700 font-semibold mt-3'>Cart Details</h6>
         </Row>
        <Row className='flex-col mb-[30px] justify-center'>
      <Row className='h-[50px] bg-gray-600 w-full px-[20px] items-center'>
       {["Image", "Title", "Price", "Quantity", "Total"].map((title, index) => (
       <h6 key={index} className='text-white text-[18px] font-medium w-[20%] text-center'>
       {title}
        </h6>
      ))}
    </Row>
        <CartIcon/>
        <CartIcon/>
        <CartIcon/>
        <CartIcon/>
        <CartIcon/>
        <CartIcon/>
  </Row>

        </Container>
    </Layout>
    );
};

export default CartDetails;

