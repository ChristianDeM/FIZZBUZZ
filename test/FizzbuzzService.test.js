const { number } = require("../libs/services/FizzbuzzService");
const FizzbuzzService = require("../libs/services/FizzbuzzService");
const   explorer = require("./exploreres.test.json");

describe("test  para Fizzbuzz service",()=>{
    test("requerimiento 1 divisble entre 3" ,()=>{   
        const explorer1= explorer[0];
        FizzbuzzService.applyValidationInExplore(explorer1);
        expect(explorer1.score).toBe(1); 
        
    });
});

describe("test  para Fizzbuzz service",()=>{
    test("requerimiento probando nuevo update number" ,()=>{ 
        const explorer1= explorer[0]; 
        const number=1
        const validationNumber= FizzbuzzService.applyValidationInNumber(explorer1,number);
        expect(validationNumber.score).toBe(1); 
        expect(validationNumber.trick).toBe(1); 
        
    });
});