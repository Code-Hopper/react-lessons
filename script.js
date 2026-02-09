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

// let input = window.confirm("are you sure ?") // boolean

// console.log(`value of input is ${input} and type is ${typeof(input)}`)

// let input = window.prompt("enter your name !")  // type will always be a string

// console.log(`value of input is ${input} and type is ${typeof(input)}`)

// take 2 numbers as input and print their sum.

// conditional statements

// 1. if, 2. if else, 3. if elseif, 4. ternary statement

// if statement

// if (condition) {
//     // if true then this body
// }

// let a = 10
// let b = 200
// let c = 50
// b > a true
// if (b > a) {
//     console.log("b is greater than a !")
// }

// if(condition){
//     // true block
// }else{
//     // false block
// }

// if(b > a) {
//     console.log("b is greater than a !")
// }else{
//     console.log("a is greater than b !")
// }

// a > b -> a > c = a is greater
// b > a -> b > c = b is greater
// c > a -> c > b = c is greaters 

// nasted if, if-elseif

// a 40 , b 40 , c 40

// if (a > b) {
//     if (a > c) {
//         console.log("a is greater than b & c !")
//     } else {
//         console.log("c is greater than a & b !") // 1
//     }
// } else if (b > c) {
//     console.log("b is greater than a & c !")
// } else {
//     console.log("c is greater than a & b !") // 2
// }

// ternary statements

// condition ? true : false

// let a = 20
// let b = 20

// a > b ? console.log("a is greater !") : console.log("b is greater !")

// leap year
// a leap occurs once in every 4 year and not in every 100 years and then in every 400 years

// 2024 -> 2026 -> 2028
// 2000 - 2100 x - 2200 x - 2300 x - 2400 x


// if (year % 100 == 0) {
//     if (year % 400 == 0) {
//         console.log(`${year} year is a leap year !`)
//     } else {
//         console.log(`${year} year is not a leap year !`)
//     }
// } else if (year % 4 == 0) {
//     console.log(`${year} year is a leap year !`)
// } else {
//     console.log(`${year} year is not a leap year !`)
// }

// if ((year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
//     console.log(`${year} year is a leap year !`)
// } else {
//     console.log(`${year} year is not a leap year !`)
// }

// let year = 2028

// year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) ? console.log(`${year} year is a leap year !`) : console.log(`${year} year is not a leap year !`)

// && AND , || OR, ! NOT

// let a = 10
// let b = 11
// let c = 12

// if ((a > b) && (a > c)) {
//     console.log("a is greater than b and c !")
// } else if (b > c) {
//     console.log("b is greater than a and c")
// }else{
//     console.log("c is greater than a and b")
// }

// p   q  p and&& q
// t   t     t
// t   f     f
// f   t     f
// f   f     f

// p   q  p or|| q
// t   t     t
// t   f     t
// f   t     t
// f   f     f


// let input = ""

// !f -> t
// !t -> f

// if(!input){
//     console.log('input is empty')
// }

// looping statements

// let input = 'b'

// if(input == 'a'|| input == 'e' || input == 'i' || input == "e" || input == "o" || input == 'u'){
//     console.log(`entred ${input} input is a vowel !`)
// }else{
//     console.log(`entred ${input} input is not a vowel !`)
// }

// 1. while. 2. do while, 3. for, 4. for each, 5. for of, 6. for in 

// while loop

// while(condition){
// statements
// updations
// }

// let count = 1

// while (count <= 1000) {
//     console.log(count)
//     count++
// }

// let stop = false

// let year = 2024
// while (!stop) {
//     ++year
//     year % 400 == 0 || (year % 100 != 0 && year % 4 == 0) ? stop = true : stop = false
// }

// console.log(`next leap year is ${year} year !`)

// while(condition){
// statements
// updation
// }

// let day = 300 

// while(day != 0) {
//     console.log(`working day ${day}!`)
//     day--
// }


// 2 * 2 = 4
// 2 * 3 = 6

// let number = 9

// let count = 0

// while(count <= 12){
//     console.log(`${number} * ${count} = ${number * count}`)
//     count++
// }

// factorials
// 5! = 120 = 5 * 4 * 3 * 2 * 1 = 120

// let number = 9

// let org_number = number

// let fact = 1

// while (number != 0) {
//     fact = fact * number
//     number--
// }

// console.log(`factorial of ${org_number} is ${fact} !`)

// fact = 1 * 5 = 5
// fact = 5 * 4 = 20
// fact = 20 * 3 = 60
// fact = 60 * 2 = 120
// fact = 120 * 1 = 120


// reverse a number

// let number = 892 // 4321

// let org_number = number

// // rev = rev * 10 + d

// let rev = 0

// let d = 0

// // rev = 0 * 10 + 4 = 4
// // num 1234 / 10 = 123.4
// // number -> INT 123
// // rev = 4 * 10 + 3 = 43
// // rev = 43 * 10 + 2 = 432
// // rev = 432 * 10 + 1 = 4321

