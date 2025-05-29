// This is the scripting text for the other webpage
// Event handler function to toggle the visibility

function flipImage(){
    dom = document.getElementById('nature').style;

    if (dom.visibility == "visible"){
        dom.visibility = "hidden";
    }    
    else{
        dom.visibility = "visible";
    }
}
