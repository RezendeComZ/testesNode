const os = require('os');

const {freemem, totalmem } = os

console.log(os.cpus())

// Memória
const memLivre = parseInt(freemem() / 1024 / 1024);
const memTotal = parseInt(totalmem() / 1024 / 1024)
console.log('Memória livre: ' + memLivre + " MB")
console.log('Memória total: ' + memTotal + " MB")
console.log('Porcentagem de memória usada: ' + parseInt(((memTotal - memLivre) / memTotal) * 100)  + "%")
console.log('Porcentagem de memória livre: ' + parseInt(memLivre / memTotal * 100) + "%")