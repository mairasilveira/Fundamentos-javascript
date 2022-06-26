const gustavo2 = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < gustavo2.length ; i++){
    console.log(gustavo2[i]);
}

console.log(gustavo2.sort((elemento1, elemento2) => {
    console.log(elemento1, elemento2);
    const resultado = elemento1 - elemento2
    if(resultado > 0) {
        return 1; 
    } else {
        return -1;
    }
}));

/*console.log(gustavo2.sort((elemento1, elemento2) => {
    console.log(elemento1, elemento2);
    const resultado = elemento1 - elemento2
    if(resultado > 0) {
        return 1; 
    } else {
        return -1;
    }
})); */