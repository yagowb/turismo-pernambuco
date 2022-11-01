const express = require("express");
const app = express();


//Inicialização do Servidor//
app.listen(4001, function(erro){
    if(erro){
        console.log("Erro ao iniciar servidor");
    }else{
        console.log("Servidor iniciado com sucesso");
    }
})