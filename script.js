let students = [
  {
    name: 'Caio',
    firstNote: 8.0,
    secondNote: 7.5,
  },
  {
    name: 'Mayk',
    firstNote: 5.0,
    secondNote: 4.0,

  },
  {
    name: 'Diego',
    firstNote: 8.0,
    secondNote: 9.0,
  },
  {
    name: 'Ana',
    firstNote: 7.0,
    secondNote: 6.0,
  },
]

function calcAverage (student){
  let average = (student.firstNote + student.secondNote) / 2
  
  if(average >= 7){
    return `
    A média do(a) aluno(a) ${student.name} é ${average.toFixed(2)}
    Parabens ${student.name}! voce foi aprovado(a) no concurso!
    `
  }else {
    return `
    A média do(a) aluno(a) ${student.name} é ${average.toFixed(2)}
    Nao foi dessa vez, ${student.name}! Tente novamente!
    `
  }
  
}

for(let student of students){
  let averageMenssage = calcAverage(student)
  alert(averageMenssage)
}
