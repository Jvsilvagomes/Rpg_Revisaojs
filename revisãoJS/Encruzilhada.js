let temChaveFerro = true;
let temMapa = false;
let nivel = 7;
let vida = 45;

//1. Caverna das sombras -> precisa da chave e o mapa.
let podeEntraCaverna = temChaveFerro && temMapa;
console.log("Pode entrar na caverna das combras?", podeEntraCaverna);

//2. Templo do Dragão -> nivel 5 Ou ter a chave de ferro.
let podeEntraTemplo = nivel >=5 || temChaveFerro;
console.log("Pode entrar no templo do Dragão?", podeEntraTemplo);

//3. Bosque da Recuperação -> vida < 50 e nao ter mapa 
let podeEntrarBosque = vida < 50 && !temMapa;
console.log("Pode entrar no Bosque da Recuperação?", podeEntrarBosque); 