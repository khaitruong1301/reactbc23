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
              this.props.tangGiamSoLuong(1);
          }}>+</button>
          <button onClick={()=> {
              this.props.tangGiamSoLuong(-1);

          }}>-</button>
      </div>
    )
  }
}
//Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => { //state tổng của ứng dụng //Tạo ra các props cho component là giá trị
    return {    
        number: rootReducer.stateNumber
    }
}

//Định nghĩa 1 hàm mapDispatchToProps => Nhiệm vụ: Tạo ra các props cho component là hàm 
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamSoLuong: (soLuong) => {
            // console.log(soLuong)
            //Để gửi dữ liệu lên redux (action)
            const action = {
                type:'TANG_GIAM_SO_LUONG',// redux bắt buộc phải có
                soLuong: soLuong
            }
            //Đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}

//Cú pháp kết nối giữa react component và redux 
export default connect(mapStateToProps,mapDispatchToProps)(TangGiamSoLuong); 

