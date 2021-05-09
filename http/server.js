const http = require('http');

http.createServer((req, res) => {
  res.write('Olá!');
  res.end();
}).listen(3000, () => console.log('servidor rodando na porta 3000'))