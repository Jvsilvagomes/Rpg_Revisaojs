//Valores bases
let forcaBase = 10;
let defesaBase = 8;
let agilidadeBase = 12;

//Bonus / Penalidades
let bonusEspada = 5;
let bonusArmadura = 2;
let penalidadeEscudo = 4;

//Calculo atributos finais para batalha
let forcaTotal = forcaBase + bonusEspada;
let defesaTotal = defesaBase + bonusArmadura;
let agilidadeFinal = agilidadeBase - penalidadeEscudo ;

//Exibindo os resultados no console
console.log(" ⚔️Força Total: ", forcaTotal);
console.log(" 🛡️Defesa Total: ", defesaTotal);
console.log(" 💨Agilidade Final:", agilidadeFinal);