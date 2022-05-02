const  FizzbuzzService =require("../services/ExplorerService");
const ExplorerService = require("../services/ExplorerService");
const   Reader = require("../utils/Reader");
const ruta = require("../../explorers.json");
const res = require("express/lib/response");

class ExplorerController{
    static getExplorersByMission(mission){
        const  explorer=Reader.readJsonFile("explorers.json")
        mission = ExplorerService.filterBymission(explorer,"node")
        return mission
    }
    static getExplorersAmonutByMission(mission){  
             const  explorer=Reader.readJsonFile("explorers.json")             
             const cat =ExplorerService.getAmountOfExplorersByMission(explorer);
            return cat
    }
}

module.exports = ExplorerController

