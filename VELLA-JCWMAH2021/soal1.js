//1. Persegi
//2. Segitiga Siku-Siku Rata Kiri
//3. Segitiga Siku-Siku Rata Kanan

function displayResult() {
    let jenisBangunan = document.getElementById("jenisBangunan").value
    let inputNumber = document.getElementById("inputNumber").value
    let data=[]

    if (jenisBangunan == 1) {
        //Display dalam console.log
        for (let i = 0; i < inputNumber; i++) {
            var storeStar = ""
            for (let j = 0; j < inputNumber; j++) {
                storeStar += "*"
            }
            console.log(storeStar)
        }
        
        //Display dalam HTML
        // for (let i=1; i<=inputNumber; i++){
        //     let storeStar =""
        //     for (let j=1; j<=inputNumber; j++){
        //         storeStar += "*"
        //     }
        //     data.push(storeStar)
        // }
        // let listType1 = data.map((el) =>{
        //     return `
        //     <h4>${el}</h4>
        //     `
        // })
        // document.getElementById("result").innerHTML=listType1.join("") 

    } else if (jenisBangunan == 2) {
        // Display dalam console.log
        for (let i = 0; i < inputNumber; i++) {
            let storeStar = ""
            for (let j = 0; j <= i; j++) {
                storeStar += "*"
            }
            console.log(storeStar)
        }

        // Display dalam HTML
        // for (let i=1; i<=inputNumber; i++){
        //     let storeStar =""
        //     for (let j=1; j<=i; j++){
        //         storeStar += "*"
        //     }
        //     data.push(storeStar)
        // }
        // let listType1 = data.map((el) =>{
        //     return `
        //     <h4>${el}</h4>
        //     `
        // })
        // document.getElementById("result").innerHTML=listType1.join("") 

    } else if (jenisBangunan == 3) {
        //Display dalam console.log
        for (let i = 0; i < inputNumber; i++) {
            let storeStar = ''
            for (let j = inputNumber - i; j > 1; j--) {
                storeStar += " "
            }
            for (let k = 0; k <= i; k++) {
                storeStar += "*"
            }
            console.log(storeStar)
        }

        //Display dalam HTML
        // for (let i=0; i<=inputNumber; i++){
        //     let storeStar =""
        //     for (let j=inputNumber-i; j>=1; j--){
        //         storeStar += "*"
        //     }
        //     data.push(storeStar)
        // }
        // let listType1 = data.map((el) =>{
        //     return `
        //     <h4>${el}</h4>
        //     `
        // })
        // document.getElementById("result").innerHTML=listType1.join("") 
    }
}

console.log(displayResult())



