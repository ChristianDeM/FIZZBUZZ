const  FizzbuzzService =require("../services/ExplorerService");
const ExplorerService = require("../services/ExplorerService");
const   Reader = require("../utils/Reader");
const ruta = require("../../explorers.json");
const res = require("express/lib/response");

class ExplorerController{
    static getExplorersByMission(mission){
        this.mission=mission;
        const  explorer=Reader.readJsonFile("explorers.json");
        const res = ExplorerService.filterBymission(explorer,mission);
        return res;
    }
    static getExplorersUsernamesByMission(mission){  
        this.mission=mission;
        const  explorer=Reader.readJsonFile("explorers.json");             
        const res =ExplorerService.getExplorersUsernamesByMission(explorer,mission);
        return res;
    }
    static getExplorersAmonutByMission(mission){  
        this.mission=mission;
        const  explorer=Reader.readJsonFile("explorers.json");             
        const res =ExplorerService.getAmountOfExplorersByMission(explorer,mission);
        return res;
    }


}

module.exports = ExplorerController;

