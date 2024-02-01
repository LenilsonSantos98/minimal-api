/*
 Aprimorando o desafio da aula de váriaveis.
 Faça um programa para calcular o valor de uma viagem.

 Você terá 5 váriaveis. Sendo elas:
  1 - Preço do etanol;
  2 - Preço da gasolisa;
  3 - O tipo de combustivel que está no seu carro;
  4 - Gasto médio de combustivel de carro(moto) por KM;
  5 - Distância em KM da viagem;

 Imprima no console o valor  que será gasto para realizar esta viagem
  */

const precoGasolina = 5.50;
const precoEtanol = 4.79;
const kmPorLitros = 28;
const distanciaEmKm = 550;
const tipoDeCombustivel = 'Etanol'

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel === 'Gasolina'){
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}