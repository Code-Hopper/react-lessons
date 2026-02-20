// dom -> document object model
// html page

// // html
// //   |
// //   |
// //   |_ head
// //   |
// //   |
// //   |
// //   |_body
//         |
//         |
//         |_h1
//         |
//         |_div
//            |_form
//            |_table

// getEelementsByTagName("tagname")
// getEelementsByClassName("classname")
// getEelementById("id")
// querySelector("css selector")
// querySelectorAll("css selector")

// event

// mouse event(click, dlbclick, contextMenu,mouseenter, mouseleave)
// keyboard event(keypress, keydown, keyup)
// form event(change,submit)
// window event(load, unload, resize, close)

// targetedElement.onevent = function
// targetedElement.addEventListner("event",function)

let div = document.getElementById("i1") //single element
let buttons = document.getElementsByTagName("button") //collection of buttons/elements

let input = document.querySelector("input")

let show = true

console.log(div)

function changeColor(event) {
    div.style.background = "yellow"
}

function hideElement(event) {
    show = !show
    if (show) {
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
}

buttons[0].onclick = changeColor

buttons[1].addEventListener("click", hideElement)

input.addEventListener("change",(event)=>{
    console.log(event.target.value)
    div.style.background = event.target.value
})