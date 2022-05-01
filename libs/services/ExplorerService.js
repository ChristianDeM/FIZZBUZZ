class ExplorerService{
    static filterBymission(explorers,mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
         return explorersByMission;
    }

    static getExplorersUsernamesByMission(explorers){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    static getAmountOfExplorersByMission(explorers){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode;
    }
}




module.exports=ExplorerService