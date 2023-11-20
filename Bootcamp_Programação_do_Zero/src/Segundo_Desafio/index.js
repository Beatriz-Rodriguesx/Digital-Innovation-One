let vitorias = 45;
let derrotas = 15;
let saldo = calcularSaldoRankeadas(vitorias, derrotas);
let classificacao = calcularClassificacao(vitorias, derrotas);

function calcularSaldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularClassificacao(vitorias, derrotas) {
    let saldoRank = calcularSaldoRankeadas(vitorias, derrotas);
    let classificacao;

    switch (true) {
        case vitorias < 10:
            classificacao = "Ferro";
            break;
        case vitorias >= 11 && vitorias <= 20:
            classificacao = "Bronze";
            break;
        case vitorias >= 21 && vitorias <= 50:
            classificacao = "Prata";
            break;
        case vitorias >= 51 && vitorias <= 80:
            classificacao = "Ouro";
            break;
        case vitorias >= 81 && vitorias <= 90:
            classificacao = "Diamante";
            break;
        case vitorias >= 91 && vitorias <= 100:
            classificacao = "Lendário";
            break;
        default:
            classificacao = "Imortal";
            break;
    }

    return classificacao;
}

console.log(`O Herói tem saldo de ${saldo} e está no nível ${classificacao}`);
