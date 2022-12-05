const express = require("express");
const app = express();
const path = require('path');
const services = require('./services')
const bodyParser = require('body-parser');


app.use("/images", express.static(path.join(__dirname, '/images')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get("/quem-somos.html", function(req, res) {
  res.sendFile(__dirname + "/quem-somos.html");
});
  
app.get("/destinos.html", function(req, res)  {
  res.sendFile(__dirname + "/destinos.html");
});



//////////////ROTA DE CONTATO////////////////
app.get("/contato.html", function(req,res) {
  res.sendFile(__dirname + "/contato.html");
})

app.post("/add", function(req,res){
  res.send("Mensagem enviada! Aguarde que em breve entaremos em contato com você :)");
})
/////////////////////////////////////////////

//////////ROTA DE ORÇAMENTOS///////////////////

app.get("/pacotes.html", function(req,res){
  res.sendFile(__dirname + "/pacotes.html");
})

app.post("/orcamento", (req, res) => {
  const destino = req.body.destino
  
  const orcamento = services.fazerOrcamento(destino)

  res.send(orcamento.toString())
})

//////////////////////////////////////////////////

//Inicialização do Servidor//
app.listen(process.env.PORT ? process.env.PORT : 5000);

