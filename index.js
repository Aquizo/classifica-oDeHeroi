const nomeDoHeroi = "Aquiles"
let xp = 0
let classificacao = "nada"
for (let contador = 0; contador < 10001; contador++){
    xp += 1
  }
if (xp > 1000 && xp <= 2000){
    classificacao = "Bronze"
} else if (xp > 2000 && xp <= 5000){
    classificacao = "Prata"
} else if (xp > 5000 && xp <= 7000){
    classificacao = "Ouro"
} else if (xp > 7000 && xp <= 8000){
    classificacao = "Platina"
} else if (xp > 8000 && xp <= 9000){
    classificacao = "Ascendente"
} else if (xp > 9000 && xp <= 10000){
    classificacao = "Imortal"
} else if(xp >= 10001){
    classificacao = "Radiante"
} else if( xp <= 1000){
    classificacao = "Ferro"
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + classificacao + " de aventureiro!")