import React from 'react'
import Row from '../common/Row';
import ProductCart from '../ProductCart';


const BestSellerProducts = () => {
    return (
    <div>
            <div className='w-full text-center text-[30px] text-[#1e2832] font-semibold mt-[80px] mb-[40px] uppercase'>
                Best Seller Products
            </div>
                <Row className='items-center'>
                    <p className='text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]'>
                        All Products
                        </p>
                        <p className='text-[16px] mr-[40px] cursor-pointer text-[#0000000]  hover:text-[#757575]'>
                         Clothing
                        </p>
                        <p className='text-[16px] mr-[40px] cursor-pointer text-[#0000000]  hover:text-[#757575]'>
                         Electronics
                        </p>
                        <p className='text-[16px] mr-[40px] cursor-pointer text-[#0000000]  hover:text-[#757575]'>
                         Sports
                        </p>
                        <p className='text-[16px] mr-[40px] cursor-pointer text-[#0000000]  hover:text-[#757575]'>
                        Others
                        </p>
                </Row>
                <Row className='flex-wrap gap-[1%] mt-[40px]'>
                  
                  <div className='w-[24%] mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%] mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%] mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%] mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>
                <div className='w-[24%]  mb-[20px]'>
                    <ProductCart/>
                </div>

                </Row>
    </div> 
    );
}
 
export default BestSellerProducts;