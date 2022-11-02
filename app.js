const express = require("express");
const app = express();
const path = require('path');



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  

//Inicialização do Servidor//
app.listen(4000, function(erro){
    if(erro){
        console.log("Erro ao iniciar servidor");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})

