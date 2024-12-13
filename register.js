// Kiểm tra xem người dùng đã đăng nhập chưa
window.onload = function() {
    if (localStorage.getItem('username')) {
        window.location.href = 'index.html'; // Chuyển hướng đến trang chính nếu đã đăng nhập
    }
};

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const formMessage = document.getElementById('formMessage');
    const passwordHelp = document.getElementById('passwordHelp');

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu khớp nhau
    if (password !== confirmPassword) {
        formMessage.textContent = '';
        passwordHelp.textContent = 'Mật khẩu và xác nhận mật khẩu không khớp!';
        passwordHelp.className = 'message error'; // Hiển thị thông báo lỗi cho mật khẩu
        passwordHelp.style.display = 'block';
        return;
    }

    // Kiểm tra mật khẩu
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
        formMessage.textContent = '';
        passwordHelp.textContent = 'Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm cả chữ cái và số!';
        passwordHelp.className = 'message error'; // Hiển thị thông báo lỗi cho mật khẩu
        passwordHelp.style.display = 'block';
        return;
    }

    // Lưu thông tin vào localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    formMessage.textContent = 'Đăng ký thành công! vui lòng chờ....';
    formMessage.className = 'message success'; // Hiển thị thông báo thành công
    formMessage.style.display = 'block';

    setTimeout(function() {
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập
    }, 2000); // Chờ 2 giây trước khi chuyển hướng
});

// Chuyển đổi hiển thị mật khẩu
function togglePasswordVisibility(inputId, buttonId) {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(buttonId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleButton.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

document.getElementById('togglePassword').addEventListener('click', function() {
    togglePasswordVisibility('password', 'togglePassword');
});

document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    togglePasswordVisibility('confirmPassword', 'toggleConfirmPassword');
});
