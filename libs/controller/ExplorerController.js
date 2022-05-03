const  FizzbuzzService =require("../services/FizzbuzzService");
const ExplorerService = require("../services/ExplorerService");
const   Reader = require("../utils/Reader");



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
    static validation(number){
        const explorer=Reader.readJsonFile("explorers.json");
        this.number=number 
        const validationindi =  FizzbuzzService.applyValidationInNumber(explorer[0],number);
        return validationindi
    }


}

module.exports = ExplorerController;

