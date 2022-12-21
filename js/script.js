import isCPF from "./validaCPF.js";
import isOfAge from "./validaIdade.js";

const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach((campo) => {
    campo.addEventListener('focusout', () => verificaCampo(campo))
});

function verificaCampo(e){
    if(e.name == 'cpf' && e.value.length >= 11){
        isCPF(e);
    }
    if(e.name == 'aniversario' && e.value != "") {  
    isOfAge(e); 
    }
}