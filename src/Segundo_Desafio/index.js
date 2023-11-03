/*Calculadora de partidas Rankeadas
Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)*/

let total = relatorioPartidas(15, 4)

function relatorioPartidas (qtdVitorias, qtdDerrotas){
    qtdPartidas = qtdVitorias - qtdDerrotas
    return qtdPartidas
}

console.log(`Seu total de partidas no jogo é ${total}`)

