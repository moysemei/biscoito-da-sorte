// array de frases
const phrases = [
  "A dor é temporária, a vitória é eterna.",
  "Não importa quanto tempo você tem, mas como você o usa.",
  "A única morte verdadeira é nunca ter vivido.",
  "Existem erros que você não pode fazer duas vezes.",
  "Seria o único propósito da folha, o de cair?"
]

// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const img1 = document.querySelector("#img1")
const randomPhrase = document.querySelector("#randomPhrase")
const openAnotherCookie = document.querySelector("#openAnotherCookie")

// eventos
img1.addEventListener('click', toggleScreen)
img1.addEventListener('click', selectRandomPhrase)
openAnotherCookie.addEventListener('click', toggleScreen)

// funções
function getRandomIndex(phraseslength) {
  return Math.floor(Math.random() * phraseslength)
}

function selectRandomPhrase() {
  const randomIndex = getRandomIndex(phrases.length)
  const selectedPhrase = phrases[randomIndex]
  randomPhrase.textContent = selectedPhrase
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
