const express = require("express");
const app = express();
const path = require('path');



app.use("/images", express.static(path.join(__dirname, '/images')));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get("/quem-somos.html", (req, res) => {
    res.sendFile(__dirname + "/quem-somos.html");
  });
  
app.get("/destinos.html", (req, res) => {
    res.sendFile(__dirname + "/destinos.html");
  });

//Inicialização do Servidor//
app.listen(process.env.PORT ?? 4000);

