const tenis = 129.99;
const grana = 80.00;

const desconto = grana / tenis;
const cupom = (1 - desconto) * 100;
console.log(cupom);
