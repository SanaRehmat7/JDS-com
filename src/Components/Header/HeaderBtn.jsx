import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBtn = ({ title, iconClass, url='/'}) => {
  return (
    <Link to={url} className="flex items-center gap-2 cursor-pointer">
      <i className={`fa-solid ${iconClass} text-xl`}></i>
      <p className="text-lg hover:text-slate-400">{title}</p>
    </Link>
  );
};

export default HeaderBtn;


