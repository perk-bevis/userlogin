const formRegisters = document.getElementById("formRegister")


const userNameElement = document.getElementById("username")

const emailElement = document.getElementById("email")

const passwordElement = document.getElementById("password")

const rePasswordElement = document.getElementById("rePassword")

const addressElement = document.getElementById("address")

const userNameError = document.getElementById("userNameError")
const emailError = document.getElementById("emailError")

const passwordError = document.getElementById("passwordError")

const rePasswordError = document.getElementById("rePasswordError")


// lấy dữ liệu từ localstorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// lắng nghe sk đăng ký tài khoản

formRegisters.addEventListener("submit" ,function(e){
    // ngăn chặn sk load lại trang
    e.preventDefault();
    //validate giá trị đầu vào
    if(!userNameElement.value){
        // hiển thị lỗi
        userNameError.style.display = "block"
    }else{
        userNameError.style.display = "none"
    }

    if(!emailElement.value){
        // hiển thị lỗi
        emailError.style.display = "block"
    }else{
        emailError.style.display = "none"
        if(!validateEmail(emailElement.value)){
            emailError.style.display = "block"
            emailError.innerHTML = "email không đúng định dạng"
        }
    }

    if(!passwordElement.value){
        // hiển thị lỗi
        passwordError.style.display = "block"
    }else{
        passwordError.style.display = "none"
    }

    if(!rePasswordElement.value){
        // hiển thị lỗi
        rePasswordError.style.display = "block"
    }else{
        rePasswordError.style.display = "none"
    }
    // kiểm tra mật khẩu khớp chưa
    if(passwordElement.value !== rePasswordElement.value){
        rePasswordError.style.display = "block"
        rePasswordError.innerHTML = "mật khẩu không khớp"
    }

    // gửi dữ liệu từ form lên localstorage
    if(userNameElement.value && emailElement.value && passwordElement.value && rePasswordElement.value && passwordElement.value === rePasswordElement.value && validateEmail(emailElement.value)){
        //lấy dữ liệu từ form và gộp thành đối tượng user
        const user = {
            userId: Math.ceil(Math.random() * 100000000),
            userName: userNameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
            address: addressElement.value,
        }

        // PUSH user vào trong mảng userLocal
        userLocal.push(user)

        // lưu trữ dữ liệu lên local
        localStorage.setItem("users", JSON.stringify(userLocal))

        setTimeout(function(){
            // chuyển hướng về trang đăng nhập
            window.location.href = "login.html"
        }, 1000)
    }
});