import React from 'react'
import TopHeader from '../Components/Header/TopHeader';
import BottomHeader from '../Components/Header/BottomHeader';
import HeroSection from '../Components/Home/HeroSection';
import CatchingProducts from '../Components/Home/CatchingProducts';
import BestSellerProducts from '../Components/Home/BestSallerProducts';
import Footer from '../Components/Home/Footer';

const Home = () => {
  return ( <div className="w-full">
    <TopHeader />
    <BottomHeader />
    <HeroSection />
    <CatchingProducts />
    <BestSellerProducts />
    <Footer />
    
    </div> 
  );
}
 
export default Home;

