/* 
   2) O IMC - Indice de massa corporal e um criterio da organização Mundial de saude para dar uma indicação sobre a
   condição de peso de uma pessoa adulta.

   Formula do IMC:
   IMC = peso / (altura * altura)

   Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

   IMC em adultos condição:
   - Abaixo de 18.5 Abaixo do peso;
   - Entre 18.5 e 25 peso normal;
   - Entre 25 e 30 Acima do peso;
   - Entre 30 e 40 Obeso;
   - Acima de 40 Obesidade Grave;
*/

const peso = 75;
const altura = 1.95;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if (imc < 18.5) {
   console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25) {
   console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
   console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
   console.log('obeso');
} else {
   console.log('Obesidade Grave');
}

