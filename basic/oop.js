// classes and objects
class student {
    name;
    roll_no;
    section;
    phone;
    email;
    age;
    setInfo(name, roll, phone, email, section,age) {
        this.name = name
        this.roll = roll
        this.phone = phone
        this.email = email
        this.section = section
        this.age = age
    }
    displayInfo() {
        console.log("student's name is " + this.name)
        console.log("student's roll_no is " + this.roll_no)
        console.log("student's section is " + this.section)
        console.log("student's phone is " + this.phone)
        console.log("student's email is " + this.email)
        console.log("student's age is " + this.age)
    }
}

let st1 = new student()
let st2 = new student()
let st3 = new student()
let st4 = new student()

st1.setInfo("amey khondekar", 1, 9766696550, "ameykhondekar01@gmail.com", "A",22)
st2.setInfo("sahil kumar", 2, 8857032120, "sahilkumar01@gmail.com", "B",23)

// console.log(st1.name)
st1.displayInfo()
console.log("------------------------")
st2.displayInfo()