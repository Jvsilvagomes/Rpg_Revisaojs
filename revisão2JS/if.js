let ouro = 150;
let valorEspada = 50;
console.log("Saldo inicial", ouro);
let xp = 100;
// Quero que Ayla compre uma espada (que custa valorEspada), e para isso preciso verificar se ela tem ouro suficiente. Ao comprar vou atualizar o valor do ouro

if (ouro >= valorEspada){
    console.log("Obaaaa, espada comprada com sucesso");
    ouro -= valorEspada;
console.log("Saldo final", ouro);
}else{
    let diferenca = valorEspada - ouro;
    console.log(`Oie pobrinho, faltam ${diferenca} moedas de ouro para voce comprar sua nova espada.`);
}

