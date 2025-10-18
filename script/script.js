const botao = document.getElementById('botao')
const textoriginal = botao.innerHTML

botao.addEventListener('mouseover', ()=> {
    botao.innerHTML = "> Entrar";
});

botao.addEventListener('mouseout', () => {
    botao.innerHTML = textoriginal
})