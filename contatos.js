const { application } = require("express");

class Contato {
    nome;
    email;
    mensagem;

    Contato(nome, email, mensagem){
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }
}


let contatos = new Array(
    new Contato("Pedrito", "email@bacana.com", "Quero ajuda"),
    new Contato("Joana", "joana@bol.com", "quero ajuda")
)

app.post("/contato.html", (req,res) =>{

    let nome = req.body.nome;
    let email = req.body.email;
    let mensagem = req.body.mensagem;

    contatos.push(new Contato(nome, email, mensagem));
})

