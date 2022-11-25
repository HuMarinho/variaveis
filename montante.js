const capital = 1000;
const taxa = (1 + (12.5 / 100));
const tempo = 5;

const montante = capital * Math.pow(taxa, tempo);

console.log(montante.toFixed(2));
