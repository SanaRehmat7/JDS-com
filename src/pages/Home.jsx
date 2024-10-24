import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import BottomHeader from '../Components/Header/BottomHeader';
import HeroSection from '../Components/Home/HeroSection';
import CatchingProducts from '../Components/Home/CatchingProducts';
import BestSellerProducts from "../Components/Home/BestSallerProducts";
import Layout from '../Components/common/Layout';


const Home = () => {
  return ( 
    <Layout>
      <BottomHeader />
      <HeroSection/>
      <CatchingProducts/>
      <BestSellerProducts/>
      </Layout>

     );
}
 
export default Home;