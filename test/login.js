document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const messageDiv = document.getElementById('message');

    // Kiểm tra thông tin đăng nhập
    if (username === storedUsername && password === storedPassword) {
        messageDiv.textContent = 'Đăng nhập thành công!';
        messageDiv.style.color = '#28a745'; // Xanh lá cây

        // Chuyển hướng đến trang chính
        setTimeout(function() {
            window.location.href = 'index.html'; // Chuyển hướng đến trang chính
        }, 2000); // Chờ 2 giây trước khi chuyển hướng
    } else {
        messageDiv.textContent = 'Tên đăng nhập hoặc mật khẩu không đúng!';
        messageDiv.style.color = '#dc3545'; // Đỏ
    }
});
