const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

// calcular a média do aluno usando as duas maiores notas. se for >= 7 -> aprovado. se >= 4 -> recuperação
//< 4 -> reprovado

function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function media(n1, n2, n3){
    const menorNota = minimo(nota1, minimo(nota2, nota3));
    if(menorNota === n1){
        return (n2 + n3)/2;
    } else {
        if(menorNota === n2){
            return (n1 + n3)/2;
        } else {
            return (n1 + n2)/2;
        }
    }
}

console.log(`A nota média do aluno é ${media(nota1, nota2, nota3)}`);

function mediaParaStatus(media) {
    if (media >= 7){
return "Aprovado";
    } else {
    if (media >= 4){
        return "Rec.";
    } else {
        return "Reprovado!";
    }
}}

const mediaFinal = media(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado do aluno é ${statusFinal}`);