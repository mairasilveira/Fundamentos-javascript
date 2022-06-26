// Parâmetro (Nota) -> retorna (conceito)

function notaParaConceito(nota){
  switch(Math.ceil(nota)) {

   case 10: return "A+";
   case 9: return "A";
   default: return null;
  }
    }

    console.log(`O conceito do aluno é ${notaParaConceito(9)}`);
