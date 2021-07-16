const express = require("express")
const app = express()
const cidades = require("./data/estados-cidades.json")

app.get("/", (req, res) =>{
    console.log('rodando')
    response.status(200).json("Salve!")
})

app.get("/estados/todos", (req, res) => {
    response.status(200).send(cidades)
})

app.get("/estados/:sigla", (req, res) => {
    const nomeRequisitado = request.params.sigla
    console.log(nomeRequisitado)
    response.status(200).send(cidades.find(estado => estado.sigla == nomeRequisitado))
})  


app.listen(3030, () =>{
    console.log('Meu primeiro terminal')
}) 