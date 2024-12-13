// Hàm tạo mật khẩu ngẫu nhiên với ít nhất 10 ký tự bao gồm chữ cái và số
function generatePassword(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Xử lý khi người dùng nhấn vào nút kiểm tra key
document.getElementById('checkKeyButton').addEventListener('click', function() {
    const keyInput = document.getElementById('keyInput').value.trim();
    const idInput = document.getElementById('idInput').value.trim();
    const resultDiv = document.getElementById('result');
    const successMessage = document.getElementById('successMessage');
    
    let resultHtml = '';

    // Kiểm tra độ dài ID
    if (idInput.length !== 15 || isNaN(idInput)) {
        resultHtml = '<div class="key-error">ID sai. ID phải có 15 số.</div>';
    } else {
        switch(keyInput) {
            case 'ztekey17bs':
                resultHtml += '<div class="key-basic">Key BASIC</div>';
                resultHtml += '<div>ID Facebook: ' + idInput + '</div>';
                resultHtml += '<div>Mật khẩu đã đổi: ' + generatePassword(10) + '</div>';
                break;
            case 'ztekey187vp':
                resultHtml += '<div class="key-vip">Key VIP</div>';
                resultHtml += '<div>ID Facebook: ' + idInput + '</div>';
                resultHtml += '<div>Mật khẩu đã đổi: ' + generatePassword(10) + '</div>';
                break;
            case 'ztekey17dia':
                resultHtml += '<div class="key-diamond">Key DIAMOND</div>';
                resultHtml += '<div>ID Facebook: ' + idInput + '</div>';
                resultHtml += '<div>Mật khẩu đã đổi: ' + generatePassword(10) + '</div>';
                break;
            case 'ztekey19pre':
                resultHtml += '<div class="key-premium">Key PREMIUM</div>';
                resultHtml += '<div>ID Facebook: ' + idInput + '</div>';
                resultHtml += '<div>Mật khẩu đã đổi: ' + generatePassword(10) + '</div>';
                break;
            default:
                resultHtml += '<div class="key-error">Key không có trong hệ thống</div>';
                break;
        }
        
        // Hiển thị thông báo thành công
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);
    }

    resultDiv.innerHTML = resultHtml;
});
