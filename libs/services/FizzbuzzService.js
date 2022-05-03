class FizzbuzzService{
    
    static applyValidationInExplore(explorer){
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
         
    } 
    static applyValidationInNumber(explorer,number) {
        this.number=number
        explorer.score=number
        const numberres= this.applyValidationInExplore(explorer)
        return numberres
    }   
}
module.exports =  FizzbuzzService;