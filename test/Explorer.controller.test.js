const ExplorerController = require("../libs/controller/ExplorerController");

describe("test  para explorerController service",()=>{
    test("requerimiento 1 obtener lista de explores con node" ,()=>{
        const ExplorersNode = ExplorerController.getExplorersByMission("node")
        expect(ExplorersNode[0].name).toBe("Woopa1");
        expect(ExplorersNode[0].githubUsername).toBe("ajolonauta1");
        expect(ExplorersNode[0].score).toBe(1);
        expect(ExplorersNode[0].mission).toBe("node");  
    });
});

describe("test  para explorerController service",()=>{
    test("requerimiento 2 obtener la cantidad de explorers" ,()=>{
        const mission="node"
        const ExplorersMount = ExplorerController.getExplorersAmonutByMission("node");
        console.log(ExplorersMount);
        expect(ExplorersMount).toBe(10); 
    });
});