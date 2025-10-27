
const mapas = ['imgs/forgottencross.svg', 'imgs/greenpath.svg', 'imgs/ermosfungicos.svg', 'imgs/cityoftears.svg', 'imgs/crystalpeak.svg', 'imgs/royalwaterways.svg', 'imgs/ancientbasin.svg', 'imgs/deepnest.svg' ,'imgs/kingdomsedge.svg', 'imgs/theabyss.svg', 'imgs/queengarden.svg', 'imgs/thehive.svg', 'imgs/fogycanyon.svg']
let imagematual = 0
const map = document.getElementById("map");
const direita = document.getElementById("setadireita");
const esquerda = document.getElementById("setaesquerda")
const text = document.getElementById('text')

function passarimagem(){
    // Troca para a próxima imagem. Se for a última, volta para a primeira
    imagematual = (imagematual + 1) % mapas.length;
    map.src = mapas[imagematual]
    descricao();

}
function imagemanterior() {
    // soma com o tamanho pra evitar numeros negativos
    imagematual = (imagematual - 1 + mapas.length) % mapas.length;
    map.src = mapas[imagematual];
    descricao();
}
function descricao(){
    const mapa_atual = mapas[imagematual]
    if(mapa_atual == 'imgs/forgottencross.svg'){
        text.innerHTML = 'Localizada logo abaixo da superfície, a Encruzilhada Esquecida consiste em muitas cavernas e estradas. Restos fossilizados de insetos cobrem a superfície das cavernas, com samambaias claras crescendo através de rachaduras no solo'
    }
    else if(mapa_atual == 'imgs/greenpath.svg'){
        text.innerHTML = 'Greenpath é uma caverna verdejante, composta por vegetação diversificada, vales cobertos de musgo e amplos lagos ácidos. Essas características refletem-se profundamente em seus habitantes, que desenvolveram uma camuflagem natural de musgo, permitindo-lhes se misturar perfeitamente ao ambiente.'
    }
    else if(mapa_atual == 'imgs/ermosfungicos.svg'){
        text.innerHTML = 'Os Fúngicos Resíduos são povoados pelo Clã Cogumelo , um grupo territorial que representa uma ameaça a qualquer um que vagueie por perto. A Tribo Louva-a-Deus faz sua casa mais para dentro da área e é igualmente hostil a forasteiros. Uma das principais características da área é a grande Estação de Veados na parte oeste, a Estação da Rainha.'
    }
    else if(mapa_atual == 'imgs/cityoftears.svg'){
        text.innerHTML = 'A Cidade das Lágrimas é a capital de Hallownest , localizada no centro do reino. É coberta por chuvas perpétuas que se originam do teto. Seu nome original se perdeu na história.'
    }
}
