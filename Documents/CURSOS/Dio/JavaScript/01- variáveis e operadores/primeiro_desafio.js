/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 váriaveis. Sendo elas:
 1 - Preço do combustivel;
 2 - Gasto médio de combustivel de carro por KM;
 3 - Distância em KM da viagem

Imprima no console o valor  que será gasto para realizar esta viagem
 */

const precoCombustivel = 5.79;
const kmPorLitros = 28;
const distanciaEmKm = 530;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
