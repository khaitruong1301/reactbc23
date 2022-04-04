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

                    <button onClick={()=>{
                        this.props.themGioHang(phone)
                    }}className='btn btn-danger ml-2'> <i className="fa fa-cart-arrow-down mr-2"></i>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
