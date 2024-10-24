import React from 'react'
import TopHeader from '../Header/TopHeader';
import Footer from '../Home/Footer';


const Layout = ({children}) => {
    return ( 
        <div className="w-full bg-[#44556c] text-white min-h-screen">
      <TopHeader />
      {children}
      <Footer />
      </div>
     );
}
 
export default Layout;