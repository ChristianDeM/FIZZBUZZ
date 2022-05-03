const ExplorerController = require("./controller/ExplorerController");
const express = require("express");
const FizzbuzzService = require("./services/FizzbuzzService");
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
app.get("/v1/fizzbuzz/:number", (request,response)=>{
    const number = request.params.number;
    const getValidation = ExplorerController.validation(number);
    response.json({score: request.params.number, trick: getValidation.trick});

});

app.listen(port,()=>{
    console.log("server listo calisto¡");
});