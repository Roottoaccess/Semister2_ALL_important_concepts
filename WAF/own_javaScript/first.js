// This is the first javascript file


console.log("Coffee and JavaScript for WebDevelopment")

console.log("This is the second statement from Daniel....")


// variable value -> Tony Stark
let name = "Tony Stark"
console.log(name)

let age = 24
console.log(age)

let price = 1002
console.log("price: "+price)


let x = null; // known but no value
console.log(x)

let y = undefined; // Not know what is there
console.log(y)

// true / false in boolean
// var is outdated..... so use let or const
var isfollow = true
console.log(isfollow)

// Defining variables in the block.....
{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}
let p = 44.48;
console.log(typeof(p))

// objects -> collection of values
// Key : Value (pair)
const student = {
    full_name : 'Daanial',
    age: 20,
    cgpa: 8.2,
    isPass: true
};

console.log(student, typeof(student));
// Accessing the values from the object values
console.log(student['full_name'])
console.log(student.cgpa)


student.age = student.age + 2

console.log('Student age: '+student.age)

const product = {
    
}