import React from 'react';
import Container from '../Components/common/Container';
import Row from '../Components/common/Row';
import Layout from '../Components/common/Layout';
import QtyContainer from '../Components/common/QtyContainer';

const ProductDetails = () => {
  return (
    <Layout>
      <Container className="my-[20px] md:my-[40px] bg-white">
        <Row className="flex-col md:flex-row justify-between gap-8">
          {/* Left Side: Product Image */}
          <div className="w-full md:w-[47%]">
            <img
              className="w-full object-cover h-[300px] md:h-[70vh] rounded-md pt-10"
              src="https://plus.unsplash.com/premium_photo-1690034979506-cf086f51bd58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
            />
          </div>

          {/* Right Side: Product Info */}
          <div className="flex flex-col w-full md:w-[47%] pb-7">
            <h1 className="text-[24px] md:text-[30px] text-slate-700 font-semibold mb-[30px] md:mb-[70px] pt-6 md:pt-10">
              Clothing | Demo Product
            </h1>

            {/* Product Information */}
            <Row className="gap-[10px] mb-[10px] md:mb-[20px]">
              <p className="text-[16px] md:text-[18px] text-slate-600 font-medium">Brand:</p>
              <p className="text-[16px] md:text-[18px] text-slate-700">GraboWaska Brand</p>
            </Row>

            <Row className="gap-[10px] mb-[10px] md:mb-[20px]">
              <p className="text-[16px] md:text-[18px] text-slate-600 font-medium">Price:</p>
              <p className="text-[18px] md:text-[20px] font-semibold text-green-600">$20</p>
            </Row>

            <Row className="gap-[10px] mb-[10px] md:mb-[20px]">
              <p className="text-[16px] md:text-[18px] text-slate-600 font-medium">Rating:</p>
              <p className="text-[16px] md:text-[18px] text-yellow-500">⭐⭐⭐ 3/5</p>
            </Row>

            <Row className="gap-[10px] mb-[10px] md:mb-[20px]">
              <p className="text-[16px] md:text-[18px] text-slate-600 font-medium">Category:</p>
              <p className="text-[16px] md:text-[18px] text-slate-700">Clothing</p>
            </Row>

            <Row className="mb-[20px]">
              <p className="text-[16px] md:text-[18px] text-slate-600 font-medium">Description:</p>
              <p className="text-[14px] md:text-[16px] text-slate-700 leading-6">
                This is a demo product. It has a simple design and a minimalistic color scheme. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, atque delectus reiciendis quam modi pariatur quibusdam illum eius repudiandae sit officiis,
                odit vel asperiores earum tempore totam ullam? Adipisci, sapiente.
              </p>
            </Row>

            {/* Quantity Container and Add to Cart Button */}
            <div className='w-full mt-[20px] md:mt-[40px]'>
              <QtyContainer />
            </div>

            <Row className="mt-4 md:mt-6 justify-center">
              <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </Row>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetails;


