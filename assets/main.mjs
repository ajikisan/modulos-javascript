/**
 * Importação do arquivo funcoes.mjs com as chaves.
 */

import {
  mostraIdade,
  mostraCidade,
  mostraHobby,
  candidatosAprovados
} from './funcoes.mjs'

console.log(mostraIdade('Mirian', 'uma incógnita'))
console.log(mostraCidade('Mirian', 'Campo Grande'))
console.log(mostraHobby('Mirian', 'assistir filmes'))
console.log(candidatosAprovados('candidatos', 7))

/**
 * Import Dinâmico
 * Na página HTML, ao clicar no botão, o fundo da página ficará azul.
 */

const btn = document.getElementById('myBtn')
const body = document.getElementsByTagName('body')[0]

const listener = function () {
  btn.addEventListener('click', async () => {
    const { paintBlue } = await import('./funcoes.mjs')
    paintBlue(body)
  })
}
listener()
