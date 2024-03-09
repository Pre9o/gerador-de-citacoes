const citacaoElemento = document.getElementById('citacaoElemento');

const citacoes = [
  'A vida é sem sentido, mas em parte isso se deve ao fato de que tentamos fazer com que tenha algum. - Albert Camus',
  'A sabedoria começa na reflexão. - Sócrates',
  'Penso, logo existo. - René Descartes',
  'A única coisa que sei é que nada sei. - Sócrates',
  'A beleza é a harmonia do propósito e da forma. - Alcibíades',
  'A coragem é saber o que não temer. - Platão',
  'O homem é a medida de todas as coisas. - Protágoras',
  'O verdadeiro conhecimento vem de dentro. - Sócrates',
  'Tudo o que sabemos é uma gota; tudo o que ignoramos é um oceano. - Isaac Newton',
  'A verdade é filha do tempo, não da autoridade. - Francis Bacon',
  'A amizade é um amor que nunca morre. - Mário Quintana',
  'O ser é, e o não-ser não é. - Parmênides',
  'A arte de viver é simplesmente a arte de conviver. - Khalil Gibran',
  'Não tenhas opiniões firmes, nem creias demasiadamente no valor das tuas opiniões. - André Gide',
  'A filosofia é o saber pelo saber. - Aristóteles',
  'Não importa o que fizeram com você. O que importa é o que você faz com o que fizeram com você. - Jean-Paul Sartre',
  'O homem é a medida de todas as coisas. - Protágoras',
  'A ciência sem a religião é manca, a religião sem a ciência é cega. - Albert Einstein',
  'A liberdade é a possibilidade do isolamento. - Fernando Pessoa',
  'O homem é livre, mas está acorrentado às consequências de suas escolhas. - Jean-Paul Sartre',
  'A vida só pode ser compreendida olhando-se para trás; mas só pode ser vivida olhando-se para frente. - Søren Kierkegaard',
  'Se vi mais longe, foi por estar sobre ombros de gigantes. - Isaac Newton',
  'Não sou um homem, sou dinamite. - Friedrich Nietzsche',
  'A consciência é a voz da alma; as paixões são a voz do corpo. - Jean-Jacques Rousseau',
  'A natureza nunca quebra suas próprias leis. - Leonardo da Vinci',
  'A imaginação é mais importante que o conhecimento. - Albert Einstein',
  'Tudo que é sólido desmancha no ar. - Karl Marx',
  'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo. - Antoine de Saint-Exupéry',
  'O homem nasceu livre, e em toda parte vive acorrentado. - Jean-Jacques Rousseau',
  'A felicidade é a única coisa que podemos dar sem possuir. - Voltaire',
  'A ignorância é a mãe de todos os males. - François Rabelais',
  'O homem é a medida de todas as coisas. - Protágoras',
  'Todas as coisas são feitas de água e aos elementos tudo retornará. - Tales de Mileto',
  'A felicidade é a ausência de necessidade. - Epicuro',
  'Conhece-te a ti mesmo. - Inscrição no Templo de Apolo em Delfos',
  'O homem é livre, mas está acorrentado às consequências de suas escolhas. - Jean-Paul Sartre',
  'A dúvida é o princípio da sabedoria. - Aristóteles',
  'A solidão é a sorte de todos os espíritos excepcionais. - Arthur Schopenhauer',
  'O homem é a medida de todas as coisas. - Protágoras',
  'O mais difícil não é aprender alguma coisa, mas sim, desaprender o que já foi aprendido. - Platão',
  'Somos o que fazemos repetidamente. - Aristóteles',
  'A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon',
  'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original. - Albert Einstein',
  'A virtude está no meio. - Aristóteles',
  'Conhecer a si mesmo é o princípio de toda sabedoria. - Sócrates',
  'Não existem fatos eternos, como não existem verdades absolutas. - Friedrich Nietzsche',
  'Não podemos ensinar nada a ninguém; só podemos ajudá-lo a encontrar a resposta dentro de si mesmo. - Galileu Galilei',
  'A paciência é amarga, mas seu fruto é doce. - Jean-Jacques Rousseau',
  'A vida é uma tragédia quando vista de perto, mas uma comédia quando vista de longe. - Charlie Chaplin'
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