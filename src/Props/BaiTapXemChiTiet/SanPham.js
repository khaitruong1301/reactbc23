//rcc

import React, { Component } from 'react'

export default class SanPham extends Component {


    render() {
        let {phone} = this.props;
        return (
            <div className='card'>
                <img src={phone.hinhAnh} alt='...' className='w-full' height={300} />
                <div className='card-body'>
                    <p>{phone.tenSP}</p>
                    <p>{phone.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={() => {
                        this.props.xemChiTiet(phone)
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
