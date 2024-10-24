import React from 'react';
import Row from '../common/Row';
import { Link } from 'react-router-dom';

const HeaderBtn = ({ title, Icon, url}) => {
  return (
    <Link to='Cart'>
    <Row className="w-full md:w-1/3 justify-end items-center gap-6">
        <HeaderBtn title="Account" />
         <Row className="items-center gap-2 cursor-pointer">
          <i className="fa-solid fa-cart-shopping text-xl"></i>
          <p className="text-lg hover:text-slate-400">Cart</p>
        </Row> 
      </Row>
      </Link>
  );
};

export default HeaderBtn;

