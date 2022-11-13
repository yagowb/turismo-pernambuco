const express = require("express");
const app = express();
const path = require('path');
const services = require('./services')


app.use("/images", express.static(path.join(__dirname, '/images')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

app.get("/quem-somos.html", function(req, res) {
  res.sendFile(__dirname + "/src/quem-somos.html");
});
  
app.get("/destinos.html", function(req, res)  {
  res.sendFile(__dirname + "/src/destinos.html");
});

app.get("/contato.html", function(req,res) {
  res.sendFile(__dirname + "/src/contato.html");
})

app.post("/orcamento", (req, res) => {
  const destino = req.body.destino
  
  const orcamento = services.fazerOrcamento(destino)

  res.send(orcamento.toString())
})

//Inicialização do Servidor//
app.listen(process.env.PORT ? process.env.PORT : 4000);

