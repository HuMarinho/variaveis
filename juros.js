const m = 90000;
const c = 60000;
const n = 24;

const juros = Math.pow(m / c, 1 / n) - 1;
const jurosp = juros * 100;
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${jurosp.toFixed(3)} %  pois após ${n} meses você teve que pagar ${m} reais.`);



