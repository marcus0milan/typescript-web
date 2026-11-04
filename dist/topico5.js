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
console.log("Situação do aluno:");
console.log(`Média: ${v_nota} - ${situacao_final}`);
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
console.log("\nDia da semana:");
console.log(`O número ${x_dia} corresponde a ${desc_dia}`);
const num_idade = 17;
const status_idade = num_idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log("\nVerificação de idade:");
console.log(status_idade);
console.log("\nContagem com for:");
for (let i = 1; i <= 5; i++) {
    console.log(`Esta é a ${i}ª repetição`);
}
console.log("\nTentativas disponíveis:");
let qtd = 3;
while (qtd > 0) {
    console.log(`Você ainda tem ${qtd} tentativas`);
    qtd--;
}
console.log("Não restam mais tentativas.");
console.log("\nFrutas disponíveis:");
const lst_frutas = ["banana", "maçã", "uva"];
lst_frutas.forEach((item, idx) => {
    console.log(`${idx + 1} - ${item}`);
});
const valores_compra = [10, 20, 30, 40];
let acumulador = 0;
valores_compra.forEach((p) => {
    acumulador = acumulador + p;
});
console.log("\nValor total da compra: R$", acumulador);
export {};
