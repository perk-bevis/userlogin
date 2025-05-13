const formLogin = document.getElementById("formLogin")
const emailLogin = document.getElementById("emailLogin")
const passwordLogin = document.getElementById("passwordLogin")
const emailLoginError = document.getElementById("emailLoginError")
const passwordLoginError = document.getElementById("passwordLoginError")
const alertError = document.getElementById("alertError")

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    //validate du lieu dau vao
    if (!emailLogin.value) {
        // hiển thị lỗi
        emailLoginError.style.display = "block"
    } else {
        emailLoginError.style.display = "none"
        if (!validateEmail(emailLogin.value)) {
            emailLoginError.style.display = "block"
            emailLoginError.innerHTML = "email không đúng định dạng"
        }
    }

    if (!passwordLogin.value) {
        // hiển thị lỗi
        passwordLoginError.style.display = "block"
    } else {
        passwordLoginError.style.display = "none"
    }
    // lấy dữ liệu từ local về
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];
    //tìm kiếm email và mật khẩu người dùng nhập vào có tồn tại trên local ko
    const findUser = userLocal.find(user => user.email === emailLogin.value && user.password === passwordLogin.value)
    if (!findUser) {
        //nếu ko thì yc nhập lại
        alertError.style.display = "block"
    } else {
        //nếu có thì đăng nhập thì công và chuyển về trang chủ
        window.location.href = "index.html"

        // lưu thông tin đăng nhập của user lên local
        localStorage.setItem("userLogin", JSON.stringify(findUser))
    }
})