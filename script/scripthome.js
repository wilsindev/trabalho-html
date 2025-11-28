// obs: () => é abreviação pra function
const botao = document.getElementById('botaoentrar')
const textoriginal = botao.innerHTML

botao.addEventListener('mouseover', () => {
    botao.innerHTML = "> Start";
});

botao.addEventListener('mouseout', () => {
    botao.innerHTML = textoriginal;
});