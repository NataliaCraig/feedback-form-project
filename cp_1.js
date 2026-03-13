let form = document.getElementById("feedbackForm");
let charCount = document.getElementById("charCount");
let display = document.getElementById("feedback-display");
let error = document.getElementById("errorMessage");

//combined input listener
form.addEventListener("input", function(event){
    if(event.target.id === "comments"){
        let text = event.target.value;
        
//cap at 200
        if(text.length > 200){
            event.target.value = text.substring(0, 200);
        }
        
        let length = event.target.value.length;
        charCount.textContent = length + " / 200 characters";
    }
});

//form validation and feedback entry
form.addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("comments").value;

    //validation
    if(name === "" || email === "" || message === ""){
        error.textContent = "All fields required."; 
        return;
    }

    error.textContent = "";

    // textcontext entry
    let entry = document.createElement("div");
    entry.style.marginBottom = "15px";

    let nameElement = document.createElement("strong");
    nameElement.textContent = name;

    let emailElement = document.createElement("p");
    emailElement.textContent = email;

    let commentElement = document.createElement("p");
    commentElement.textContent = message;

    entry.appendChild(nameElement);
    entry.appendChild(emailElement);
    entry.appendChild(commentElement);
    display.appendChild(entry);

    //reset form
    form.reset();
    charCount.textContent = "0 / 200 characters";
});

// delegation tooltips
form.addEventListener("mouseover", function(event){
    if(event.target.id === "name") document.getElementById("nameTip").style.display = "inline";
    if(event.target.id === "email") document.getElementById("emailTip").style.display = "inline";
    if(event.target.id === "comments") document.getElementById("commentTip").style.display = "inline";
});

form.addEventListener("mouseout", function(event){
    if(event.target.id === "name") document.getElementById("nameTip").style.display = "none";
    if(event.target.id === "email") document.getElementById("emailTip").style.display = "none";
    if(event.target.id === "comments") document.getElementById("commentTip").style.display = "none";
});

// event bubbling 
document.body.addEventListener("click", function(){
    console.log("Background clicked");
});

form.addEventListener("click", function(event){
    event.stopPropagation();
});