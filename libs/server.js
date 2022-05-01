const ExplorerController = require("./controller/ExplorerController");
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000 // puerto para el server

app.get('/', (req, res)=>{
    res.send("hola a todos ")
})

//metodos de http  GET POST  PUT  DELATE
app.get('/v1/explorers', (req,res)=>{
    console.log(`GET explorers  api v1 ${new Date()}`)
    const explorer1 ={ id:1,Name:"explorer1"}
    const explorer2 ={ id:1,Name:"explorer2"}
    const explorers=[explorer1,explorer2]
    //HTTP ESTATUS:200 TODO VA BIEN
    res.status(200).json(explorers)

})
app.listen(port,()=>{
    console.log("server listo calisto¡");
})