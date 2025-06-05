//obter referencias aos botoes do tema e da pagina
const botaoClaro = document.getElementById('temaClaro');
const botaoEscuro = document.getElementById('temaEscuro');
const botaoOffwhite = document.getElementById('temaOffwhite');
const body = document.body;

//define uma chave para armazenar a preferencia do tema no localStorage
const chaveTema = 'preferenciaTema';

//funcao para aplicar um tema especifico ao corpo da pagina

function aplicarTema(tema){
    body.classList.remove('tema-claro','tema-escuro','tema-OffWhite');
    body.classList.add(`tema-${tema}`);
    //salva a preferencia do tema no localStorage
    localStorage.setItem(chaveTema,tema);
}

//verificar se ja existe uma preferencia de tema salva no localStorage ao carregar a pagina
const temaSalvo = localStorage.getItem(chaveTema);

if(temaSalvo){
    aplicarTema(temaSalvo);
}else{
    aplicarTema('claro');
}

//adiciona um evento de clique ao botao 'claro'
botaoClaro.addEventListener('click', ()=>{
    //quando o boato for clicado, chama a funcao para aplicar o tema claro
    aplicarTema('claro');
});

//adiciona um evento de clique ao botao 'ecuro'
botaoEscuro.addEventListener('click', ()=>{
    //quando o boato for clicado, chama a funcao para aplicar o tema escuro
    aplicarTema('escuro');
});

botaoOffwhite.addEventListener('click', ()=>{
    //quando o boato for clicado, chama a funcao para aplicar o tema escuro
    aplicarTema('OffWhite');
});