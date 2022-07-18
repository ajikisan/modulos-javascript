/**
 * Função retorna os campos preenchidos.
 * Pode-se usar o export colocando a palavra na frente da function
 * export function mostraIdade(nome, idade) {}
 * ou como agrupadora das funções
 *
 * */

function mostraIdade(nome, idade) {
  return `A idade de ${nome} é ${idade}`
}

function mostraCidade(nome, cidade) {
  return `A cidade de ${nome} é ${cidade}`
}

function mostraHobby(nome, hobby) {
  return `O hobby de ${nome} é ${hobby}`
}

function paintBlue(el) {
  el.style.backgroundColor = 'blue'
}

const candidatos = [
  {
    nome: 'San',
    nota: 8,
    turma: 'JS DIO 2022'
  },
  {
    nome: 'Mirian',
    nota: 9,
    turma: 'JS DIO 2022'
  },
  {
    nome: 'Olaf',
    nota: 8.5,
    turma: 'JS DIO 2022'
  }
]

function candidatosAprovados(nome, media, turma) {
  let aprovados = []

  for (let i = 0; i < candidatos.length; i++) {
    let { nota, nome, turma } = candidatos[i]
    if (nota >= media) {
      aprovados.push(nome)
    }
  }
  return aprovados
}

export {
  mostraIdade,
  mostraCidade,
  mostraHobby,
  paintBlue,
  candidatosAprovados
}

/**
 * A idade de Mirian é uma incógnita
 * main.mjs:13 A cidade de Mirian é Campo Grande
 * main.mjs:14 O hobby de Mirian é assistir filmes
 * main.mjs:15 (3) ['San', 'Mirian', 'Olaf']
 */
