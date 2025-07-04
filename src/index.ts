function inverterArray(arr:Array<number>):Array<number>{
    const reverseArray:Array<number> = [];
    for(let index = (arr.length - 1); index >= 0; index--){
        reverseArray.push(arr[index]);
    }
    return reverseArray;
}


function decimalToBinary(decimal:number = 0):string{
    const Arraybinary:Array<number> = [];
    if(decimal === 0) { return "0" };
    while(decimal !== 1){
        let resto = decimal % 2;
        decimal = Math.trunc(decimal / 2);
        Arraybinary.push(resto);
    }
    Arraybinary.push(decimal);
    const binary = String(parseInt(inverterArray(Arraybinary).join("")));
    //return binary;
    return binary.padStart(8, "0");
}

function binaryToDecimal(binary:string):number{
    const binaryReverse = binary.split("").reverse().join("");
    let sum = 0;
    for(let index = 0; index < binaryReverse.length; index++){
        let decimal = (2**index) * Number(binaryReverse[index]);
        sum = decimal + sum;
    }
   return sum;
}   

function binaryToDecimalNative(binary:string):number{
    const binaryString= String(binary);
    return parseInt(binaryString, 2);
}

function decimalToStr(decimal:number):string{
    return String.fromCharCode(decimal);
}

function describChar(decimal:number):string{
    if(decimal === 32) return "SPACE";
    if(decimal === 127) return "DELETE";
    return decimal < 32 ? `CTRL ${decimal}` : decimalToStr(decimal);
}

function strToBinary(str:string):string{
    const decimal = str.charCodeAt(0);
    const binary  = decimal === 0 ? "00000000" : decimalToBinary(decimal);
    return binary;
}

const binary = decimalToBinary(65);
const decimal = binaryToDecimal(binary);
const str = decimalToStr(decimal);
//const decimalNative = binaryToDecimalNative(binary);

console.log(`O número binário de ${decimal} é ${binary} e sua representação na tabela ASCII é ${describChar(decimal)}`);
console.log("ASCII em Binário: ", strToBinary(str));