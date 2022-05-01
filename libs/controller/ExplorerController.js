const  FizzbuzzService =require("../services/ExplorerService");
const ExplorerService = require("../services/ExplorerService");
const   Reader = require("../utils/Reader");
const ruta = require("../../explorers.json")

class ExplorerController{
    static getExplorersByMission(mission){
        mission=Reader.readJsonFile("explorers.json")
        //console.log(mission);
        ExplorerService.filterBymission(mission)
        return mission
    }
}

module.exports = ExplorerController

