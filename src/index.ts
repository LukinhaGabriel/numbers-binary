function inverterArray(arr:Array<number>):Array<Number>{
    const reverseArray:Array<number> = [];
    for(let index = (arr.length - 1); index >= 0; index--){
        reverseArray.push(arr[index]);
    }
    return reverseArray;
}


function decimalToBinary(decimal:number = 0):number {
    const Arraybinary:Array<number> = [];
    while(decimal !== 1){
        let resto = decimal % 2;
        decimal = Math.trunc(decimal / 2);
        Arraybinary.push(resto);
    }
    Arraybinary.push(decimal);
    const binary = parseInt(inverterArray(Arraybinary).join(""));
    return binary;
}

function binaryToDecimal(binary:number = 0):number{
    const binaryString= String(binary);
    const binaryReverse = binaryString.split("").reverse().join("");
    let sum = 0;
    for(let index = 0; index < binaryReverse.length; index++){
        let decimal = (2**index) * Number(binaryReverse[index]);
        sum = decimal + sum;
    }
   return sum;
}   

function binaryToDecimalShort(binary:number):number{
    const binaryString= String(binary);
    return parseInt(binaryString, 2);
}

const binary = decimalToBinary(18);
const decimal = binaryToDecimal(binary);
const decimalShort = binaryToDecimalShort(binary);

console.log(`O número binário de ${decimal} é ${binary}`);
console.log(`O número binário de ${decimalShort} é ${binary}`);