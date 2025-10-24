// terminar as setas de mapa 
let imagem = document.getElementById("zz");
const srcoriginal = imagem.src;
imagem.addEventListener('mouseover', () => {
    imagem.src = 'imgs/knighton.svg'
})
imagem.addEventListener('mouseout', () => {
    imagem.src = srcoriginal
})

const maps = ["fc"]
const map = document.getElementById("map");
const direita = document.getElementById("setadireita");
const esquerda = document.getElementById("setaesquerda")
direita.addEventListener('click', () =>{
    map.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdt6kbtkioDzieu8sSJO7aIhJop2XynseJw&s"
    direita.addEventListener('click', () =>{
        map.src = "imgs/ermosfungicos.svg"
    })
})