document.querySelector("#start").addEventListener("click", () => {
    if (validateForm()){
        let user_name = document.getElementById("name").value;
        let roll_num = document.getElementById("roll").value;
        console.log(user_name);
        localStorage["name"] = user_name;
        localStorage["roll"] = roll_num;
        clearForm();
        window.location.href = "../game/game.html";
    }

});

function validateForm(){
    let entered_name = document.forms["myForm"]["name"].value;
    let entered_roll = document.forms["myForm"]["roll"].value;
    if (!entered_name.replace(/\s/g, '').length || !entered_roll.replace(/\s/g, '').length) {
        document.getElementById("name").classList.add("invalid-input");
        document.getElementById("roll").classList.add("invalid-input");
        alert("Please enter valid name and roll number");
        return false;
    }
    if(entered_name === "" || entered_roll === ""){
        document.getElementById("name").classList.add("invalid-input");
        document.getElementById("roll").classList.add("invalid-input");
        alert("fields must be filled");
        return false;
    }

    return true;
}

function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}



