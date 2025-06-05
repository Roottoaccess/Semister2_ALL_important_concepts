// Scripting using JavaScript
let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("clicked !!");
//     alert("click the normal button !");
// }

let box = document.querySelector("div");
// box.onmouseover = () => {
//     console.log("you are inside the div box");
// }

// let bbnn = document.createElement('button');
// bbnn.innerText = "server connection";
// document.querySelector("body").append(bbnn);
// bbnn.style.backgroundColor = 'yellow';
// bbnn.style.color = "red";

// let bn = document.querySelector("bbnn");
// bn.onclick = () => {
//     console.log("server button clicked");
//     alert("server started");
// }

// doing the same work with the help of Event Listener
btn1.addEventListener("click", () => {
    console.log('button was clicked');
})