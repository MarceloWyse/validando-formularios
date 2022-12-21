export default function isOfAge(e) {
    const dataNascimento = new Date(e.value);
    validaIdade(dataNascimento);
    console.log(validaIdade(dataNascimento));
};

function validaIdade(e){
    const dataAtual = new Date();
    const dataMaior18 = new Date(e.getUTCFullYear() + 18, e.getUTCMonth(), e.getUTCDate());
    return dataAtual >= dataMaior18;
}