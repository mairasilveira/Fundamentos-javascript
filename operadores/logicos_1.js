let temDinheiro = true;
let estaEnsolarado = true;

let resultadoE = 'Vai pro shopping? ';
resultadoE += temDinheiro && estaEnsolarado; //AND
console.log(resultadoE);

let resultadoOU = 'vai sair?';
resultadoOU += temDinheiro || estaEnsolarado; //OR
console.log(resultadoOU);