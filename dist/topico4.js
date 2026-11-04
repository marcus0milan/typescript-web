const saida = document.getElementById("topico4");
function escrever(texto) {
    saida.innerHTML += texto + "\n";
}
let nome = "Chen";
let media = 10;
let aprovado = true;
escrever("=====Exemplo de variáveis com tipos primitivos: String, number e boolean=====");
escrever("Informações do aluno: " + nome);
escrever("Média final: " + media);
escrever("Aprovado? " + aprovado);
let alunos = ["Chen", "Marcus", "Guilherme"];
let notas = [10, 7, 9];
escrever("\n=====Exemplo do uso de Arrays=====");
escrever("NOME DO ALUNO | NOTA FINAL");
escrever(alunos[0] + " | " + notas[0]);
escrever(alunos[1] + " | " + notas[1]);
escrever(alunos[2] + " | " + notas[2]);
let aluno = ["Marcus", 22, 8.5];
escrever("\n=====Exemplo do uso de Tuplas=====");
escrever("NOME: " + aluno[0]);
escrever("IDADE: " + aluno[1]);
escrever("NOTA: " + aluno[2]);
export {};
