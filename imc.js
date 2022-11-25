const peso = 95;
const altura = 1.92;

const imc = peso / (altura * altura); // poderia ter usado altura ** 2; Math.pow
console.log(`seu IMC é ${imc.toFixed(2)}`);
