// Kiểm tra xem người dùng đã đăng nhập chưa
window.onload = function() {
    if (localStorage.getItem('username')) {
        window.location.href = 'index.html'; // Chuyển hướng đến trang chính nếu đã đăng nhập
    }
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true'); // Đánh dấu đã đăng nhập
        loginMessage.textContent = 'Đăng nhập thành công!';
        loginMessage.className = 'message success'; // Hiển thị thông báo thành công
        loginMessage.style.display = 'block';

        setTimeout(function() {
            window.location.href = 'index.html'; // Chuyển hướng đến trang chính
        }, 2000); // Chờ 2 giây trước khi chuyển hướng
    } else {
        loginMessage.textContent = 'Tên đăng nhập hoặc mật khẩu không chính xác!';
        loginMessage.className = 'message error'; // Hiển thị thông báo lỗi
        loginMessage.style.display = 'block';
    }
});

// Chuyển đổi hiển thị mật khẩu
document.getElementById('toggleLoginPassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('loginPassword');
    const toggleButton = document.getElementById('toggleLoginPassword');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleButton.classList.replace('fa-eye-slash', 'fa-eye');
    }
});
    