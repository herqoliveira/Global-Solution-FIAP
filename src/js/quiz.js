document.getElementById('quizForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita envio automático do formulário

  const totalPerguntas = 10;
  let respondidas = 0;
  let acertos = 0;

  for (let i = 1; i <= totalPerguntas; i++) {
    const opcoes = document.getElementsByName('q' + i);
    let selecionado = false;

    for (const opcao of opcoes) {
      if (opcao.checked) {
        selecionado = true;
        if (opcao.value === 'certo') {
          acertos++;
        }
      }
    }

    if (selecionado) {
      respondidas++;
    }
  }

  if (respondidas < totalPerguntas) {
    alert('Responda todas as perguntas antes de finalizar o quiz.');
    return;
  }

  // Exibir resultado
  document.getElementById('resultado').textContent = `Você acertou ${acertos}/${totalPerguntas}!`;
});
