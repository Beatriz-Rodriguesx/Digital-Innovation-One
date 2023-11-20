let vitorias = 155;
let derrotas = 15;
//let saldo = calcularSaldoRankeadas(vitorias, derrotas);
//let classificacao = calcularClassificacao(vitorias, derrotas);

function calcularSaldoRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}

function calcularClassificacao(vitorias, derrotas) {
  let saldoRank = calcularSaldoRankeadas(vitorias, derrotas);

  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    return "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    return "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    return "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    return "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}


console.log(`O saldo de ranqueadas é: ${saldo}`);
console.log(`A classificação do jogador é: ${classificacao}`);
