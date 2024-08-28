const conversion_data = {
    1: "I",
    2: "II",
    3:"III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
}

console.log("hey")
const readline = require("readline")

const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
})
rl.question(
        'please enter a value: ', (input) => {
                const returnedValue = numberToRomanValue(input)
                console.log(`${returnedValue}`)
                rl.close()
        }
)

function numberToRomanValue(input){
        let x = parseInt(input) //input is a number
        let inputArray = input.split('')
        inputArray = inputArray.filter(e => e != ' ')
        let numIteration = 0
        function ZeroToTen(numInput){
                if ( numInput < 11){
                        return conversion_data[numInput]
                }
        }
        function TentoForty(numInput){
                if ( (40 > numInput) && (numInput >10)){
                        let firstnumber = conversion_data[10].repeat(Math.floor(numInput / 10)) 
                        let result;
                        if ((numInput % 10) > 0){
                            console.log(numInput % 10)
                            let secondnumber = ZeroToTen((numInput % 10))
                            result = firstnumber+secondnumber  
                        } else {
                                result = firstnumber
                        }
                        return result
                }
                else {
                        return "10-40err"
                }
        }
        function FortytoFifty(numInput){
                if ( (50 > numInput) && (numInput > 39)){
                        let firstnumber = conversion_data[12]
                        let result;
                        if ((numInput % 40) > 0){
                            console.log(numInput % 40)
                            let secondnumber = ZeroToTen((numInput % 40))
                            result = secondnumber+firstnumber 
                            console.log(numInput % 40, secondnumber, result, firstnumber)  
                        } else {
                                result = firstnumber
                        }
                        return result
                }
                else {
                        return 200
                }
        }
        inputArray.forEach(num => {
                if(!((parseInt(num) + 1 )>= 1) ) {
                        console.log('please pass in a valid number')
                } else{
                        numIteration = numIteration + 1
                }
        })
        if (numIteration === input.length){
                let ZeroToTenresult = ZeroToTen(x)
                let TentoFortyresult = TentoForty(x)
                let FortytoFiftyresult = FortytoFifty(x)
                if (ZeroToTenresult){
                        return ZeroToTenresult
                } else if (TentoFortyresult){
                        return (TentoFortyresult, "hi")
                } else if (FortytoFiftyresult){
                        return FortytoFiftyresult
                }
                
        } else{
                return 300
        }
        /* if(input.length > 1){
             
             console.log(inputArray)   
        } */
        
}





//Logic Process
//Get the number id and check the length of the value
//IF length === 1 then         ---- FUNCTION 1
        // !&3, 3< x >5, 5 < x > 10, 
//If value === 10               ---- FUNCTION 2
        // X
//If length === 2 and x > 50 the    ---- FUNCTION 3
        //substract 10 from it and run the first function
        //add X to the value it returns

//IF value === 50                   ---- FUNCTION 4
        // L
//If length === 2 and greater than 50 the   ---- FUNCTION 5
        //substract 50 from it and run the third function
        //add L to the value it returns
//If x = 100                        ---- FUNCTION 5
        // x = C
//If length === 2 and x > 50 the    ---- FUNCTION 3



//1-3
//4-8 a 5
//9-19 a