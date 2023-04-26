/*Faça um programa para calcular o valor gasto de uma viagem

voce tera 3 variaveis, sendo elas;
1 - Preço do combustivel;
2 - gasto medio de combustivel do carro por km;
3 - distancia em Km da viagem;

imprima no console o valor que sera gasto de combustivel para realizar esta viagem.
*/

const precoCOMBUSTIVEL = 5.34;
const kmPORLITRO = 10;
const distanciaEMKM = 100;

const litrosConsumidos = distanciaEMKM / kmPORLITRO;
const valorGASTO = litrosConsumidos * precoCOMBUSTIVEL;
console.log(valorGASTO.toFixed(2));