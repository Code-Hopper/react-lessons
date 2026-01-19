// let number1 = 100
// let number2 = 200

// variable syntax
// scope[var, let, const] variable_name[rules] assignment oprator[=] value/data

// var - public 
// let & const - propected 

// empty BOX which would have a name and then we can store some value into that box 

// variable's values can be changed 

// var , let -> mutable
// let , const -> block scope

// bank
// date var
// let balance
// const accountNO = 123123

// naming rules

// 1. variable name has to be unqiue (within same scope) 
// 2. variable name can be alphanumeric but cannot start with a number also cannot have any space in between
// 3. variable name cannot have any special charachter [exception : " _ "]

// aithmatic, assignment, comparision, logical, bitwise, ternary, increement and decreement, member access

// javascript is a dyanamically typed language
// we dont have to define the data type while create a variable this type will be identified at run time.

// data type

// primitive
// number[int, float, short, byte, double], string, boolean (true/false)
// non-primitive
// default, null, nan, undefined, function, object

// let number3 = number1 + number2

// functions / methods

// built in / user defined

// // output functions 
// console.log()
// window.alert()
// document.write()

// // input functions
// window.prompt()
// window.confirm()

// cli nodejs / web

// console.log("hello world this is javascript !")
// console.log("hello 1")
// console.log("hello 2")
// console.log("hello 3")

// // window.alert("this is some alert !")
// document.write("this is some text content")

// let data = "kych bhi"

// console.log("type of data is "+ typeof(data))

// // concatenation

// let name = "Mrunal"
// let age = 23
// let city = "Pune"

// console.log("Hello ! my name is "+ name + ". i'm "+ age+ " years old , i'm from "+ city + " city.")

// operators

// 1. Airthmatic Operators
// + , - , / , * , %
// 2. Increement and Dcreement Operators
// ++(+1) , --(-1) [pre,post]
// 3. Comparision Operators
// < , > , <= , >= , != , == , ===
// 4. Logical Opertors
// && AND , || OR
// 5. Assignment Operators
// =, +=, -=,*=, /=, %=
// 6. Ternary Operators
// ? (ternary conditional statement)
// 7. Member Access Operators
// .dot

// let data = 10

// // console.log(data++)

// let data2 = data++

// console.log(data2)

// console.log(data)

// let data = 10

// data += 10 // data = data + 10 // 20
// data -= 10 // data = data - 10 // 0
// data /= 10 // data = data / 10 // 1
// data *= 10 // data = data * 10 // 100
// data %= 10 // data = data % 10 // 0

// console.log("hello" + " world " + "!" + data)

// string + anything = string

// "10" + 10 = 1010
// 10 + 10 = 20
// "a" + 10 = a10

// console.log(10+"10")

// template litral
// `` - back tick

// console.log(`hello world ! ${10+10}`)

// let name = "amey khondekar"
// let age = 23
// let city = "nagpur"

// console.log(`hello ! my name is ${name} i'm from ${city} city, my age is ${age} years.`)

// type casting

// STRING --> NUMBER

// let data = "123" 

// // casting to number will create NaN(Not a Number) when string values if only alphabets/alphanumeric

// console.log(`before type casting ${typeof(data)} : ${data}`)

// data = Number(data)

// console.log(`after type casting ${typeof(data)} : ${data}`)

// STRING --> BOOLEAN

// let data = "" 

// // if empty string then casting will create false

// console.log(`before type casting ${typeof(data)} : ${data}`)

// data = Boolean(data)

// console.log(`after type casting ${typeof(data)} : ${data}`)

// NUMBER --> STRING

// let data = 123 

// console.log(`before type casting ${typeof(data)} : ${data}`)

// // data = String(data)
// data = data.toString()

// console.log(`after type casting ${typeof(data)} : ${data}`)

// NUMBER --> BOOLEAN

// let data = 0 

// // if 0 then false, else true

// console.log(`before type casting ${typeof(data)} : ${data}`)

// data = Boolean(data)

// console.log(`after type casting ${typeof(data)} : ${data}`)

// BOOLEAN --> STRING

// let data = true

// console.log(`before type casting ${typeof(data)} : ${data}`)

// // data = String(data)
// data = data.toString()

// console.log(`after type casting ${typeof(data)} : ${data}`)

// BOOLEAN --> NUMBER

// let data = false

// // if false then 0, else 1

// console.log(`before type casting ${typeof(data)} : ${data}`)

// data = Number(data)

// console.log(`after type casting ${typeof(data)} : ${data}`)