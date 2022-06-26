function retornarUmaFuncao() {
    return function() {
        return "Boa tarde";
    }
}

console.log(retornarUmaFuncao()());