/* 
    3) Elabore um algoritmo que calcule o que deve ser pavo por um produto, considerando o preço normal de etiqueta
    e a escolha da condição de pagamento.
    Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolha e efetuar o calculo adequado.

    Codigo Condição de pagamento:
    - A vista debito, recebe 10% de desconto;
    - A vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}