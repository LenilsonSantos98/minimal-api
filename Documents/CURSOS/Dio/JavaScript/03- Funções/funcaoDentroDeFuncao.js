// Chamando uma função dentro de outra função.

function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if (idade >=18 ){
        console.log(escrevaMeuNome('Rodrigo'), ' Tenho ',`${idade}` , ' Anos E sou de maior.')
    } else{
        console.log(escrevaMeuNome('Rodrigo'), 'Tenho ', `${idade}`, ' Anos E sou de menor.')
    }
}

verificarIdade(18);
verificarIdade(17);