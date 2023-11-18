function createBinary() {
  const numBinaries = 3; // Ajuste este número para a quantidade desejada de números por vez

  for (let i = 0; i < numBinaries; i++) {
    const binary = document.createElement('span');
    binary.className = 'binary';
    binary.textContent = Math.random() > 0.5 ? '0' : '1';
    binary.style.left = `${Math.random() * 100}vw`;
    binary.style.top = `${Math.random() * 100}vh`;
    binary.style.animation = `fall ${(Math.random() * 2) + 1}s linear infinite`;

    setTimeout(() => {
      binary.remove();
    }, 4000);

    document.querySelector('.binary-rain').appendChild(binary);
  }

  setTimeout(createBinary, Math.random() * 1000); // Ajustei o intervalo de tempo para criar mais espaçamento entre as quedas
}

createBinary();
