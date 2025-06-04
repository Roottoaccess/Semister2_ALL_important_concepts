// // Accessing the div....
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);
// // Accessing the paragraph....
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// // Changing the value of the existing class
// console.log(para.setAttribute("class","Zero"));


// style using DOM

let div = document.querySelector("div");
console.log(div);

div.style.backgroundColor = 'yellow';
// Script to hide the element from the webpage directly
// div.style.visibility = "hidden";
/* Creating the button using JavaScript */
let newBtn = document.createElement("button");
newBtn.innerText = 'click me!';
console.log(newBtn);
div.append(newBtn);
// div.prepend(newBtn)
// div.after(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> BotNet Creating Server </i>";

// selecting the body
document.querySelector("body").prepend(newHeading);

// Similarly we can remove the tag....
// let para = document.querySelector("p");
// para.remove();

// Question 1
let hack_btn = document.createElement("button");
hack_btn.innerText = "click me";
hack_btn.style.backgroundColor = "red";
hack_btn.style.color = "white";
let sele = document.querySelector("body");
sele.prepend(hack_btn);

// Question 2
let para = document.querySelector(".info")
// console.log(para);
console.log(para.getAttribute("class"))
// para.setAttribute('class','newClass');
// Another and most efficient method for this is:
para.classList.add("newClass");