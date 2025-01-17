import React from 'react'

const  Cartbutton= ({className= '', title='Add to Cart'}) => {
    return ( 
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition pb-3">
        {title}
        </button>
    );
}
 
export default Cartbutton;

