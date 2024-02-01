/* 
    Crie uma função que verifique se você é maior de idade.
*/

function verificarIdade(idade){
    if (idade >= 18){
        console.log('Você tem ',`${idade}`, 'e é de maior.');
    } else {
        console.log('Você tem ', `${idade}`, 'e é de menor.');
    }
}

verificarIdade(18);
verificarIdade(17);