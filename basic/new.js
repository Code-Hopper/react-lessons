// // dom -> document object model
// // html page

// // // html
// // //   |
// // //   |
// // //   |_ head
// // //   |
// // //   |
// // //   |
// // //   |_body
// //         |
// //         |
// //         |_h1
// //         |
// //         |_div
// //            |_form
// //            |_table

// // getEelementsByTagName("tagname")
// // getEelementsByClassName("classname")
// // getEelementById("id")
// // querySelector("css selector")
// // querySelectorAll("css selector")

// // event

// // mouse event(click, dlbclick, contextMenu,mouseenter, mouseleave)
// // keyboard event(keypress, keydown, keyup)
// // form event(change,submit)
// // window event(load, unload, resize, close)

// // targetedElement.onevent = function
// // targetedElement.addEventListner("event",function)

// let div = document.getElementById("i1") //single element
// let buttons = document.getElementsByTagName("button") //collection of buttons/elements

// let input = document.querySelector("input")

// let show = true

// console.log(div)

// function changeColor(event) {
//     div.style.background = "yellow"
// }

// function hideElement(event) {
//     show = !show
//     if (show) {
//         div.style.display = "block"
//     } else {
//         div.style.display = "none"
//     }
// }

// buttons[0].onclick = changeColor

// buttons[1].addEventListener("click", hideElement)

// input.addEventListener("change",(event)=>{
//     console.log(event.target.value)
//     div.style.background = event.target.value
// })

let form = document.querySelector('form')

let entries = []

let tbody = document.querySelector("table > tbody")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(event.target[0].value)
    console.log(event.target[1].value)
    console.log(event.target[2].value)
    console.log(event.target[3].value)

    let entry = {
        name: event.target[0].value,
        email: event.target[1].value,
        contact: event.target[2].value,
        dob: event.target[3].value,
    }

    if (!entry.name || !entry.email || !entry.contact || !entry.dob) {
        alert("missing data !")
    } else {
        entries.push(entry)
        renderTable()
    }
})

function renderTable() {

    tbody.innerHTML = ""

    for (let entry = 0; entry < entries.length; entry++) {
        tbody.innerHTML += `
        <tr>
            <td>${entries[entry].name}</td>
            <td>${entries[entry].email}</td>
            <td>${entries[entry].contact}</td>
            <td>${entries[entry].dob}</td>
            <td>
                <button onclick="deleteRow(${entry},entries)">
                    delete
                </button>
            </td>
        </tr>
        `
    }
}

function deleteRow(index, tableArray) {
    if (tableArray.length != 0) {
        tableArray.splice(index, 1,)
        renderTable()
    } else {
        alert("empty table !")
    }
}

// create, append, delete a child in DOM

let heading = document.createElement("h1")

heading.innerHTML = "<u>hello world</u>"

document.querySelector("div").appendChild(heading)

document.querySelector("div").removeChild(heading)

console.log(document.querySelector("div:nth-child(2)"))

document.querySelector('body > section').removeChild(document.querySelector("div:nth-child(2)"))