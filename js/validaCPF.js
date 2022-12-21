export default function isCPF(campo){
    const cpf = campo.value.replace(/\.|-/g,"");
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        console.log("Esse CPF não existe");
    }
    else {
        console.log("Esse CPF existe");
    }
}

function validaNumerosRepetidos(e){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numerosRepetidos.includes(e);    
}

function validaPrimeiroDigito(e) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += e[tamanho] * multiplicador;
        multiplicador --;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != e[9];
}

function validaSegundoDigito(e) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += e[tamanho] * multiplicador;
        multiplicador --;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != e[10];
}