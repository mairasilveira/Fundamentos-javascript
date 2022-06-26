function executar(funcao) {
    if(typeof funcao === "function"){ //colocar isso aqui pra nao dar erro quando executar
        console.log(funcao());
    }
}

function bomDia() {
    return "Bom dia";
}

executar(3); 
executar(bomDia); //nao colocar bomDia() porque se nao vai executar a função bom dia só, e não a executar