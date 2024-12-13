document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu khớp nhau
    if (password !== confirmPassword) {
        messageDiv.textContent = 'Mật khẩu và xác nhận mật khẩu không khớp!';
        messageDiv.style.color = '#dc3545'; // Đỏ
        return;
    }

    // Lưu thông tin vào localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Hiển thị thông báo thành công và chuyển hướng
    messageDiv.textContent = 'Đăng ký thành công!';
    messageDiv.style.color = '#28a745'; // Xanh lá cây

    setTimeout(function() {
        window.location.href = 'login.html'; // Chuyển hướng đến trang đăng nhập
    }, 2000); // Chờ 2 giây trước khi chuyển hướng
});
