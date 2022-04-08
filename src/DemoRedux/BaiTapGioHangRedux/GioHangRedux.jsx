import React, { Component } from 'react'
//Kết nối redux
import {connect} from 'react-redux';

class GioHangRedux extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className='text-right'>
                    <span className='text-danger font-weight-bold'>Giỏ hàng(0)</span>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá bán</th>
                            <th>Số lượng</th>
                            <th>Thành tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.stateGioHang.map((spGH,index)=>{
                            return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td>{spGH.tenSP}</td>
                            <td><img src={spGH.hinhAnh} width={50} height={50} alt="..." /></td>
                            <td>{spGH.giaBan}</td>
                            <td>{spGH.soLuong}</td>
                            <td>{spGH.giaBan * spGH.soLuong}</td>
                            <td>
                                <button onClick={()=>{
                                    this.props.xoaGioHang(spGH.maSP)
                                }} className='btn btn-danger'>Xoá</button>
                            </td>
                        </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
//Định nghĩa hàm mapStateToProps lấy dữ liệu redux về
const mapStateToProps  = (rootReducer) => {
    return {
        stateGioHang: rootReducer.gioHangReducer
    }
}

//Định nghĩa sự kiện xoá giỏ hàng 
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            //Tạo ra action gửi lên redux
            const action = {
                type:'XOA_GIO_HANG',
                maSPClick
            }
            //Đưa dữ liệu lên redux
            dispatch(action);
        },
        tangGiamSoLuong : (maSPClick,soLuong) => {
            //Xử lý
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux);