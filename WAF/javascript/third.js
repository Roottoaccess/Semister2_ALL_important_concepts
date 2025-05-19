// WAP in JavaScript to display weekdays by using Arrays....
let arr = ['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];

let len = arr.length
for(i = 0; i < len;i++){
    document.write("<p>Day ");
    document.write(i + 1);
    document.write(arr[i]+ "<br>");
    document.write("</p>")
}