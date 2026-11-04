const saida = document.getElementById("topico6");
function escrever(texto) {
    saida.innerHTML += texto + "\n";
}
function faz_soma(val_a, val_b) {
    return val_a + val_b;
}
function monta_saudacao(usuario) {
    return `E aí, ${usuario}! Beleza?`;
}
function checa_par(num) {
    return num % 2 === 0;
}
function exibe_aviso(msg) {
    escrever("AVISO: " + msg);
}
function calcula_media_turma(notas) {
    if (notas.length === 0) {
        return 0;
    }
    let soma_total = 0;
    for (const item of notas) {
        soma_total += item;
    }
    return soma_total / notas.length;
}
const mult = (n1, n2) => {
    return n1 * n2;
};
function monta_perfil(nome_pessoa, anos) {
    if (anos !== undefined) {
        return `Nome: ${nome_pessoa}, Idade: ${anos}`;
    }
    return `Nome: ${nome_pessoa} (sem idade)`;
}
function aplica_desconto(preco_prod, desc_pct = 10) {
    return preco_prod - (preco_prod * desc_pct) / 100;
}
escrever("--- Testes de funções ---");
escrever("Soma: " + faz_soma(10, 4));
escrever(monta_saudacao("Carlos"));
escrever("8 é par? " + checa_par(8));
escrever("9 é par? " + checa_par(9));
exibe_aviso("Isso é um teste do void");
escrever("Média das notas: " + calcula_media_turma([6, 8, 10]));
escrever("Multiplicação: " + mult(3, 7));
escrever(monta_perfil("Mariana", 22));
escrever(monta_perfil("Roberto"));
escrever("Preço com desconto normal: " + aplica_desconto(150));
escrever("Preço com desconto maior: " + aplica_desconto(150, 30));
export {};
// Exemplos de chamadas que apresentam erros de tipagem
// faz_soma("texto", 3);
// faz_soma(10);
// const x: string = faz_soma(2, 2);
