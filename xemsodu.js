// xemsodu.js

// Lấy số dư từ localStorage
let balance = parseInt(localStorage.getItem('balance')) || 0;
document.getElementById('balanceValue').textContent = balance;
