const citacaoElemento = document.getElementById('citacaoElemento');
const autorElemento = document.getElementById('autorElemento');

citacoes = [
  '"A verdadeira sabedoria consiste em reconhecer a própria ignorância, pois somente quando admitimos o que não sabemos, estamos abertos para aprender."',
  '"A vida é um constante processo de questionamento e reflexão, pois somente assim podemos descobrir o verdadeiro significado de nossa existência."',
  '"O conhecimento é como uma jornada sem fim, onde cada descoberta nos leva a novas perguntas e novas possibilidades de compreensão."',
  '"A mente humana é um universo vasto e inexplorado, capaz de conceber ideias que transcendem as limitações do tempo e do espaço."',
  '"A busca pela verdade é uma jornada solitária, pois cada indivíduo deve confrontar suas próprias crenças e questionar suas próprias convicções."',
  '"A verdadeira felicidade não reside na busca incessante por prazeres passageiros, mas sim na realização de um propósito maior que transcende o eu individual."',
  '"A sabedoria é como uma árvore frondosa, cujas raízes estão fincadas na terra da experiência e cujos frutos são colhidos pelos que têm a coragem de se aventurar em seus ramos mais altos."',
  '"O amor é a força motriz que impulsiona o universo, pois é através do amor que encontramos significado em nossas vidas e conexão com os outros."',
  '"A virtude é o fundamento sobre o qual repousa a sociedade humana, pois é através da prática da virtude que cultivamos o respeito mútuo e a cooperação pacífica."',
  '"A verdadeira grandeza de um indivíduo reside não em sua riqueza material ou poder político, mas sim em sua capacidade de cultivar a sabedoria e a compaixão em seu coração."'
]

autores = [
  'Sócrates',
  'Platão',
  'Aristóteles',
  'René Descartes',
  'Immanuel Kant',
  'Epicuro',
  'Confúcio',
  'Platão',
  'Aristóteles',
  'Dalai Lama'
]

const indicesUsados = new Set();

function gerarCitacao() {
  if(indicesUsados.size >= citacoes.length) indicesUsados.clear();

  while(true) {
    const indice = Math.floor(Math.random() * citacoes.length);

    if(indicesUsados.has(indice)) continue

    const citacao = citacoes[indice];
    const autor = autores[indice];
    citacaoElemento.innerHTML = citacao;
    autorElemento.innerHTML = autor;
    indicesUsados.add(indice);
    break;
  }
}