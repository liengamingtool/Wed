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
    welcomeMessage.textContent = `Xin chào, ${fullName}!`;
});
// script.js

function updateOnlineUsers() {
    const onlineUsersElement = document.getElementById('online-users');
    let currentValue = parseInt(onlineUsersElement.innerText);
    if (currentValue < 7000) {
        currentValue += Math.floor(Math.random() * 10) + 1; // tăng dần giá trị
        if (currentValue > 7000) {
            currentValue = 7000;
        }
        onlineUsersElement.innerText = currentValue;
    } else {
        currentValue = 10;
        onlineUsersElement.innerText = currentValue;
    }
}

setInterval(updateOnlineUsers, 100);


