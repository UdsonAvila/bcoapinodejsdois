const http = require('http');

// Cria um servidor e atribui uma callback de processamento da requisição
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
      res.statusCode = 200; // Retorno OK
      res.setHeader('Content-Type', 'text/html'); 
      res.end(`<form method="POST">
                  Informe seu nome: <input type="text" name="nome"> <input type="submit" value="Ok">
               </form>`);
  } else {
    var str = ''
    req.on('data', function (chunk) {
      str += chunk;
    });
  
    req.on('end', function () {
        nome = str.split('=')[1];
        res.statusCode = 200; // Retorno OK
        res.setHeader('Content-Type', 'text/html'); 
        res.end(`Bem vindo ${nome}`); 
    });        

  }

});

// Define parâmetros (hostname e porta) e inicia o servidor
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(` Servidor rodando`);
});