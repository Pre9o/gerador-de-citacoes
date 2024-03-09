const citacaoElemento = document.getElementById('citacaoElemento');

const citacoes = [
  'a',
  'b',
  'c'
];

const indicesUsados = new Set();

function gerarCitacao() {
  if(indicesUsados.size >= citacoes.length) indicesUsados.clear();

  while(true) {
    const indice = Math.floor(Math.random() * citacoes.length);

    if(indicesUsados.has(indice)) continue

    const citacao = citacoes[indice];
    citacaoElemento.innerHTML = citacao;
    indicesUsados.add(indice);
    break;
  }
}