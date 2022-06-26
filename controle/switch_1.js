
let nota = 12;

switch(Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
        case 3:
            console.log('Reprovado!');
            break;
            case 2:
                console.log('Muito Reprovado!');
                break;
                default: 
    console.log('Nota invalida');
}

console.log('Fim');