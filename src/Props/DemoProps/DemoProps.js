//rcc
import React, { Component } from 'react'
import CardProduct from './CardProduct'

export default class DemoProps extends Component {

    product1 = {
        id:1,
        name:'iphone',
        price:1000,
        img: "https://picsum.photos/id/1/200"
    }
    product2 = {
        id:2,
        name:'samsung',
        price:5000,
        img: "https://picsum.photos/id/20/200"
    }

    render() {
        let prod = {
            id:2,
            name:'samsung',
            price:5000,
            img: "https://picsum.photos/id/20/200"
        }

        return (
            <div className='container'>
                <div className='d-flex'>
                    <div className='w-25'>
                        <CardProduct product = {this.product1} />
                    </div>
                    <div className='w-25 ml-5'>
                        <CardProduct product = {this.product2}  />
                    </div>
                    <div className='w-25 ml-5'>
                        {/* <CardProduct  /> */}
                    </div>
                </div>

            </div>
        )
    }
}
