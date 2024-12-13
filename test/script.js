// script.js

document.addEventListener('DOMContentLoaded', function () {
    const chatToggleButton = document.getElementById('toggleChat');
    const liveChat = document.getElementById('liveChat');
    const closeChatButton = document.getElementById('closeChat');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const messagesContainer = document.getElementById('messages');
    const typingIndicator = document.getElementById('typingIndicator');
    const localStorageKey = 'chatMessages';
    let typingTimeout;
    let adminTypingTimeout;

    // Hiển thị/hide chat
    chatToggleButton.addEventListener('click', function () {
        liveChat.style.display = liveChat.style.display === 'none' || !liveChat.style.display ? 'flex' : 'none';
    });

    // Đóng chat
    closeChatButton.addEventListener('click', function () {
        liveChat.style.display = 'none';
    });

    // Tải tin nhắn từ localStorage
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        messages.forEach(message => {
            addMessage(message.content, message.type);
        });
    }

    // Lưu tin nhắn vào localStorage
    function saveMessage(content, type) {
        const messages = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        messages.push({ content, type });
        localStorage.setItem(localStorageKey, JSON.stringify(messages));
    }

    // Thêm tin nhắn vào khung chat
    function addMessage(content, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);

        const iconElement = document.createElement('div');
        iconElement.classList.add('message-icon');
        iconElement.textContent = type === 'admin' ? '👤' : '💬';

        const contentElement = document.createElement('div');
        contentElement.classList.add('message-content');
        contentElement.innerHTML = content;

        messageElement.appendChild(iconElement);
        messageElement.appendChild(contentElement);
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Tự động cuộn xuống tin nhắn mới
    }

    // Phản hồi tin nhắn tự động
    function respondToMessage() {
        addMessage('Vui lòng dán link này vào trình duyệt hoặc bấm vào đây : <a href="https://t.me/dichvucodegiare" class="admin-link" target="_blank">Liên hệ admin</a>', 'admin');
        saveMessage('Vui lòng dán link này vào trình duyệt hoặc bấm vào <a href="https://t.me/dichvucodegiare" class="admin-link" target="_blank">Liên hệ admin</a>', 'admin');
    }

    // Gửi tin nhắn
    function sendChatMessage() {
        const messageContent = messageInput.value.trim();
        if (messageContent) {
            addMessage(messageContent, 'user');
            saveMessage(messageContent, 'user');
            messageInput.value = '';
            typingIndicator.style.display = 'none'; // Ẩn chỉ báo "đang soạn tin nhắn"
            clearTimeout(adminTypingTimeout);
            adminTypingTimeout = setTimeout(() => {
                typingIndicator.style.display = 'flex';
                typingTimeout = setTimeout(() => {
                    typingIndicator.style.display = 'none';
                    respondToMessage();
                }, 5000); // Phản hồi sau 5 giây
            }, 500);
        }
    }

    // Sự kiện gửi tin nhắn
    sendMessage.addEventListener('click', sendChatMessage);
    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendChatMessage();
        }
    });

    // Tải tin nhắn khi trang được tải lại
    loadMessages();
        // Menu toggle
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
});

