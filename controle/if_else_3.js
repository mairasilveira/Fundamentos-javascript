const hora = 19;
let saudacao;

if(hora < 12) {
    saudacao = 'Bom dia!';
} else if(hora < 18) {
saudacao = 'Boa tarde!';
} else if(hora < 22) {
saudacao = 'Boa noite!';
} else {
    saudacao = 'Tarde!';
}


console.log(saudacao);