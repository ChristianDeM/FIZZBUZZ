const ExplorerController = require("./controller/ExplorerController");
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000 // puerto para el server

app.get('/', (req, res)=>{
    res.send("hola a todos ")
})

//metodos de http  GET POST  PUT  DELATE
app.get('/v1/explorers/:mission', (request,response)=>{
    const mission = request.params.mission;
   
    const explorersInMission = ExplorerController.getExplorersByMission(mission)
    //HTTP ESTATUS:200 TODO VA BIEN
    res.json(explorersInMission)

})

app.get('/v1/explorers/amount/:mission', (req,res)=>{
    const mission = req.params.mission;
    const explorersAmountInMission = ExplorerController.explorersAmountInMission(mission)
    //HTTP ESTATUS:200 TODO VA BIEN
    res.json({mission: request.params.mission, quantity: explorersAmountInMission})

})

app.listen(port,()=>{
    console.log("server listo calisto¡");
})