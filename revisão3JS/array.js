for (let i = 1; i <= 5; i++){
    console.log(`contador: ${i}`);
}

let alunos = ["Thiago", "Marcelo", "Felipe", "Felipe", "Eduardo", "Odair", "Leandro", "Antonio"];

let quantidade = alunos.length;
console.log("quantidade:", quantidade);

// Adicionar um novo aluno
alunos.push("João");
console.log("Alunos pós adição", alunos);

// Adicionar um aluno na primeira posição
alunos.unshift("Maria")
console.log(alunos)

// remover ultimo aluno
alunos.pop()

// remover primeiro aluno
alunos.shift()

console.log(alunos)