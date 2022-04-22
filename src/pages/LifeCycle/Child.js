import React, { Component, PureComponent } from 'react'

/*
    PureComponent giống hệt Component tuy nhiên không có lifecycle shouldcomponentupdate (Vì react sẽ tự xử lý nhận biết props thay đổi hay không giúp mình).
    Lưu ý: Sự nhận biết các props của Purecomponent chỉ ở mức shallow compare (Nhận biết props trước khi thay đổi và sau khi thay đổi có giống nhau không ở kiểu dữ liệu primitive value (number,string,boolean, null, undefine) )
*/
export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child');
    }


    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDedrivedStateFromProps child')
        return currentState;
    }
    // shouldComponentUpdate(newProps, newState) {
    //     //this.props là props hiện tại của component
    //     //newProps là props mới nhận của component trước khi render
    //     console.log('this.props.number',this.props.number);
    //     console.log('newProps',newProps.number);
    //     console.log('shouldComponentUpdate child')
    //     if(this.props.number !== newProps.number) {
    //         return true;
    //     }
    //     return false;
    // }
    render() {
        console.log('render child')
        return (
            <div>

                <h3>Child component</h3>
                <h3>Number props: {this.props.object.number}</h3>
            </div>
        )
    }

    timeout ={};
    componentDidMount() {

      this.timeout =  setInterval(() => {
            console.log('hello cybersoft!');
        }, 3000);

        console.log('componentDidMount child');
    }

    componentDidUpdate(){
        console.log('componentDidupdate child')
    }

    componentWillUnmount(){
        //Hàm gọi trước khi component mất khỏi giao diện
        //Lifecycle dùng để clear các service chạy ngầm của component
        clearInterval(this.timeout);
    }
}
