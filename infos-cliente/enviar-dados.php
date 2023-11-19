<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "meu_banco_dados";

// Cria conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Recebe os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];

// Insere os dados no banco de dados
$sql = "INSERT INTO usuarios (nome, email) VALUES ('$nome', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Dados inseridos com sucesso!";
} else {
    echo "Erro ao inserir dados: " . $conn->error;
}

$conn->close();
?>
