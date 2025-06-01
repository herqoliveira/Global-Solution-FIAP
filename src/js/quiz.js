function finalizarQuiz() {
  const respostasCorretas = {
    q1: 'a',
    q2: 'c',
    q3: 'b',
    q4: 'd',
    q5: 'c',
    q6: 'b',
    q7: 'a',
    q8: 'd',
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
