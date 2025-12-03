// Dicionário com as descrições, evita toneladas de else if
const descricoes = {
  'imgs/forgottencross.svg': 'Localizada logo abaixo da superfície, a Encruzilhada Esquecida consiste em muitas cavernas e estradas. Restos fossilizados de insetos cobrem a superfície das cavernas, com samambaias claras crescendo através de rachaduras no solo.',
  'imgs/greenpath.svg': 'Greenpath é uma caverna verdejante, composta por vegetação diversificada, vales cobertos de musgo e amplos lagos ácidos. Essas características refletem-se profundamente em seus habitantes, que desenvolveram uma camuflagem natural de musgo, permitindo-lhes se misturar perfeitamente ao ambiente.',
  'imgs/ermosfungicos.svg': 'Os Fúngicos Resíduos são povoados pelo Clã Cogumelo, um grupo territorial que representa uma ameaça a qualquer um que vagueie por perto. A Tribo Louva-a-Deus faz sua casa mais para dentro da área e é igualmente hostil a forasteiros.',
  'imgs/cityoftears.svg': 'A Cidade das Lágrimas é a capital de Hallownest, localizada no centro do reino. É coberta por chuvas perpétuas que se originam do teto. Seu nome original se perdeu na história.',
  'imgs/crystalpeak.svg': 'O Pico de Cristal contém extensos túneis usados para minerar cristais. Há correias transportadoras e túneis revestidos de cristais brilhantes.',
  'imgs/royalwaterways.svg': 'As Royal Waterways são uma série de tubulações e estruturas de suporte abaixo da Cidade das Lágrimas. Muitas áreas estão inundadas pela água que goteja constantemente da chuva acima.',
  'imgs/ancientbasin.svg': 'A Bacia Antiga é uma área desolada abaixo dos Royal Waterways. É praticamente desprovida de vida, exceto por algumas formas de vida gravemente infectadas.',
  'imgs/deepnest.svg': 'Deepnest é uma área escondida e sombria, repleta de criaturas e túneis sinuosos cobertos por teias espessas e fungos bioluminescentes.',
  'imgs/kingdomsedge.svg': 'Kingdoms Edge é a área mais oriental de Hallownest , localizada próxima à Cidade das Lágrimas . Seus penhascos desolados são atingidos por uma constante queda de cinzas brancas.',
  'imgs/theabyss.svg': 'O Abismo é a área mais baixa de Hallownest , localizada abaixo da Bacia Antiga . É o local de origem do Vazio , uma substância encontrada no fundo do Abismo. A área em si contém um abismo gigante que está cheio de conchas de Vasos que nasceram no Abismo e depois foram descartados.',
  'imgs/queengarden.svg': 'Os Jardins da Rainha são uma área exuberante com portões ornamentados, espinhos e plataformas perigosas, localizada na parte oeste de Hallownest.',
  'imgs/thehive.svg': 'A Colmeia é uma grande comunidade de abelhas escondida abaixo da Borda do Reino . Só é possível chegar lá após adquirir o Passe de Bonde no Ninho Profundo e pegar o Bonde até a Borda do Reino..',
  'imgs/fogycanyon.svg': 'As cavernas enevoadas do Cânion da Névoa estão repletas de bolhas e lagos ácidos, com algumas áreas cobertas de espinhos. O solo e as paredes geralmente são compostos de rochas ou vegetação baixa e verde. As bolhas na região contêm gases em turbilhão, e as que apresentam um brilho alaranjado podem explodir ao serem estouradas.'
};
//cria lista das citacoes
const citacoes = {
  'imgs/forgottencross.svg': '"Ainda serpenteando por essas belas rodovias? Imagine como elas deviam ser no auge do reino, cheias de trânsito e cheias de vida!" — Cornifer',
  'imgs/greenpath.svg': '"A mente maior uma vez sonhou com folhas e projetou essas cavernas assim. Em cada arbusto e em cada videira a mente de Unn se revela a nós." — The Mosskin',
  'imgs/ermosfungicos.svg': '"Meu conhecimento sobre Hallownest pode ser um pouco vago, mas abaixo dessas cavernas arborizadas há um bosque de fungos, que antigamente era lar de criaturas pacíficas, nem exatamente insetos, nem exatamente plantas." — Elderbug',
  'imgs/cityoftears.svg': '"A cidade parece ter sido construída dentro de uma enorme caverna, e a chuva cai pelas rachaduras nas pedras acima. Deve haver muita água em algum lugar lá em cima." — Quirrel',
  'imgs/crystalpeak.svg': '"Há um poder estranho escondido nos cristais que crescem lá em cima, nos picos. Eles brilham e resplandecem na escuridão, com um ponto brilhante de calor abrasador em cada um. Eles também cantam, se você prestar atenção. Bem baixinho..." — The Hunter',
  'imgs/royalwaterways.svg': '"Não são emocionantes esses canais? Um labirinto de canos e túneis... Eu não poderia ter pedido um lugar melhor para empregar meus talentos. É tudo tão organizado, tão bem pensado, nada comparado à irregularidade bruta daquelas cavernas..." — Cornifer',
  'imgs/ancientbasin.svg': '"Você sabia que as cavernas continuam mesmo abaixo da capital? Poucos se aventuraram tão fundo, então os detalhes são escassos. Aqueles que conseguiram retornar relataram estruturas e estradas impossivelmente antigas, formadas como se a própria rocha tivesse vontade própria." — Elderbug',
  'imgs/deepnest.svg': '"Toda esta área está infestada de bichinhos mortais, que mordem, queimam e arranham. Pensei em testar minha força contra eles. Agora que essa bravata me deixou, tudo o que sinto é cansaço e dor." — Cloth',
  'imgs/kingdomsedge.svg': '"Este lugar de cinzas é o túmulo do Wyrm. Uma vez contado, ele veio para morrer. Mas o que é a morte para esse ser ancestral? Mais transformação, creio eu. Este reino falido é produto do ser gerado por esse evento." — Bardoon',
  'imgs/theabyss.svg': '"Bem lá embaixo, abaixo de nós, sob o reino, o ar fica mais calmo e uma sensação de vazio se instala. Será que a vida pode florescer lá embaixo?" — The Hunter ',
  'imgs/queengarden.svg': '"Você já ouviu falar da Rainha de Hallownest? Aparentemente, estes jardins já foram o refúgio dela... Agora, alguns tipos malvados estão rastejando por todo o lugar e as plantas cresceram selvagens..." — Cornifer',
  'imgs/thehive.svg': '"Embora essa colmeia exista dentro de Hallownest, não participamos de sua tentativa de perpetuação." — Hive Queen Vespa',
  'imgs/fogycanyon.svg': '"O cânion abaixo de nós, denso de neblina e crepitante com uma energia estranha... um Caçador pode perder os sentidos lá embaixo. Cuidado... coisas estranhas e sobrenaturais espreitam por lá." — The Hunter'
}
// Cria lista dos mapas do game
const mapas = ['imgs/forgottencross.svg', 'imgs/greenpath.svg', 'imgs/ermosfungicos.svg', 'imgs/cityoftears.svg', 'imgs/crystalpeak.svg', 'imgs/royalwaterways.svg', 'imgs/ancientbasin.svg', 'imgs/deepnest.svg' ,'imgs/kingdomsedge.svg', 'imgs/theabyss.svg', 'imgs/queengarden.svg', 'imgs/thehive.svg', 'imgs/fogycanyon.svg'];
const mapas_nome = ['Forgotten Crossroads', 'Green Path', 'Fungal Wastes', 'City of Tears', 'Crystal Peak', 'Royal Waterways', 'Ancient Basin', 'Deep Nest', 'Kingdoms Edge', 'The Abyss','Queen\'s Gardens', 'The Hive', 'Fog Canyon']

let imagematual = 0;
const map = document.getElementById("map");
const direita = document.getElementById("setadireita");
const esquerda = document.getElementById("setaesquerda");
const text = document.getElementById('text');
const titulo = document.getElementById('titulo')
const citacaom = document.getElementById('citacao');

function passarimagem(){
    // Troca para a próxima imagem. Se for a última, volta para a primeira
    imagematual = (imagematual + 1) % mapas.length;
    map.src = mapas[imagematual];
    descricao();
    citacao();
    atualizar_titulo();
}

function imagemanterior() {
    // soma com o tamanho pra evitar numeros negativos
    imagematual = (imagematual - 1 + mapas.length) % mapas.length;
    map.src = mapas[imagematual];
    descricao();
    citacao();
    atualizar_titulo();
}
function descricao(){
    const mapa_atual = mapas[imagematual];
    text.innerHTML = descricoes[mapa_atual];
}
function citacao(){
    const mapa_atual = mapas[imagematual];
    citacaom.innerHTML = citacoes[mapa_atual];
    
}
function atualizar_titulo(){
  const mapa_atual = mapas[imagematual];
  titulo.innerHTML = mapas_nome[imagematual];
}