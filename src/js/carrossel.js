let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('ativo');
    if (i === index) {
      slide.classList.add('ativo');
    }
  });
}

function proximoSlide() {
  slideAtual = (slideAtual + 1) % totalSlides;
  mostrarSlide(slideAtual);
}

function voltarSlide() {
  slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
  mostrarSlide(slideAtual);
}

// Inicializar primeiro slide
mostrarSlide(slideAtual);

// Troca automática a cada 20 segundos
setInterval(proximoSlide, 20000);
