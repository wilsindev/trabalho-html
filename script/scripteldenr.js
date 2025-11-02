
// Dicionário com as descrições, evita toneladas de else if
const descricoes = {
  'https://img.game8.co/3912108/2b7dfcb9d8e81db68148f10a0ef8aa92.png/show': 'Limgrave é uma área exuberante e extensa da propriedade de Tenebrae. Árvores douradas, grama alta e arbustos fornecem alimento abundante para a fauna local, que inclui javalis, ovelhas, cabras e roedores, além de aves como águias e corujas. Animais selvagens mais sinistros e agressivos também existem, e aqueles que se aventurarem por lá devem estar preparados para enfrentá-los.',
  'https://eldenring.wiki.fextralife.com/file/Elden-Ring/liurnia_of_the_lakes_location_map_elden_ring_wiki_guide_2560px.jpg?v=1648030260781': 'Com suas águas rasas e vastos pântanos, a região de Liurnia sofre com o afundamento gradual da maior parte de seu território. Com suas florestas perpetuamente envoltas em neblina, sons misteriosos de sinos podem ser ouvidos à distância.',
  'imgs/altusplateau.svg': 'Altus é uma terra exuberante e verdejante, outrora repleta da generosidade da própria Erdtree . Grande parte da vegetação que cresce em Altus é tingida com o dourado da Erdtree, e as flores que brotam no planalto são reagentes preciosos para os Perfumistas. O povo do planalto acreditava que aqueles nascidos ao pé da Erdtree, como eles próprios, eram abençoados. Embora ainda bela, a terra carrega as cicatrizes da Ruptura , remanescentes das muitas batalhas travadas ali. O terreno é pontilhado por campos de batalha em ruínas e acampamentos de soldados.',
  'https://eldenring.wiki.fextralife.com/file/Elden-Ring/caelid_map_elden_ring_wiki_guide_2560px.jpg?v=1646261726988': 'Caelid, conhecida como o local da última batalha entre o General Radahn e Malenia, a Lâmina de Miquella, é uma vasta terra completamente devastada pela podridão escarlate.',
  'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mountaintops_of_the_giants_location_map_elden_ring_wiki_guide_2560px.jpg?v=1647592424971': 'O lendário domínio dos Gigantes, agora em ruínas. Devastados após a guerra contra a Erdtree, seus cadáveres jazem congelados no pico, com apenas os Monges do Fogo residindo nas proximidades.',
  'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crumbling_farum_azula_location_map_elden_ring_wiki_guide_1920px.jpg?v=1647570453210': 'Farum Azula é um templo gigantesco no céu, localizado acima do mar, a leste das Terras Intermediárias . Outrora uma cidade real dos Dragões Ancestrais e sede do Senhor dos Dragões Placidusax , Farum Azula vem se deteriorando desde tempos imemoriais. [ 1 ] Agora, tudo o que resta é um mausoléu guardado por Homens-Fera escolhidos , que empunham armas revestidas de Relâmpagos Vermelhos . [ 2 ] A tempestade além do tempo ruge no centro da cidade em ruínas, e em seu coração está a sede do Senhor dos Dragões, onde ele aguarda o retorno de seu deus ',
  'https://eldenring.wiki.fextralife.com/file/Elden-Ring/consecrated_snowfield_location_map_elden_ring_wiki_guide_300px.jpg': 'A rota que atravessa esta terra, cortada de leste a oeste por um rio congelado, leva à Haligtree de Miquella. Este é o caminho trilhado pelos não escolhidos, embora seja, mesmo assim, uma provação.',
  'imgs/deepnest.svg': 'Deepnest é uma área escondida e sombria, repleta de criaturas e túneis sinuosos cobertos por teias espessas e fungos bioluminescentes.',
  'imgs/kingdomsedge.svg': 'Kingdoms Edge é a área mais oriental de Hallownest , localizada próxima à Cidade das Lágrimas . Seus penhascos desolados são atingidos por uma constante queda de cinzas brancas.',
  'imgs/theabyss.svg': 'O Abismo é a área mais baixa de Hallownest , localizada abaixo da Bacia Antiga . É o local de origem do Vazio , uma substância encontrada no fundo do Abismo. A área em si contém um abismo gigante que está cheio de conchas de Vasos que nasceram no Abismo e depois foram descartados.',
  'imgs/queengarden.svg': 'Os Jardins da Rainha são uma área exuberante com portões ornamentados, espinhos e plataformas perigosas, localizada na parte oeste de Hallownest.',
  'imgs/thehive.svg': 'A Colmeia é uma grande comunidade de abelhas escondida abaixo da Borda do Reino . Só é possível chegar lá após adquirir o Passe de Bonde no Ninho Profundo e pegar o Bonde até a Borda do Reino. Particularidades da Colmeia são as estruturas construídas com materiais marrons e translúcidos, semelhantes ao mel. A arquitetura também segue um formato hexagonal que lembra favos de mel.',
  'imgs/fogycanyon.svg': 'As cavernas enevoadas do Cânion da Névoa estão repletas de bolhas e lagos ácidos, com algumas áreas cobertas de espinhos. O solo e as paredes geralmente são compostos de rochas ou vegetação baixa e verde. As bolhas na região contêm gases em turbilhão, e as que apresentam um brilho alaranjado podem explodir ao serem estouradas.'
};
const mapas = ['https://img.game8.co/3912108/2b7dfcb9d8e81db68148f10a0ef8aa92.png/show', 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/liurnia_of_the_lakes_location_map_elden_ring_wiki_guide_2560px.jpg?v=1648030260781', 'imgs/altusplateau.svg', 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/caelid_map_elden_ring_wiki_guide_2560px.jpg?v=1646261726988', 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mountaintops_of_the_giants_location_map_elden_ring_wiki_guide_2560px.jpg?v=1647592424971', 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/crumbling_farum_azula_location_map_elden_ring_wiki_guide_1920px.jpg?v=1647570453210', 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/consecrated_snowfield_location_map_elden_ring_wiki_guide_300px.jpg', 'imgs/deepnest.svg' ,'imgs/kingdomsedge.svg', 'imgs/theabyss.svg', 'imgs/queengarden.svg', 'imgs/thehive.svg', 'imgs/fogycanyon.svg'];
let imagematual = 0;
const map = document.getElementById("map");
const direita = document.getElementById("setadireita");
const esquerda = document.getElementById("setaesquerda");
const text = document.getElementById('text');
const citacaom = document.getElementById('citacao');

function passarimagem(){
    // Troca para a próxima imagem. Se for a última, volta para a primeira
    imagematual = (imagematual + 1) % mapas.length;
    map.src = mapas[imagematual];
    descricao();
    citacao();
}

function imagemanterior() {
    // soma com o tamanho pra evitar numeros negativos
    imagematual = (imagematual - 1 + mapas.length) % mapas.length;
    map.src = mapas[imagematual];
    descricao();
    citacao();
}
function descricao(){
    const mapa_atual = mapas[imagematual];
    text.innerHTML = descricoes[mapa_atual];
}