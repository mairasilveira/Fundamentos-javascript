let t1 = true;
let t2 = true;

let comprarTV50 = t1 && t2; //AND
console.log('Vamos comprar a TV 50"? ', comprarTV50); 

let comprarTV32 = t1 !== t2; //XOR
console.log('Vamos comprar a TV 32"? ', comprarTV32);

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete? ', tomarSorvete); //OR

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa?', ficarEmCasa); //NOT
