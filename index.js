const form = document.getElementById("contactForm");

const errMessage = document.getElementById("errorMessage");

form.addEventListener("submit" , function(event) {
    event.preventDefault();
a
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(!name || !email || !message){
        errMessage.textContent = "Please Fill Out All These Empty Fields";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        errMessage.textContent = "Please enter a valid email address";
        return;
    }

    errMessage.textContent = ""; 
    
    alert("Thank You!" + name + "!Your message has been sent");

    form.reset();
})