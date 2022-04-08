import React, { Component } from 'react'
import {connect} from 'react-redux';
 class SanPhamRedux extends Component {
  render() {
    let {sanPham} = this.props;
    return (
      <div className='card'>
        <img src={sanPham.hinhAnh} alt='...' height={350} />
        <div className='card-body'>
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan}</p>
          <button className='btn btn-danger' onClick={()=>{
            this.props.themGioHang(sanPham);
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {

  }
}


const mapDispatchToProps = (dispatch) => {
  return  {
    themGioHang: (sanPhamClick) => {
      // console.log({sanPhamClick});
      let spGH = {...sanPhamClick,soLuong:1};
      //Tạo ra action gửi lên redux
      const action = {
        type:'THEM_GIO_HANG',
        spGH
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SanPhamRedux)

