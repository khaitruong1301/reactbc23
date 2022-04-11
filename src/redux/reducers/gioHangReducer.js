

const stateDefault = [
    // {maSP:1,tenSP:'Iphone',hinhAnh:'./img/products/black-car.jpg',giaBan:1000,soLuong:1}
]; // 00xx


export const gioHangReducer = (state = stateDefault,action) => {
    switch(action.type) {
        case 'THEM_GIO_HANG': {
            let gioHang = state;
            //Kiểm tra action.spGH có trong giỏ hàng hay chưa
            let sp = gioHang.find(sp=>sp.maSP === action.spGH.maSP);
            if(sp) {
                sp.soLuong += 1;
            }else {
                gioHang.push(action.spGH);
                console.log('gioHang',gioHang);
            }
            //immutable: tính bất biến
            //Đới với state là object hoặc array phải clone ra object array mới
            return [...gioHang]; //00xx
        }

        case 'XOA_GIO_HANG': {
            let gioHang = [...state];
            gioHang = gioHang.filter(sp=>sp.maSP !== action.maSPClick);

            return gioHang;
        }

        case 'TANG_GIAM_SO_LUONG': {
            let gioHang = [...state];
            //Tìm ra sp cần tăng giảm
            let sp = gioHang.find(spGH => spGH.maSP === action.maSPClick);
            if(sp){
                sp.soLuong += action.soLuong;
                if(sp.soLuong < 1) {
                    alert('Số lượng không được nhỏ hơn 1');
                    sp.soLuong -= action.soLuong;
                    return gioHang;
                }

            }
            return gioHang;
        }

        default: return state; //00xx
    }


}