// while (number != 0) {
//     d = number % 10
//     rev = rev * 10 + d
//     number = parseInt(number / 10)
// }


// console.log(`the reverse of ${org_number} is ${rev} !`)

// armstrong number

// 121 = 1*1*1 + 2*2*2 + 1*1*1 = 1 + 8 + 1 = 10
// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153

// let number = 123
// let org_number = number
// let d = 0

// let sum = 0

// while (number != 0) {
//     d = number % 10
//     sum = sum + (d * d * d)
//     number = parseInt(number / 10)
// }

// if (org_number == sum) {
//     console.log(`number ${org_number} is an armstrong number !`)
// }else{
//     console.log(`number ${org_number} is not an armstrong number !`)
// }

// nasted loop

// while(condition a){
//     while(condition b){
//         // statements 
//         // updations
//     }
// }


// let number = 154
// let org_number = number
// let d = 0
// let count = number
// let stop = false
// let sum = 0

// while (!stop) {
//     number = count
//     sum = 0
//     while (number != 0) {
//         d = number % 10
//         sum = sum + (d * d * d)
//         number = parseInt(number / 10)
//     }
//     if (count == sum) {
//         if (count == org_number) {
//             console.log(`number ${count} is an armstrong number !`)
//         } else {
//             console.log(`number ${org_number} is not an armstrong number !`)
//             console.log(`Next armstrong number is ${count} !`)
//         }
//         stop = true
//     }
//     count++
// }

// do_while

// do{
//     // statements
//     // updation
// }while(condition);

// let value = 10;

// do{
//     console.log(value)
//     value++
// }while(value < 10)

// do you wish to continue

// let choice = false

// do {
//     let number = Number(window.prompt("Enter a number !"))
//     let org_number = number
//     let d = 0
//     let count = number
//     let stop = false
//     let sum = 0

//     while (!stop) {
//         number = count
//         sum = 0
//         while (number != 0) {
//             d = number % 10
//             sum = sum + (d * d * d)
//             number = parseInt(number / 10)
//         }
//         if (count == sum) {
//             if (count == org_number) {
//                 console.log(`number ${count} is an armstrong number !`)
//             } else {
//                 console.log(`number ${org_number} is not an armstrong number !`)
//                 console.log(`Next armstrong number is ${count} !`)
//             }
//             stop = true
//         }
//         count++
//     }
//     choice = window.confirm("do you wish to continue !")
// } while (choice)

// console.log("program completed !")

// for(initial; condition; updation){
// statements
// }

// for(let i = 0 ; i <= 100 ; i++){
//     if(i % 3 == 0) {
//         console.log(i)
//     }
// }

// STRING Manipulation

let str1 = "Hello"

// // properties & methods

// // string.length [property]

// console.log(name.length)

// console.log("hello " +name)

// let newString = "hello"  + name

// console.log(newString)

// console.log(name.length)

// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
// console.log(name[5])

// console.log(str1)
// console.log(str1.toUpperCase())
// console.log(str1.toLowerCase())
// console.log(str1)

// let input = " amey khondekar "
// console.log(input) // 6
// input = input.trim() // removes leading and trailing spaces from string
// console.log(input) // 4

// charAt(index) //returns char
// indexOf("char") //returns index first occurence

let str2 = "hello world !"

// console.log(str2.charAt(0))
// console.log(str2.charAt(1))
// console.log(str2.charAt(2))
// console.log(str2.charAt(3))
// console.log(str2.charAt(4))
// console.log(str2.charAt(5))
// console.log(str2.charAt(6))

// console.log(str2.indexOf("hello"))
// console.log(str2.lastIndexOf("hello"))

// h - H

// str2 = str2.replaceAll("e","E")

// console.log(str2)

// String()
// toString()

// str2.

// slice(start index, end index)

// 0 - 10

// let x = str2.slice(0, 5)

// let y = str2.slice(5, str2.length - 1)

// console.log(x)
// console.log(y)
// console.log(str2)

// console.log(str2.substring(0,5))

// console.log(str2)

// str2.match()

// let str3 = "hello i"

// console.log(str3.match("hi"))
// // if exists then returns index else null

// console.log(str3.includes("hi"))

// // if exists then returns true else false

// // regex is a pattern

// // test

// let name = "amey khondekar"

// console.log(name.split(""))
// // returns an array of elements

// object

// let student = {

// }

// {
//     key: value,
//     key1: value1,
//     key2: value2
// }

// let student_name = "amey"
// let student_phone = "9766696550"
// let student_address = "nagpur"

// let student = {
//     name: "amey khondekar",
//     phone: 9766696550,
//     address: "nagpur",
//     regular: true,
//     subject: ["eng", "sci", "math", "sports"]
// }

