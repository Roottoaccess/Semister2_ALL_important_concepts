// Scripting using JavaScript
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("clicked !!");
    alert("click the normal button !");
}

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("you are inside the div box");
}