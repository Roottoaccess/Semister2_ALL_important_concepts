// This is the script for exploring the looping concept and the string concept in javascript

// console.log("Man in Middle attack");

for(let i = 0; i < 10; i++){
    console.log("Man in the Middle in the DDOS attack");
} // This is the for loop in the JavaScript....
console.log("Loop has terminated....")
// calculating the sum of 1 to 5
let sum = 0;
for(let i = 0; i <= 5; i++){
    sum += i;
}
console.log("the sum of the first 5 digit is: ",sum);

// while loop in JavaScript
let i = 1;
while(i <= 5){ // condition check at the front
    console.log(i);
    i++;
}

let r = 20;
do{
    console.log("Cipher Text");
    r++;
}while(r <= 10);

// There is one another character - for-of loop
let str = "xeonza";

for(let i of str){
    console.log("i=",i);
}

let student = {
    name: "Daniel Decan",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for(let key in student){
    console.log("key = ",key," value ",student[key]);
}

// Printing all the even number from 0 - 100
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log("x : ",i);
    }
}
// creating the game using JavaScript Scripting
let game_num = 25;

let x1 = prompt("Guess the game number: ");

while(x1 !== game_num){
    x1 = prompt("Wrong number, Guess the game number again: ");
}

console.log("Congo, you guess the correct number....");