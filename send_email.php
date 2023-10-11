<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Formdan gelen verileri al
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // E-posta gönderimi için gerekli ayarlar
  $to = "dondurmailknur1@gmail.com.com"; // E-postanın gönderileceği hedef e-posta adresi
  $subject = "Yeni İletişim Mesajı"; // E-posta konusu
  $headers = "From: " . $name . " <" . $email . ">\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // E-posta içeriği
  $emailContent = "İsim: " . $name . "\n";
  $emailContent .= "E-posta: " . $email . "\n\n";
  $emailContent .= "Mesaj:\n" . $message;

  // E-postayı gönder
  if (mail($to, $subject, $emailContent, $headers)) {
    http_response_code(200);
    echo "E-posta başarıyla gönderildi.";
  } else {
    http_response_code(500);
    echo "E-posta gönderilirken bir hata oluştu.";
  }
} else {
  http_response_code(400);
  echo "Geçersiz istek.";
}
?>
