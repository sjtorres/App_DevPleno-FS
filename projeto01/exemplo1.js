const valor = 10

if (valor === 10) {
  
}

let valor2 = 20
valor2 = 30

console.log(valor, valor2)

const objeto = {
  chave1: 'valor1',
  chave2: 'valor2'
}

console.log(objeto)

const soma = function(a, b) {
  return a + b
}
console.log(soma(3, 5))

const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function(item) {
  return { original: item, dobrado: item * 2 }
})
console.log(vetor, dobrado)

const dobrar = item => item * 2
const somentePares = item => item % 2 === 0

const paresDobrados = vetor.filter(somentePares).map(dobrar)
console.log('Pares Dobrados: ', paresDobrados)

const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrados.reduce(somar, 10)
console.log('Somar com reduce', somatorio)