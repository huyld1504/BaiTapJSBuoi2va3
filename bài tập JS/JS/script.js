//Bài 1: 
document.getElementById('btn-tinhTien').onclick = function() {
    //input: soNgayLam: number; tienLuong1Ngay: number; tienLuong: number;
    const tienLuong1Ngay = 100000;
    var soNgayLam = document.getElementById('soNgayLam').value;
    //output: tienLuong: number
    var tienLuong = tienLuong1Ngay*soNgayLam;
    document.getElementById('ket-qua-bai-1').innerHTML = `Số tiền lương bạn nhận được là: ${tienLuong} VND`;
}

//Bài 2:
document.getElementById('btn-tongTB').onclick = function () {
    //input: so1,so2,so3,so4,so5: number; 
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var so3 = +document.getElementById('so3').value;
    var so4 = +document.getElementById('so4').value;
    var so5 = +document.getElementById('so5').value;
    //output: tongTB: number;
    var tongTB = (so1+so2+so3+so4+so5)/5;
    document.getElementById('ket-qua-bai-2').innerHTML = `Trung bình cộng 5 số người dùng nhập vào là: ${tongTB.toFixed(2)}`;
} 

//Bài 3: 
document.getElementById('btn-doiTien').onclick = function () {
    //input: tienTe: number; tiGia: number;
    var tienTe = +document.getElementById('tienTe').value;
    const tiGia = 23500;
    //output: doiTien: number;
    var doiTien = tienTe*tiGia;
    document.getElementById('ket-qua-bai-3').innerHTML=`Tiền quy đổi sang VND của bạn là: ${doiTien} VND`
}

//Bài 4: 
document.getElementById('btn-tinhDTvaCV').onclick = function () {
    //input: cD,cR: number;
    var cD = +document.getElementById('chieuDai').value;
    var cR = +document.getElementById('chieuRong').value;
    //output: cV,dT: number;
    var cV = (cD+cR)*2;
    var dT = cD*cR;
    document.getElementById('ket-qua-bai-4-DT').innerHTML='Diện tích hình chữ nhật cần tính là:' + dT;
    document.getElementById('ket-qua-bai-4-CV').innerHTML='Chu vi hình chữ nhật cần tính là:' + cV;
}

//Bài 5:
document.getElementById('btn-tinh2KySo').onclick = function () {
    //input: soTN: number; soHangChuc,soHangDonVi: number;
    var soTN = +document.getElementById('soTN').value;
    
    //soHangChuc.toFixed(0);
    var soHangDonVi = soTN%10;
    var soHangChuc = (soTN - soHangDonVi)/10;
    //output: tong2KiSo: number;
    document.getElementById('ket-qua-bai-5').innerHTML = 'Tổng 2 kí số là: ' + (soHangChuc+soHangDonVi);
} 