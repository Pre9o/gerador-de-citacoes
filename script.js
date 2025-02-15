// script.js
async function pegarCitacao() {
  const response = await fetch('/api/citacao');
  const { citacao, autor } = await response.json();

  console.log(citacao, autor);

  const citacaoElemento = document.getElementById('citacaoElemento');
  const autorElemento = document.getElementById('autorElemento');

  citacaoElemento.textContent = `${citacao}`;
  autorElemento.textContent = `Autor: ${autor}`;
}

document.addEventListener('DOMContentLoaded', pegarCitacao);