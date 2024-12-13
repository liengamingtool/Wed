// script.js

// Lấy số dư từ localStorage hoặc khởi tạo nếu chưa có
let balance = parseInt(localStorage.getItem('balance')) || 0;
document.getElementById('balanceValue').textContent = formatCurrency(balance);

// Lấy lịch sử từ localStorage hoặc khởi tạo nếu chưa có
let history = JSON.parse(localStorage.getItem('history')) || [];
updateHistory();

// Lưu trữ các thẻ đã sử dụng
let usedCards = JSON.parse(localStorage.getItem('usedCards')) || [];

// Ràng buộc giá trị thẻ
const cardConstraints = {
    "Viettel": { minIDLength: 10, minSerialLength: 6 },
    "Vinaphone": { minIDLength: 10, minSerialLength: 6 },
    "Mobifone": { minIDLength: 10, minSerialLength: 6 }
};

// Hàm xử lý khi người dùng gửi form
function handleSubmit() {
    const cardID = document.getElementById('cardID').value.trim();
    const cardSerial = document.getElementById('cardSerial').value.trim();
    const cardType = document.getElementById('cardType').value;
    const cardValue = parseInt(document.getElementById('cardValue').value);

    if (!cardID || !cardSerial || !cardType || !cardValue) {
        showResult('Vui lòng nhập đầy đủ thông tin!', 'danger');
        return false;
    }

    // Ràng buộc giá trị thẻ
    const constraints = cardConstraints[cardType];
    if (!constraints) {
        showResult('Loại thẻ không hợp lệ!', 'danger');
        return false;
    }

    if (cardID.length < constraints.minIDLength || cardSerial.length < constraints.minSerialLength) {
        showResult('ID hoặc Seri không hợp lệ!', 'danger');
        return false;
    }

    if (usedCards.includes(cardID)) {
        showResult('Thẻ đã được sử dụng!', 'danger');
        return false;
    }

    // Cập nhật số dư
    balance += cardValue;
    localStorage.setItem('balance', balance);
    document.getElementById('balanceValue').textContent = formatCurrency(balance);

    // Lưu lịch sử nạp thẻ
    const historyItem = {
        date: new Date().toLocaleDateString(),
        id: cardID,
        serial: cardSerial,
        type: cardType,
        amount: cardValue
    };
    history.push(historyItem);
    localStorage.setItem('history', JSON.stringify(history));

    // Lưu thẻ đã sử dụng
    usedCards.push(cardID);
    localStorage.setItem('usedCards', JSON.stringify(usedCards));

    // Hiển thị thông báo thành công
    showSuccessAlert('Bạn đã nạp thẻ thành công!');

    // Cập nhật lịch sử nạp thẻ
    updateHistory();

    // Xóa dữ liệu form
    document.getElementById('napTheForm').reset();

    return false;
}

// Cập nhật lịch sử nạp thẻ
function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    history.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${item.date}</td><td>${item.id}</td><td>${item.serial}</td><td>${item.type}</td><td>${formatCurrency(item.amount)}</td>`;
        historyList.appendChild(row);
    });
}

// Hiển thị thông báo thành công
function showSuccessAlert(message) {
    const alertElement = document.getElementById('successAlert');
    alertElement.querySelector('p').textContent = message;
    alertElement.classList.remove('hidden');
    setTimeout(() => {
        alertElement.classList.add('hidden');
    }, 5000); // Tắt sau 5 giây
}

// Hiển thị thông báo kết quả
function showResult(message, type) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
    resultElement.className = `result ${type}`;
    resultElement.classList.remove('hidden');
    setTimeout(() => {
        resultElement.classList.add('hidden');
    }, 3000);
}

// Định dạng tiền tệ
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
// script.js

document.getElementById('navbar-toggler').addEventListener('click', () => {
    const navbarNav = document.getElementById('navbar-nav');
    navbarNav.classList.toggle('active');
});

// ... Các phần khác của JavaScript ...
