import React from 'react'
import Row from './Row';
import Button from './Button';

const QtyContainer = () => {
    return ( 
        <Row className="items-center justify-center">
        <Button title="-" />
        <p className="w-[70px] mx-4 text-[16px] text-center font-semibold text-black">0</p>
        <Button title="+" />
    </Row>
     );
}
 
export default QtyContainer;





