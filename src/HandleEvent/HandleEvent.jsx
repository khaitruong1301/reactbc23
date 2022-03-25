//rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showMess = () => {
        alert('Hello hello')
    }

    sayHello = (name) => {
        alert('hello !!! ' + name)
    }

    render() {
        return (
            <div className='container'>
                <button onClick={this.showMess}>Click me!</button>
                <button onClick={() => {
                    alert('Hello hello')
                }}>Click me!</button>
                <hr />
                <button onClick={this.sayHello.bind(this,'Tùng')}>Say hello</button>
                <button onClick={() => {
                    this.sayHello('Khải');
                    //gọi nhiều hàm hơn nữa
                }}>Say hello</button>
            </div>
        )
    }
}


// function main () {

//     return function() {
//         alert(123);
//     };
// }

// let result = main();
// result();