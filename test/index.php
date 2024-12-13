<?php
header('Content-Type: application/json');

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Thực hiện kiểm tra đăng nhập ở đây. Ví dụ:
if ($email === 'test@example.com' && $password === 'password123') {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Email hoặc mật khẩu không đúng']);
}
?>
