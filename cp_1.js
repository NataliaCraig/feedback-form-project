let form = document.getElementById("feedbackForm");
let charCount = document.getElementById("charCount");

form.addEventListener("input", function(event){

if(event.target.id === "comments"){

let length = event.target.value.length;

charCount.textContent = length + " characters";

}

});
