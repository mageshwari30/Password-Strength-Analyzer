function checkPassword() {

    let password = document.getElementById("password").value;

    let score = 0;

    let suggestions = [];

    if(password.length >= 8){
        score++;
    }else{
        suggestions.push("Use at least 8 characters.");
    }

    if(/[A-Z]/.test(password)){
        score++;
    }else{
        suggestions.push("Add an uppercase letter.");
    }

    if(/[a-z]/.test(password)){
        score++;
    }else{
        suggestions.push("Add a lowercase letter.");
    }

    if(/[0-9]/.test(password)){
        score++;
    }else{
        suggestions.push("Add a number.");
    }

    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        score++;
    }else{
        suggestions.push("Add a special character.");
    }

    let result = document.getElementById("result");
    let fill = document.getElementById("strength-fill");

    if(score <= 2){
        result.innerHTML = "Weak Password";
        fill.style.width = "33%";
        fill.style.background = "red";
    }
    else if(score == 3 || score == 4){
        result.innerHTML = "Medium Password";
        fill.style.width = "66%";
        fill.style.background = "orange";
    }
    else{
        result.innerHTML = "Strong Password";
        fill.style.width = "100%";
        fill.style.background = "green";
    }

    let list = document.getElementById("suggestions");

    list.innerHTML = "";

    suggestions.forEach(function(item){

        let li = document.createElement("li");

        li.textContent = item;

        list.appendChild(li);

    });

}