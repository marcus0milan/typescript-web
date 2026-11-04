const saida = document.getElementById("topico4")!;

function escrever(texto: string): void {
    saida.innerHTML += texto + "\n";
}

let nome: string = "Chen";
let media: number = 10;
let aprovado: boolean = true;

escrever("=====Exemplo de variáveis com tipos primitivos: String, number e boolean=====");
escrever("Informações do aluno: " + nome)
escrever("Média final: " + media);
escrever("Aprovado? " + aprovado);

let alunos: string[] = ["Chen", "Marcus", "Guilherme"];
let notas: number[] = [10, 7, 9];

escrever("\n=====Exemplo do uso de Arrays=====");
escrever("NOME DO ALUNO | NOTA FINAL");
escrever(alunos[0] + " | " + notas[0]);
escrever(alunos[1] + " | " + notas[1]);
escrever(alunos[2] + " | " + notas[2]);


let aluno: [string, number, number] = ["Marcus", 22, 8.5];

escrever("\n=====Exemplo do uso de Tuplas=====");
escrever("NOME: " + aluno[0]);
escrever("IDADE: " + aluno[1]);
escrever("NOTA: " + aluno[2]);