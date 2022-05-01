const   ExplorerService = require("./../libs/services/ExplorerService");
const   explorers = require("./exploreres.test.json");
describe("test  para explorer service",()=>{
    test("requerimiento 1 obtener lista de explores con node" ,()=>{
        const ExplorersNode = ExplorerService.filterBymission(explorers,"node");
        expect(ExplorersNode[0].name).toBe("Woopa1");
        expect(ExplorersNode[0].githubUsername).toBe("ajolonauta1");
        expect(ExplorersNode[0].score).toBe(1);
        expect(ExplorersNode[0].mission).toBe("node");       
    });
});
describe("test  para explorer service",()=>{
    test("requerimiento 2 obteniendo la cantidad de explorers con node" ,()=>{
        const ExplorersMount = ExplorerService.getAmountOfExplorersByMission(explorers,"node");
        expect(ExplorersMount).toBe(10);
    
    });
});

describe("test  para explorer service",()=>{
    test("requerimiento 3 obteniendo GithubbUsernames que tengan node" ,()=>{
        const Explorersgithubname = ExplorerService.getExplorersUsernamesByMission(explorers,"node");
        expect(Explorersgithubname[0]).toBe("ajolonauta1");
    
    });
});