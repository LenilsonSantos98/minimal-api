/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em 
    um semestre da faculdade calcule e imprima a sua média e sua 
    classificação conforme a tabela abaixo:

    Média = (notan 1 + nota 2 + nota 3) / 3;

    classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
 */

const nota1 = 5;
const nota2 = 5;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2))
if (media < 5){
    console.log('reprovação')
} 
else if (media <=7){
    console.log('recuperação')
}
else if (media > 7){
    console.log('passou de semestre')
}