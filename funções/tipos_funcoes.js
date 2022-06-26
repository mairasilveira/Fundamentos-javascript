// função com parâmetro e com retorno

function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 56);
console.log(resultado);

// função com parâmetro e sem retorno

function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(30, 56);

// função sem parâmetro e com retorno

function retornarDataAtual() {
    return new Date();
}

console.log(retornarDataAtual());

// função sem parâmetro e sem retorno

function exibirHoraAtual() {
    console.log(new Date().getHours());
}
exibirHoraAtual();