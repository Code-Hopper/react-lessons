// try {
//     // code where an exception migth apear
// } catch (e) {
//     // handling code
// }

// console.log("hello " + name)

// try {
//     let num1 = 10
//     let num2 = 10

//     let div = num1 / num2

//     if (div == Infinity) {
//         throw ("denominator cannot be 0 !")
//     }

//     console.log(div)

// } catch (err) {
//     console.log("some problem occured in the code : ", err)
// } finally {
//     console.log("program completed !")
// }

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    }, 10000)
})

async function callPromsie() {
    try {
        console.log(myPromise)
        console.log("promise resolved !")
    } catch (err) {
        console.log("some error occured : ", err)
    } finally {
        console.log("program completed !")
    }
}

await callPromsie()