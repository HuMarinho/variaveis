const x = 1;
const x1 = 1;

const y = 1;
const y1 = 4;

let ponto1 = Math.pow((x1 - x), 2); //toda essa operação poderia vir dento da const de distancia 
let ponto2 = Math.pow((y1 - y), 2);

const distancia = Math.sqrt(ponto1 + ponto2); // Math.sqrt ( ( x1 -x ) ** 2 + ( y1 - y )** 2)
console.log(distancia);
