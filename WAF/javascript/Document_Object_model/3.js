// // Accessing the h2 tag
// let danial = document.querySelector("h2");
// // danial.append(" DDos attack");
// console.dir(danial.innerHTML)
// danial.innerText = danial.innerText + " DDos server";

// Accessing the elements
let divs= document.querySelectorAll(".box");

// console.dir(divs[1]);

// divs[0].innerText = "metasploit";
// divs[1].innerText = "nmap for network scanning port";
// divs[2].innerText = "John_the_ripper";

let idx = 1;
for(div of divs) {
    // console.log(div.innerText);
    div.innerText = `new index with number ${idx}`;
    idx++; // Incrementing the counter value....
}
