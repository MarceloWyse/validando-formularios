import isCPF from "./validaCPF.js";
import isOfAge from "./validaIdade.js";

const camposFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const listaRespostas = {
        "nome": e.target.elements['nome'].value,
        "email": e.target.elements['email'].value,
        "rg": e.target.elements['rg'].value,
        "cpf": e.target.elements['cpf'].value,
        "aniversario": e.target.elements['aniversario'].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = './abrir-conta-form-2.html';
})

camposFormulario.forEach((campo) => {
    campo.addEventListener('focusout', () => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
});

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(e){
    let mensagem = "";
    e.setCustomValidity("");
    if(e.name == 'cpf' && e.value.length >= 11){
        isCPF(e);
    }
    if(e.name == 'aniversario' && e.value != "") {  
    isOfAge(e); 
    }

    tiposDeErro.forEach(erro => {
        if(e.validity[erro]){
            mensagem = mensagens[e.name][erro];
        }
    })

    const mensagemErro = e.parentNode.querySelector('.mensagem-erro');
    const validadorInput = e.checkValidity();

    if(!validadorInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}