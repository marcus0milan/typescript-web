const saida = document.getElementById("topico5");
function escrever(texto) {
    saida.innerHTML += texto + "\n";
}
const v_nota = 7.2;
let situacao_final;
if (v_nota >= 7) {
    situacao_final = "Aprovado";
}
else if (v_nota >= 5) {
    situacao_final = "Recuperação";
}
else {
    situacao_final = "Reprovado";
}
escrever("Situação do aluno:");
escrever(`Média: ${v_nota} - ${situacao_final}`);
const x_dia = 3;
let desc_dia;
switch (x_dia) {
    case 1:
        desc_dia = "Domingo";
        break;
    case 2:
        desc_dia = "Segunda-feira";
        break;
    case 3:
        desc_dia = "Terça-feira";
        break;
    case 4:
        desc_dia = "Quarta-feira";
        break;
    default:
        desc_dia = "Dia não cadastrado";
}
escrever("\nDia da semana:");
escrever(`O número ${x_dia} corresponde a ${desc_dia}`);
const num_idade = 17;
const status_idade = num_idade >= 18 ? "Maior de idade" : "Menor de idade";
escrever("\nVerificação de idade:");
escrever(status_idade);
escrever("\nContagem com for:");
for (let i = 1; i <= 5; i++) {
    escrever(`Esta é a ${i}ª repetição`);
}
escrever("\nTentativas disponíveis:");
let qtd = 3;
while (qtd > 0) {
    escrever(`Você ainda tem ${qtd} tentativas`);
    qtd--;
}
escrever("Não restam mais tentativas.");
escrever("\nFrutas disponíveis:");
const lst_frutas = ["banana", "maçã", "uva"];
lst_frutas.forEach((item, idx) => {
    escrever(`${idx + 1} - ${item}`);
});
const valores_compra = [10, 20, 30, 40];
let acumulador = 0;
valores_compra.forEach((p) => {
    acumulador = acumulador + p;
});
escrever("\nValor total da compra: R$ " + acumulador);
export {};
