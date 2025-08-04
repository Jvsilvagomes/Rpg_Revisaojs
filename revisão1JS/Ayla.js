let nome = "Ayla";
let nivel = 1;
let xp = 0;
let ouro = 50;
let vida = 100;

console.log("✨Inicio da jornada de: " + nome);
console.log(`Nivel: ${nivel}|XP: ${xp}| Ouro: ${ouro}| Vida: ${vida} `);
console.log("------------------------------------")

//Ganhou 20 de XP por derrotar o slime.
xp += 20;

//Encontrou um bau mágico e ganhou 100 de ouro!
ouro += 100;

//Caiu em uma armadilhar e perdeu 30 pontos de vida.
vida -= 30;

//Vendeu um item lendario no mercado negro e dobrou seu ouro.
ouro *= 2;

//Subiu um nível!
nivel++; // nivel += 1 também é correto

//Descansou pós a aventura e recuperou a metade da vida restante.
vida /= 2.

//Resultado final da aventura inicial
console.log("📓Relatório da aventura Inicial:");
console.log(`🎖️ Herói:  ${nome}`);
console.log(`📈 Nìvel:  ${nivel}`);
console.log(`⭐ XP:     ${xp}`);
console.log(`💰 Ouro:   ${ouro}`);
console.log(`❤️ Vida:   ${vida}`);
