import React, { useState } from 'react'

export default function TangGiamFontChu(props) {

    const [fSize, setFSize] = useState(16);

    return (
        <div>
            <p style={{fontSize:fSize+'px'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa illum consectetur fuga ipsam praesentium similique ipsum, quas iure vitae aliquam nulla voluptatum, qui exercitationem labore aspernatur! Fugit, expedita recusandae.
            </p>
            <br />
            <button className='btn btn-primary' onClick={()=>{
                setFSize(fSize + 2);
            }}>+</button>
            <button className='btn btn-primary ml-2' onClick={()=>{
                setFSize(fSize - 2);

            }}>-</button>
        </div>
    )
}
