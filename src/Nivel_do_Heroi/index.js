let nomeNivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let nickname = "BeaRodriguesx";
let quantidadeXP = 8875;

    if (quantidadeXP <= 1000){
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[0]}`);
    }  
    else if (quantidadeXP > 1001 && quantidadeXP <=2000){
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[1]}`);
    }
    else if (quantidadeXP >= 2001 && quantidadeXP <=5000){
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[2]}`);
    }
    else if (quantidadeXP >= 6000 && quantidadeXP <=7000){
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[3]}`);
    }
    else if (quantidadeXP >= 7001 && quantidadeXP <= 8000){
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[4]}`);
    }
    else if (quantidadeXP >= 8001 && quantidadeXP <= 9000){
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[5]}`);
    }
    else if (quantidadeXP >= 9001 && quantidadeXP <=10000){
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[6]}`);
    }
    else {
    console.log(`O Herói de nome ${nickname} está no nível de ${nomeNivel[7]}`);
    }
   
