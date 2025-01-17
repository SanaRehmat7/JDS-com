import React from 'react'
import Row from '../common/Row';
import { Link } from 'react-router-dom';

const ProductCart = () => {
    return ( 
        <Link 
         className='w-full shadow pb-[5px]' to= '/product-details'>
            <img
            src='https://plus.unsplash.com/premium_photo-1693242804278-322d05ffcac2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Productcart'
            className='w-full h-[400px] object-cover rounded-xl'
            />
            <Row className='px-[10px]'>
                <h6 className='text-black text-[16px] font-semibold'>
                 Demo titel
                    </h6>
            </Row>
            <Row className='justify-between mt-[16px] px[10px] mb-[10px]'>
                <p className='text-[16px] text-[#00000080]'>
                    Clothing
                    </p>
                    <p className='text-[16px] text-[#00000080] font-semibold'>
                    20$
                    </p>
            </Row>
         </Link> 
     );
}
 
export default ProductCart ;