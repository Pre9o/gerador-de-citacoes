const citacaoElemento = document.getElementById('citacaoElemento');

const citacoes = [
  'a',
  'b',
  'c'
];

const indicesUsados = new Set();

function gerarCitacao() {
  const indice = Math.floor(Math.random() * citacoes.length);
  const citacao = citacoes[indice];
  citacaoElemento.innerHTML = citacao;
}