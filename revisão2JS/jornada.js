// dados inicias de Ayla
let vida = 60;
let energia = 40;
let xp = 800;
let ouro = 200;
let nivel = 3;

// Parte 1 -> Estado de Saúde de Ayla 
if (vida >= 80){
    console.log("Ayla está em ótima forma!");
} else if (vida >= 40){
    console.log("Ayla está ferida, mas ainda pode lutar");
} else{
    console.log("Ayla está em estado crítico, recue!");
}