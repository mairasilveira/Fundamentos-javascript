const numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros[3] = 100;
numeros.join(' - ');

console.log(numeros);