console.log("hello")
console.log("world")
console.log("!")

// time is in ms

setInterval(()=>{
    console.log("hello !")
},1000)

console.log("log 1")
console.log("log 2")
console.log("log 3")

// // // 1s

// // // setTimeout(()=>{},time)

let target = document.getElementById("time")

setInterval(() => {
    target.innerHTML = new Date().toLocaleTimeString()
}, 1000)

function action(){
    alert("hello")
}


let popElement = document.getElementById('pop')

setTimeout(()=>{
    popElement.classList = ""
},5000)

// Promise

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = 15
        if (data != 5) {
            reject("promise rejected !")
        } else {
            resolve("promise resolved !")
        }
    }, 10000)
})

myPromise.then((response) => {
    console.log(response)
}).catch((error) => {
    console.error("promise ran into an error ! : ",error)
})

// async await with try catch