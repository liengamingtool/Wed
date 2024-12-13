document.getElementById('keyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const keyInput = document.getElementById('keyInput').value;
    const resultDiv = document.getElementById('result');

    let resultText = '';
    let resultClass = 'error';

    switch (keyInput) {
        case 'ztekey17bs':
            resultText = 'Key Basic';
            resultClass = 'basic';
            break;
        case 'ztekey187vp':
            resultText = 'Key VIP';
            resultClass = 'vip';
            break;
        case 'ztekey17dia':
            resultText = 'Key DIAMOND';
            resultClass = 'diamond';
            break;
        case 'ztekey19pre':
            resultText = 'Key PREMIUM';
            resultClass = 'premium';
            break;
        default:
            resultText = 'Key không có trong hệ thống';
            resultClass = 'error';
            break;
    }

    resultDiv.textContent = resultText;
    resultDiv.className = `result ${resultClass}`;
});
// script.js

function toggleDetails() {
    const content = document.getElementById('guideContent');
    const guideText = document.getElementById('guideText');
    const toggleBtn = document.getElementById('toggleBtn');
    const guideBox = document.querySelector('.guide-box');
    const isVisible = content.style.maxHeight && content.style.maxHeight !== '0px';

    if (isVisible) {
        content.style.maxHeight = '0';
        content.style.opacity = '0';
        guideText.style.color = '#000'; // Đổi màu chữ về màu đen
        toggleBtn.textContent = '+';
        guideBox.classList.remove('guide-open');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        guideText.style.color = '#6a0dad'; // Đổi màu chữ sang màu tím đậm
        toggleBtn.textContent = '-';
        guideBox.classList.add('guide-open');
    }
}
