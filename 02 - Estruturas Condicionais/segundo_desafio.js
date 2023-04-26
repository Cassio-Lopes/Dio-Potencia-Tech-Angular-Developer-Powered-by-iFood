/*Faça um programa para calcular o valor gasto de uma viagem

voce tera 5 variaveis, sendo elas;
1 - preço do etanol;
2 - Preço da gasolina;
3 - o tipo de combustivel que esta no seu carro;
4 - gasto medio de combustivel do carro por km;
5 - distancia em Km da viagem;

imprima no console o valor que sera gasto de combustivel para realizar esta viagem.
*/

const precoEtanol = 4.30;
const precoGasolina = 5.30;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


/*Nesse exemplo, as variáveis precoEtanol e precoGasolina representam o preço do etanol e da gasolina em reais por litro,
respectivamente.A variável tipoCombustivel representa o tipo de combustível do carro, que pode ser "etanol" ou "gasolina".
A variável gastoMedio representa o consumo médio do carro em quilômetros por litro, e a variável distanciaViagem representa a distância da viagem em quilômetros.
O cálculo do valor gasto de combustível para realizar a viagem é feito dividindo a distância da viagem pelo consumo médio do carro,
obtendo assim a quantidade de litros necessários para a viagem.Em seguida, é calculado o valor gasto de combustível multiplicando a quantidade de litros 
necessários pelo preço do combustível correspondente ao tipo de combustível do carro.
Por fim, o resultado é impresso no console usando a função console.log(). O método toFixed(2) é usado para limitar o resultado a duas casas decimais. */
