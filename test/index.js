document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const fullName = localStorage.getItem('fullName');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Nếu không có thông tin đăng nhập, chuyển hướng đến trang đăng nhập
    if (!username || !password) {
        window.location.href = 'login.html';
        return;
    }

    // Hiển thị thông tin họ và tên
    welcomeMessage.textContent = `Chào mừng, ${fullName}! Bạn đã đăng nhập thành công!`;
});
