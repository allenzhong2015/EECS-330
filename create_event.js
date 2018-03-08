
// Get the modal
var form = document.getElementById('myform');

// Get the button that opens the modal
var btn = document.getElementById("create_event_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("form_close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    form.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    form.style.display = "none";
}

// Get the modal
var form2 = document.getElementById('myform2');

// Get the button that opens the modal
var btn2 = document.getElementById("edit_event_button");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("form_close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    form2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    form2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == form2) {
        form2.style.display = "none";
    }
    if (event.target == form) {
        form.style.display = "none";
    }
}

function smallAlert(){
    alert("Japanese 111 begins in 10 mins. Expected time to reach is 4 mins. Leave within the next 6 mins to earn 3 Puncuality Points.");
}

function importantAlert(){
    alert("EECS 330 discussion begins in 15 mins. Expected time to reach is 7 mins. Leave within the next 8 mins to earn 5 Puncuality Points.");
}

