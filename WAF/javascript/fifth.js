var myElement = document.getElementById("intro");
document.getElementById("demo").innerHTML = "The intro paragraph id is "+myElement.innerHTML;

const collection = document.getElementsByName("animal");
for(let i = 0; i < collection.length; i++){
    if(collection[i].type == 'checkbox')
    {
        collection[i].checked = true;
    }
}
document.getElementById("demo").innerHTML = "The full url of the page is <br>" +window.location.href;

// to display the host name
document.getElementById("demo1").innerHTML = "The hostname is <br>"+window.location.hostname;

// prototype name
document.getElementById("demo2").innerHTML = "The protocol is <br>"+window.location.protocol;

// to display the path of the page
document.getElementById("demo3").innerHTML = "The path is <br>"+window.location.pathname;

function goBack(){
    window.history.back();
}

function myFunction(){
    alert("Hello");
}