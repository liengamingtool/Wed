// Hàm tạo mật khẩu ngẫu nhiên với ít nhất 10 ký tự bao gồm chữ cái và số
function generatePassword(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Hàm tạo mã bảo mật 2 lớp ngẫu nhiên với 6 số
function generateSecurityCode() {
    return Math.floor(100000 + Math.random() * 900000); // 6 số ngẫu nhiên
}

// Hàm kiểm tra key
function checkKey(key) {
    const validKeys = {
        'ztekey17bs': 'Key Basic',
        'ztekey187vp': 'Key VIP',
        'ztekey17dia': 'Key DIAMOND',
        'ztekey19pre': 'Key PREMIUM'
    };
    return validKeys[key] || 'Key không có trong hệ thống';
}

// Xử lý khi người dùng nhấn vào nút kiểm tra
document.getElementById('checkKeyButton').addEventListener('click', function() {
    const keyInput = document.getElementById('keyInput').value.trim();
    const phoneInput = document.getElementById('phoneInput').value.trim();
    const resultDiv = document.getElementById('result');
    const successMessage = document.getElementById('successMessage');

    // Kiểm tra key
    const keyResult = checkKey(keyInput);

    // Kiểm tra số điện thoại có đúng định dạng của Việt Nam không
    const phoneRegex = /^0[1-9][0-9]{8}$/; // Định dạng số điện thoại Việt Nam (10 chữ số bắt đầu bằng 0)
    
    if (keyResult === 'Key không có trong hệ thống') {
        resultDiv.innerHTML = '<div class="phone-invalid">Key không có trong hệ thống.</div>';
    } else if (!phoneRegex.test(phoneInput)) {
        resultDiv.innerHTML = '<div class="phone-invalid">Số điện thoại sai. Số điện thoại phải có 10 chữ số và bắt đầu bằng 0.</div>';
    } else {
        resultDiv.innerHTML = `
            <div class="phone-valid">Số điện thoại đúng</div>
            <div>${keyResult}</div>
            <div>Mật khẩu đã đổi: ${generatePassword(10)}</div>
            <div>Mã bảo mật 2 lớp: ${generateSecurityCode()}</div>
        `;
        
        // Hiển thị thông báo thành công
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);
    }
});
