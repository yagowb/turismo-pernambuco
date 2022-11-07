const express = require("express");
const app = express();
const path = require('path');


function index(request, response, next) { 
    response.send('/index.html'); 
} 
app.get("/", index);

  app.get("/quem-somos.html", (req, res) => {
    res.sendFile(__dirname + "/quem-somos.html");
  });
  

//Inicialização do Servidor//
app.listen(process.env.PORT ?? 4000);

