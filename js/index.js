// lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin"))

const userLoginElement = document.getElementById("userLogin")

if(userLogin){
    //hiển thị tên của user đăng đăng nhập lên Headers
    userLoginElement.innerHTML = userLogin.userName
}else{
    userLoginElement.innerHTML = " "
}