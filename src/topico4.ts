let nome: string = "Chen";
let media: number = 10;
let aprovado: boolean = true;

console.log("=====Exemplo de variáveis com tipos primitivos: String, number e boolean=====");
console.log("Informações do aluno: " + nome)
console.log("Média final: " + media);
console.log("Aprovado? " + aprovado);

let alunos: string[] = ["Chen", "Marcus", "Guilherme"];
let notas: number[] = [10, 7, 9];

console.log("\n=====Exemplo do uso de Arrays=====");
console.log("NOME DO ALUNO | NOTA FINAL");
console.log(alunos[0] + " | " + notas[0]);
console.log(alunos[1] + " | " + notas[1]);
console.log(alunos[2] + " | " + notas[2]);


let aluno: [string, number, number] = ["Marcus", 22, 8.5];

console.log("\n=====Exemplo do uso de Tuplas=====");
console.log("NOME: " + aluno[0]);
console.log("IDADE: " + aluno[1]);
console.log("NOTA: " + aluno[2]);

