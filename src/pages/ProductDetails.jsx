import React from 'react'
import Container from '../Components/common/Container';
import Row from '../Components/common/Row';
import Button from '../Components/common/Button';
import Layout from '../Components/common/Layout';

const productDetails = () => {
  return (
    <Layout>
      <Container className="my-[40px] bg-white">
        <Row className="justify-between">
          <div className="w-[47%]">
            <img
              className="w-full object-cover h-[99vh] rounded-md pt-10"
              src="https://images.unsplash.com/photo-1729438873852-47c24a018407?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmV"
              alt="Product"
            />
          </div>

          {/* Right side: Product info */}
          <div className="flex flex-col w-[47%] pb-7">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px] pt-10">
              Clothing | Demo Product
            </h1>
           
            {/* Product information */}
            <Row className="gap-[10px] mb-[20px]">
              <p className="text-[18px] text-slate-600 font-medium">Brand:</p>
              <p className="text-[18px] text-slate-700">Demo Brand</p>
            </Row>

            <Row className="gap-[10px] mb-[20px]">
              <p className="text-[18px] text-slate-600 font-medium">Price:</p>
              <p className="text-[20px] font-semibold text-green-600">$20</p>
            </Row>

            <Row className="gap-[10px] mb-[20px]">
              <p className="text-[18px] text-slate-600 font-medium">Rating:</p>
              <p className="text-[18px] text-yellow-500">⭐⭐⭐ 3/5</p>
            </Row>

            <Row className="gap-[10px] mb-[20px]">
              <p className="text-[18px] text-slate-600 font-medium">Category:</p>
              <p className="text-[18px] text-slate-700">Clothing</p>
            </Row>

            <Row className="mb-[20px]">
              <p className="text-[18px] text-slate-600 font-medium">Description:</p>
              <p className="text-[16px] text-slate-700 leading-6">
                This is a demo product. It has a simple design and a minimalistic color scheme. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, atque delectus reiciendis quam modi pariatur quibusdam illum eius repudiandae sit officiis,
                odit vel asperiores earum tempore totam ullam? Adipisci, sapiente.
              </p>
            </Row>

              {/* {buttonsContainer} */}
          <Row className='mt-[40px] items-center justify-center'>
          <Button title="-" />
          <p className='w-[70px] mx-4 text-[16px] text-center font-semibold text-black'>
            0
          </p>
           <Button title="+" />
          </Row>
          <Row className="mt-6 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
          </button>
          </Row>
        </div>
        </Row>
      </Container>
      </Layout>
  );
};

export default productDetails;

