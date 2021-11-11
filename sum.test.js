import  { captalizeString, reverseString, Calculator, ceaser, arrayAnalysis} from "./script"
describe('captalizeString', ()=>{
    test("All Uppercase String", ()=>{
        expect(captalizeString("ABCD")).toBe("ABCD")
    })
    
    test("All Lowercase String", ()=>{
        expect(captalizeString("abcd")).toBe("Abcd")
    })
    
    test("String with uppercase and lowercase", ()=>{
        expect(captalizeString("aBcD")).toBe("ABcD")
    })
    
    test("Not String (captializeString)", ()=>{
        expect(captalizeString(1231)).toBe(undefined)
    })    
})

describe("reverseString", ()=>{
    test("One Character String", ()=>{
        expect(reverseString("a")).toBe("a")
    })
    
    test("Multi Character String", ()=>{
        expect(reverseString("abcd")).toBe("dcba")
    })
    
    test("Non string (reverseString)", ()=>{
        expect(reverseString(12)).toBe(undefined)
    })
    
    test("Palidrome", ()=>{
        expect(reverseString("racecar")).toBe("racecar")
    })
})

describe("Calculator", ()=>{
    let calc;
    beforeEach(()=>{
        calc = Calculator(1, 2);
    });

    test("Add", ()=>{
        expect(calc.addNums()).toBe(3);
    });

    test("Subtract", ()=>{
        expect(calc.subNums()).toBe(-1);
    });

    test("Multiply", ()=>{
        expect(calc.multiplyNums()).toBe(2);
    });

    test("Divide", ()=>{
        expect(calc.divideNums()).toBe(0.5);
    });
});

describe("Ceaser Cipher", ()=>{

    test("All lowercase String with no spaces or punctuation and shift over of 1", ()=>{
        expect(ceaser("hello", 1)).toBe("ifmmp");
    });
    
    test("String with spaces and punctuation and shift over of 1", ()=>{
        expect(ceaser("h!e! ll o#", 1)).toBe("i!f! mm p#");
    });

    test("String with only puctuation", ()=>{
        expect(ceaser("#@$#@..,", 2)).toBe("#@$#@..,")
    })

    test("All Uppercase letters", ()=>{
        expect(ceaser("HELLO", 1)).toBe("IFMMP");
    });

    test("Mixed case letter string", ()=>{
        expect(ceaser("aBcDe", 1)).toBe("bCdEf");
    });

    test("Large Shift", ()=>{
        expect(ceaser("Hello!", 25)).toBe("Gdkkn!");
    });
    
    test("No shift", ()=>{
        expect(ceaser("Hello", 0)).toBe("Hello")
    })
});

describe("Array Analysis", ()=>{

    test("4 Number Array", ()=>{
        expect(arrayAnalysis([1,2,3,4])).toMatchObject({average: 2.5, min: 1, max:4, length: 4})
    })

    test("Array includes negatives", ()=>{
        expect(arrayAnalysis([-1, -2, 0, 1, 0])).toMatchObject({average:-0.4, min: -2, max: 1, length: 5})
    })
})