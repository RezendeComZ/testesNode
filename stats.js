const os = require('os');
// console.log(os.cpus())

const {freemem, totalmem } = os

function StatusMemoria() {
  const memLivre = parseInt(freemem() / 1024 / 1024);
  const memTotal = parseInt(totalmem() / 1024 / 1024)
  const percentLivre = parseInt(memLivre / memTotal * 100)
  const percentUsada = parseInt(((memTotal - memLivre) / memTotal) * 100)
  console.log('Memória livre: ' + memLivre + " MB")
  console.log('Memória total: ' + memTotal + " MB")
  console.log('Porcentagem de memória usada: ' + percentUsada + "%")
  console.log('Porcentagem de memória livre: ' + percentLivre + "%")
  
  const stats = {
    livre: `${memLivre} MB`,
    total: `${memTotal} MB`,
    usada: `${percentUsada}%`
  }
  
  console.clear()
  console.table(stats);

}

StatusMemoria();

// Memória
setInterval(() => {
  StatusMemoria()
}, 1000)
