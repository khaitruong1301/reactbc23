//rcc
import React, { Component } from 'react'
import ChiTietSanPham from './ChiTietSanPham'
import SanPham from './SanPham'

export default class BaiTapXemChiTiet extends Component {

    arrPhone = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        spChiTiet:  { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" }
    }

    //Thiết kế giao diện
    //binding dữ liệu arrayPhone lên giao diện
    renderProduct = () => {
        return this.arrPhone.map((phone,index) =>{
            return <div className='col-4' key={index}>
            <SanPham phone={phone} xemChiTiet={this.xemChiTiet} />
        </div>
        })
    }

    xemChiTiet = (sanPhamClick) => {
        console.log('sanPhamClick',sanPhamClick);
        //setState thay đổi spChiTiet
        this.setState({
            spChiTiet: sanPhamClick
        })
    }
    render() {
        let {maSP,tenSP,giaBan,hinhAnh,heDieuHanh,manHinh,ram,rom,cameraSau,cameraTruoc} = this.state.spChiTiet;
        // let p = document.createElement('p');
        // console.log('the p',p);
        // console.log(<p></p>)
        return (
            <div className='container'>
                <h3 className='text-center'>Danh sách sản phẩm</h3>
                <div className='row'>
                    {this.renderProduct()}    
                </div>
                
                <ChiTietSanPham spChiTiet={this.state.spChiTiet} />
            </div>
        )
    }
}
