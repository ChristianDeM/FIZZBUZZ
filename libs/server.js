const ExplorerController = require("./controller/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res)=>{
    res.send("hola a todos ");
});


app.get("/v1/explorers/:mission", (request,response)=>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);

});

app.get("/v1/explorers/amount/:mission", (request,response)=>{
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});

});
app.get("/v1/explorers/usernames/:mission", (request,response)=>{
    const mission = request.params.mission;
    const getExplorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: getExplorersUsernamesByMission});

});

app.listen(port,()=>{
    console.log("server listo calisto¡");
});