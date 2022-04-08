import React, { Component } from 'react'

//Kết nối redux
import {connect} from 'react-redux';


class BaiTapChonXeRedux extends Component {


    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <h3>Bài tập chọn xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.props.imgCar} alt='...' className='w-100' />
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-3'>
                                <button 
                                onClick={()=>{
                                    this.props.changeColor('red')
                                }}
                                className='btn' style={{backgroundColor:'red',color:'#fff'}}>Red</button>
                            </div>
                            <div className='col-3'>
                                <button
                                 onClick={()=>{
                                    this.props.changeColor('black')
                                }}
                                className='btn' style={{backgroundColor:'black',color:'#fff'}}>black</button>
                            </div>
                            <div className='col-3'>
                                <button
                                 onClick={()=>{
                                    this.props.changeColor('silver')
                                }}
                                className='btn' style={{backgroundColor:'silver',color:'#fff'}}>Silver</button>
                            </div>
                            <div className='col-3'>
                                <button 
                                 onClick={()=>{
                                    this.props.changeColor('steel')
                                }}
                                className='btn' style={{backgroundColor:'#EEE',color:'#fff'}}>Steel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Định nghĩa hàm lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
    return {
        imgCar:rootReducer.stateImgCar
    }
}


//Định nghĩa hàm gửi dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {

    return {
        changeColor : (newColor) => {
            // console.log('newColor',newColor);
            const action = {
                type:'CHANGE_COLOR',
                newColor
            }
            //Đưa dữ liệu lên store
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(BaiTapChonXeRedux)



