import React, { Component } from 'react'
//Kết nối redux
import {connect} from 'react-redux';
 class TangGiamSoLuong extends Component {
    // state = {number: 1}
    render() {
    console.log(this.props);

    return (
      <div className='container'>
          <p>{this.props.number}</p>
          <button onClick={()=>{

          }}>+</button>
          <button onClick={()=> {

          }}>-</button>
      </div>
    )
  }
}

//Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => { //state tổng của ứng dụng
    return {
        number: rootReducer.stateNumber
    }
}
//Hàm định props gửi dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamSoLuong: () =>{
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TangGiamSoLuong); 

