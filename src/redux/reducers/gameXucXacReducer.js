

const stateDefault = {
    banChon: false, //true : Tài, false:Xỉu
    soBanThang: 10,
    tongSoBanChoi: 20,
    mangXucXac: [
        { hinhAnh: './img/gameXucXac/6.png', diem: 6 },
        { hinhAnh: './img/gameXucXac/6.png', diem: 6 },
        { hinhAnh: './img/gameXucXac/6.png', diem: 6 },
    ]
} //00xxx

export const gameXucXacReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state }; //0zzz
        }
        case 'PLAY_GAME': {
            //Random 3 xúc xắc
            let mangXucXacNgauNhien = [];
            for (let i = 1; i <= 3; i++) {
                //Mỗi lần lặp sẽ tạo ra 1 con số ngẫu nhiên từ hàm js
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
                let xxnn = { hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`, diem: soNgauNhien };
                //Đưa xxnn vào mangXucXacNgauNhien
                mangXucXacNgauNhien.push(xxnn);
            }
            state.mangXucXac = mangXucXacNgauNhien;
            //Tính tổng điểm = cách duyệt qua từng object xúc xắc trong mảng xúc xắc ngẫu nhiên và lấy điểm cộng dồn vào tổng điểm
            let tongDiem = 0;
            for (let xucXac of mangXucXacNgauNhien) {
                tongDiem += xucXac.diem;
            }

            //Xử lý thắng thua
            if((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)) {
                state.soBanThang += 1;
            }
            //Tăng tổng số bàn chơi
            state.tongSoBanChoi += 1;
            return { ...state };
        }

        default: return state;
    }
}