let a = 1;
let b = 2;

console.log(++a === b++); // ++a é prioridade do que === e do que b++, === é prioridade do que b++.

a++;
console.log(a === b);
b++ // essas 3 linhas são um código menos confuso que dizem a mesma coisa.