function finalizarQuiz() {
  const respostasCorretas = {
    q1: 'c',
    q2: 'b',
    q3: 'c',
    q4: 'b',
    q5: 'c',
    q6: 'b',
    q7: 'c',
    q8: 'b',
    q9: 'c',
    q10: 'b'
  };

  let acertos = 0;

  for (let pergunta in respostasCorretas) {
    const respostaSelecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
    if (respostaSelecionada && respostaSelecionada.value === respostasCorretas[pergunta]) {
      acertos++;
    }
  }

  const resultado = document.getElementById('resultado');
  resultado.textContent = `Você acertou ${acertos}/10!!`;
}
