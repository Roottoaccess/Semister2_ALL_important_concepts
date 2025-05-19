// WAP in JavaScript to display weekdays by using Arrays....
// let arr = ['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];

// let len = arr.length
// for(i = 0; i < len;i++){
//     document.write("<p>Day ");
//     document.write(i + 1);
//     document.write(arr[i]+ "<br>");
//     document.write("</p>")
// }

function myFunction1(){
    let fruits=['Apple','Mango','Orange','Banana'];
    document.getElementById("demo").innerHTML=fruits.length;
}
function myFunction2(){
    let fruits1 = ['Apple','Kiwi','Orange'];
    let fruits2 = ['Mango','Lemon','Banana'];
    let fruits3 = fruits1.concat(fruits2);
    document.getElementById("demo1").innerHTML = fruits3;
}
function myFunction3(){
    let fruits = ['Mango','Kiwi','Banana','Apple'];
    document.getElementById("demo2").innerHTML = fruits.sort();
}
// Object have the same methods , but the methods are.....
// This is the Object
const fighter = {};
fighter.firstName='Rani';
fighter.lastName='Chennama';
fighter.age = 50;
fighter.state = 'Karnataka';

// Displaying the adta from the object and its properties
document.getElementById('demi').innerHTML = fighter.firstName +" "+ fighter.lastName+" was a freedom fighter from"+" "+fighter.state+" "+"of India";

// const car = {
//     type: 'fiat',
//     model: '500',
//     color: 'white'
// };

// Accessing the second object......
// console.log(car.type)
// console.log(car.model)
// console.log(car.color)

// Object.assign(target,source), Object.create(object),Object.entries(object),Objects.values(object),Object.Keys(object), Object.groupBy(object).....

const person1 = {
    firstName : "Abraham",
    lastName : "Lincoln",
    age: 56,
    eyeColor: "Grey"
};

// Create Source Object
const person2 = {firstName: 'John',lastName: 'Smith'};
// Assign Source to Target
Object.assign(person1,person2);

// Display Target
let text = Object.entries(person1);
document.getElementById('ff').innerHTML = text;