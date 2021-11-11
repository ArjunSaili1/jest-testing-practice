function captalizeString(str){
    if(typeof str =="string"){
        return str[0].toUpperCase() + str.slice(1);
    }
}

function reverseString(str){
    if(typeof str == "string"){
        let returnStr = "";
        let test = [];
        for(let i = str.length - 1; i >= 0; i--){
            returnStr += str[i];
            test.push(i);
        }
        return returnStr
    }
}

const Calculator = (num1, num2) =>{
    function addNums(){
        return num1 + num2;
    }

    function subNums(){
        return num1 - num2;
    }

    function multiplyNums(){
        return num1 * num2;
    }

    function divideNums(){
        return num1 / num2;
    }

    return {addNums, subNums, multiplyNums, divideNums}
}

function ceaser(str, shift){
    let shifted = "";
    let test = [];
    for(let i = 0; i<str.length;i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            let upperNewShiftChar = String.fromCharCode(str.charCodeAt(i) + shift);
            if(upperNewShiftChar.charCodeAt(0) > 90){
                upperNewShiftChar = String.fromCharCode(upperNewShiftChar.charCodeAt(0) - 26)
            }
            shifted += upperNewShiftChar;
        }
        else if((str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)){
            let lowerNewShiftChar = String.fromCharCode(str.charCodeAt(i) + shift);
            if(lowerNewShiftChar.charCodeAt(0) > 122){
                lowerNewShiftChar = String.fromCharCode(lowerNewShiftChar.charCodeAt(0) - 26);
            }
            shifted += lowerNewShiftChar;
        }
        else{
            shifted += str[i];
        }
    };
    return shifted;
}

function arrayAnalysis(arr){
    const obj = {};
    obj["length"] = arr.length;
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    obj["average"] = sum/obj["length"];
    obj["min"] = Math.min(...arr);
    obj["max"] = Math.max(...arr);
    return obj;
}
export { captalizeString, reverseString, Calculator, ceaser, arrayAnalysis}; 