const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json"); 
  
class FizzbuzzService{
    static applyValidationInExplore(explorer){
        this.explorer=explorer;
        const assignBuzzTrick = function(explorer){
            if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer.trick = "FIZZBUZZ";
                return explorer;
            }
            else if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
                return explorer;
            }
            else if(explorer.score%5 === 0){
                explorer.trick = "BUZZ";
                return explorer;
            }
            else{
                explorer.trick = explorer.score;
                return explorer;
            }
        };
        return assignBuzzTrick(explorer);            
    }  
}
module.exports = FizzbuzzService;