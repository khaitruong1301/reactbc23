//rcc
import React, { Component } from 'react'

export default class ProductItem extends Component {



    render() {
        //Phân biệt state và props
        /*
            + Giống nhau: Đây là 2 thuộc tính có sẵn của react class component để binding dữ liệu lện giao diện (html)
            + Khác nhau: 
                - state dùng để chứa dữ liệu thay đổi trên giao diện từ 1 event (1 xử lý từ người dùng). state có thể gán lại giá trị thông qua phương thức this.setState
                - props là thuộc tính chứa giá trị từ component cha truyền vào. this.props không thể thay đổi giá trị (readonly)
        */
        let {prod} = this.props;
        //es5
        // let prod = this.props.prod;

        return (
            <div className='card'>
                <div className='d-flex justify-content-center'>
                    <img src={prod.image} alt='...' width={200} />
                </div>
                <div className='card-body'>
                    <p>{prod.name}</p>
                    <p>{prod.price} $</p>
                    <button className='bg-dark text-white btn'>+ Add to carts</button>
                </div>
            </div>
        )
    }
}
