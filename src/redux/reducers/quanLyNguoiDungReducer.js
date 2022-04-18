


const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana', matKhau: '123456', hoTen: 'Nguyễn Văn A', soDienThoai: '090909090', email: 'nguyenvana@gmail.com', loaiNguoiDung: 'QuanTri' },
        { taiKhoan: 'nguyenvanb', matKhau: '988979', hoTen: 'Nguyễn Văn B', soDienThoai: '0808080808', email: 'nguyenvanb@gmail.com', loaiNguoiDung: 'NguoiDung' },
    ],
    nguoiDungSua:  { taiKhoan: 'nguyenvanb', matKhau: '988979', hoTen: 'Nguyễn Văn B', soDienThoai: '0808080808', email: 'nguyenvanb@gmail.com', loaiNguoiDung: 'NguoiDung' }
}



export const quanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DANG_KY' : {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];
            return {...state};
        }
        case 'XOA_NGUOI_DUNG': {

            state.mangNguoiDung = [...state.mangNguoiDung.filter(nd=>nd.taiKhoan !== action.taiKhoan)];

            return {...state};
        }

        case 'SUA_NGUOI_DUNG':{
            state.nguoiDungSua = action.nguoiDung;
            return {...state};
        }
        default: return state
    }
}