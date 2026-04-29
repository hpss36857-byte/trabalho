let frases = [
    "nunca subestime o poder do trabalho em equipe - halo 3",
    "o  aço ganha as batalhas, o ouro ganha a guerra - davion dotta 2",
    "existe diferença entre sobreviver e viver - the last of us ",
    "as vezes é melhor ter paciencia do que agir impulsivamente - zelda botw",
    "goool - FC 2026",
    "não importa o quão escura seja a noite, o amanhã sempre chega - final fantasy x",
    "espaço. espaço. eu to no ESPAÇOOOOOO - portal 2",
    "i am batman - batman"
];

let cliques = 0;

function gararFrase(){

    let indice = Math.floor(Math.random()  * frases.length);

    let fraseEscolhida = frases[indice];

    cliques = cliques+1;

    document.getElementById("frases").innerText = fraseEscolhida;

    document.getElementById("contador").innerText = "Frases geradas: "+cliques;
}