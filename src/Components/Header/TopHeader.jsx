import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Row from '../common/Row';
import HeaderBtn from './HeaderBtn';
 
const TopHeader = () => {
    return ( 
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[10%] py-4 md:py-6 space-y-4 md:space-y-0">
        {/* Search Section */}
        <Row className="w-full md:w-1/3 items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="search-input w-full px-4 py-2 pr-10 rounded-md bg-[#4e6175] text-white outline-none transition-all duration-300"
            />
            <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-white"></i>
          </div>
        </Row>

        {/* Center Title */}
        <h1 className="text-2xl font-bold hover:text-slate-400">
          JDS-Com
        </h1>

        {/* Account and Cart Icons Section  */}
         {/* <Link to='Cart'>
      <Row className="w-full md:w-1/3 justify-end items-center gap-6">
          <HeaderBtn title="Account" />
           <Row className="items-center gap-2 cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            <p className="text-lg hover:text-slate-400">Cart</p>
          </Row> 
        </Row>
        </Link> */}
        <HeaderBtn/>
      </div>
     );
}
 
export default TopHeader;