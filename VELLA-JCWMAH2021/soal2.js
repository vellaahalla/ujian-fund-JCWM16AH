var char = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789" 

var condition = false 
let arrNumber = []

do {
    let inputNumber = prompt("Masukkan Angka")
    if (char.includes(inputNumber[1])){
        condition=false
    } else{
        let intNumber = parseInt(inputNumber)
        arrNumber.push(intNumber)
        condition = true
        console.log(arrNumber)
    }    
}
while (condition)

let newArray = arrNumber.sort((a, b) => a - b);
console.log(`Sort Array adalah ${newArray}`)

let minNumber = newArray[0]
let maxNumber = newArray[0]

for (let i=1; i<newArray.length;i++){
    if (arrNumber[i]<minNumber){
        minNumber=arrNumber[i]
    } else{  
        maxNumber=arrNumber[i]
    }
}

console.log(`Nilai Minimum adalah ${minNumber}`)
console.log(`Nilai Maximum adalah ${maxNumber}`)