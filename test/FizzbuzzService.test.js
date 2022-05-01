const FizzbuzzService = require("../libs/services/FizzbuzzService");
const   explorer = require("./exploreres.test.json");

describe("test  para Fizzbuzz service",()=>{
    test("requerimiento 1 divisble entre 3" ,()=>{   
        const explorer1= explorer[0];
        console.log(explorer1);
        FizzbuzzService.applyValidationInExplore(explorer1);
        console.log(explorer1);
        expect(explorer1.score).toBe(1); 
        
    });
});