// let student2 = {
//     name: "Rahuk Kumar",
//     phone: 8237895726,
//     address: "nagpur",
//     regular: true,
//     subject: ["eng", "sci", "math", "sports"],
// }


// // console.log(student.name)
// // console.log(student.phone)
// // console.log(student.address)
// // console.log(student.regular)
// // console.log(student.subject)

// // console.log(student2.name)
// // console.log(student2.phone)
// // console.log(student2.address)
// // console.log(student2.regular)
// // console.log(student2.subject)

// // for in

// for (let key in student) {
//     // console.log(key)
//     // console.log(student[key])

//     console.log(`${key} is key and value is ${student[key]}`)

// }ledger_entries

// Array

// collection of elements

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //55
// // 0  1  2  3  4  5  6  7  8  9

// let anything = [100, "hello", NaN, undefined, true, false, { key: "somthing" }]

// console.log(numbers.length)
// console.log(anything.length)

// console.log(numbers[1])
// console.log(anything[1])

// anything[0] = "something"

// console.log(anything[0])

// let sum = 0

// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i])
//     sum += numbers[i]
// }

// console.log(sum)

// let student = {
//     name: "amey khondekar",
//     roll: 1,
//     marks: [50, 50, 50, 35, 47],
//     grade: null
// }

// let obtainedMarks = 0

// for (let i = 0; i < student.marks.length; i++) {
//     obtainedMarks += student.marks[i]
// }

// let totalMarks = 250 // 2.5

// let factor = totalMarks / 100

// let percentages = obtainedMarks / factor

// student.percentages = percentages

// if (percentages < 50) {
//     student.grade = "C"
// } else if (percentages > 50 && percentages < 80) {
//     student.grade = "B"
// } else if (percentages > 80) {
//     student.grade = "A"
// } else {
//     student.grade = "Z"
// }

// console.log(student)

// functions

// ES6

// function keyword

// function doSomething() {
//     // function body
// }

// function doSomething() {
//     console.log("doing something ! 1")
//     console.log("doing something ! 2")
//     console.log("doing something ! 3")
//     console.log("doing something ! 4")
// }

// arrow function

// const doSomething = () => {
//     console.log("this is arrow function !")
// }

// to call a function

// doSomething()
// doSomething()
// doSomething()
// doSomething()
// doSomething()
// doSomething()
// doSomething()
// doSomething()
// doSomething()
// doSomething()

// types of function/method

// 1.No Args(input) and No Return
// const doSomething = () => {
//     console.log("this is arrow function !")
// }
// 2. Args(input) but No Return
// const add = (num1, num2) => {
//     console.log(num1 + num2)
// }

// const greet = (name) => {
//     console.log(`hello ! ${name} how are you.`)
// }

// add(100, 120)
// greet("amey")
// greet("sahil")
// greet("ravi")
// greet("rahul")
// // 3. Args(input) and return
// // return statement means function completed

// const add = (num1,num2) => {
//     let sum = num1 + num2
//     return sum
//     console.log("hello")
// }

// console.log(add(10,20))

// let c = add(10,90)

// console.log("value of c is ", c)

// console.log(`addition result is ${add(80,15)}`)
// 4. No args but return 
// const doSomething = () => {
//     return "hello"
// }
// console.log(doSomething())

// arrow function are hoisted

// doSomething()

// doSomething2()

// const doSomething = () => {
//     console.log("hello doing something !")
// }

// function doSomething2(){
//     console.log("hello doing something ! 2")
// }

// doSomething2()

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function squareNumber(number) {
//     return number * number
// }

// // console.log(squareNumber(8))

// for (let i = 0; i < numbers.length; i++) {
//     console.log(squareNumber(numbers[i]))
// }

// add / remove an element from array

// leading/trailing

// numbers.push(11) // to add an element from trailing side
// numbers.push(12)
// numbers.push(13)
// numbers.push("hello")

// numbers.unshift(14) // to add an element from leading side
// numbers.unshift(15)
// numbers.unshift(16)
// numbers.unshift("amey")

// console.log(numbers)

// numbers.pop() // to remove an element from trailing side
// numbers.pop()
// numbers.pop()
// numbers.pop()

// numbers.shift() // to remove an element from leading side
// numbers.shift()
// numbers.shift()
// numbers.shift()

// console.log(numbers)

// numbers.splice(index, deletcount, replacement(optional))

// numbers.splice(5, 2, 90)

// console.log(numbers)

// slice(startIndex, endIndex)

// let new_numbers = numbers.slice(0,5)

// console.log(new_numbers)

// numbers.

let numbers = [2, 4, 6, 8, 10]

// forEach, map, filter, sort, every, some

// numbers.forEach((number,index)=>{
//     console.log(number*number)
//     console.log(index)
// }) // cannot return anything

let result = numbers.every((number) => {
    return number % 2 == 0
})
// returns boolean

console.log(result)