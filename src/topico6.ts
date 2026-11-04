


function faz_soma(val_a: number, val_b: number): number {
    return val_a + val_b;
}


function monta_saudacao(usuario: string): string {
    return `E aí, ${usuario}! Beleza?`;
}


function checa_par(num: number): boolean {
    return num % 2 === 0;
}


function exibe_aviso(msg: string): void {
    console.log("AVISO:", msg);
}


function calcula_media_turma(notas: number[]): number {
    if (notas.length === 0) {
        return 0;
    }

    let soma_total: number = 0;

    for (const item of notas) {
        soma_total += item;
    }

    return soma_total / notas.length;
}


const mult = (n1: number, n2: number): number => {
    return n1 * n2;
};


function monta_perfil(nome_pessoa: string, anos?: number): string {
    if (anos !== undefined) {
        return `Nome: ${nome_pessoa}, Idade: ${anos}`;
    }

    return `Nome: ${nome_pessoa} (sem idade)`;
}


function aplica_desconto(
    preco_prod: number,
    desc_pct: number = 10
): number {
    return preco_prod - (preco_prod * desc_pct) / 100;
}



console.log("--- Testes de funções ---");

console.log("Soma:", faz_soma(10, 4));

console.log(monta_saudacao("Carlos"));

console.log("8 é par?", checa_par(8));
console.log("9 é par?", checa_par(9));

exibe_aviso("Isso é um teste do void");

console.log("Média das notas:", calcula_media_turma([6, 8, 10]));

console.log("Multiplicação:", mult(3, 7));

console.log(monta_perfil("Mariana", 22));
console.log(monta_perfil("Roberto"));

console.log("Preço com desconto normal:", aplica_desconto(150));
console.log("Preço com desconto maior:", aplica_desconto(150, 30));


// Exemplos de chamadas que apresentam erros de tipagem
// faz_soma("texto", 3);
// faz_soma(10);
// const x: string = faz_soma(2, 2);