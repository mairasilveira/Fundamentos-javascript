function sempreRetornaUm(){
    return 1;
}

function textoOuNumero(retornaTexto) {
    if(retornaTexto) {
        return "Sou um texto!";
    } else {
        return 123;
    }
}

//ou

function textOuNao(retornaText) {
    return retornaText ? "Sou um texto!" : 123;
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto);