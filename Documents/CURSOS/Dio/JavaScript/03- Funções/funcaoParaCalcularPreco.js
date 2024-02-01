/* 
     Elabore um algoritimo que calcule o que deve ser pago por um produto,
    considerando o preço normal de etiqueta e a escolha da condição de pagamento.
     Utilize os códigos da tabela a seguir para ler qual a condição de 
    pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, receve 10% de desconto; 
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto; 
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100));
}
function aplicarJuros(valor, juros){
    return valor + (valor * (juros/100));
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log ('Valor com o desconto de 10%,', aplicarDesconto(precoEtiqueta, 10),'Reais');
}
else if (formaPagamento === 2){
    console.log('Valor com desconto,',aplicarDesconto(precoEtiqueta, 15),'Reais' );
}
else if (formaPagamento === 3){
    console.log('Parcelado sem juros em duas vezes.', precoEtiqueta );
} 
else {
    console.log('Parcelado com juros,', aplicarJuros(precoEtiqueta, 10),'Reais' );
}