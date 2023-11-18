function createBinary() {
  const numBinaries = 15; // Altere este número para ajustar a quantidade de números por vez

  for (let i = 0; i < numBinaries; i++) {
    const binary = document.createElement('span');
    binary.className = 'binary';
    binary.textContent = Math.random() > 0.5 ? '0' : '1';
    binary.style.left = `${Math.random() * 100}vw`;
    binary.style.top = `${Math.random() * 100}vh`;
    binary.style.animation = `fall ${(Math.random() * 3) + 1}s linear infinite`;

    setTimeout(() => {
      binary.remove();
    }, 7000);

    document.querySelector('.binary-rain').appendChild(binary);
  }

  setTimeout(createBinary, Math.random() * 500);
}

createBinary();
