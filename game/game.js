let player_name = localStorage["name"];
let player_roll = localStorage["roll"];
let score = 10;
let message = document.getElementById("message_text");

const bat = document.querySelector("#bat");

document.getElementById("current_score").innerHTML = ` ${score}`;
document.getElementById("name").innerHTML = `${player_name}`;
document.getElementById("roll").innerHTML = `${player_roll}`;

function detectCollision(ball, bat) {
  let ball_position = ball.getBoundingClientRect();
  let bat_position = bat.getBoundingClientRect();

    return (
      ball_position.bottom >= bat_position.top &&
      ball_position.top <= bat_position.bottom &&
      ball_position.right >= bat_position.left &&
      ball_position.left <= bat_position.right
    );
  
}
function throwBall() {

    



    let ball_position = ball.getBoundingClientRect();
    let bat_position = bat.getBoundingClientRect();

    let ball_x = ball_position.x;
    let ball_y = ball_position.y;
    let bat_x = bat_position.x;
    let bat_y = bat_position.y;
    let bat_width = bat_position.width;
    let bat_height = bat_position.height;

    ball.style.transform = `translate(${bat_x - ball_x}px, ${(bat_y - ball_y)+150}px)`;
    ball.style.transition = "transform 0.5s ease-in-out";
    ball.style.zIndex = "1";

    
    //console.log("bat clicked: ", bat_clicked);
    
    // if (detectCollision(ball, bat) ) {
    //     score += 8;
    //     document.getElementById("current_score").innerHTML = ` ${score}`;
    //     //document.getElementById("start_button").classList.add("hide_button");
    //     //console.log("collision detected");
    // }
    // else{
    //     // score -= 2;
    //     // document.getElementById("current_score").innerHTML = ` ${score}`;
    //     // //document.getElementById("start_button").classList.add("hide_button");
    //     //console.log("collision not detected");
    // }
        
}


document.getElementById("instructions").addEventListener("click", function () {
    
    document.querySelector(".info_box").classList.add("activeInfo");
});

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".info_box").classList.remove("activeInfo");
});

document.getElementById("start_button").addEventListener("click", function () {
    startGame();
});

// select the radio button value

function getSpeedValue() {
    let radioValue = document.querySelector('input[name="speed"]:checked').value;
    return radioValue;
}

function getPositionValue() {
    let radioValue = document.querySelector('input[name="position"]:checked').value;
    return radioValue;
}



function startGame() {
    let selected_speed = getSpeedValue();
    let speed = 1000;
    if(selected_speed == "slow"){
        speed = 1000;
    }
    else if(selected_speed == "fast"){
        speed = 700;
    }
    let iteration = 0;
    let interval = setInterval(function () {
        if(iteration < 12){
            // disable the start button
            document.getElementById("start_button").disabled = true;
            document.getElementById("start_button").classList.add("disable_button");
            //console.log("iteration: ", iteration);
            
            throwBall();
            iteration++;
            
        }
        else{
            clearInterval(interval);
            // enable the start button
            document.getElementById("start_button").disabled = false;
            document.getElementById("start_button").classList.remove("disable_button");
            if(score == 58){
                alert("Congrats! You won the game");
            }
            else{
                alert("Alas! You were unable to play all the balls");
            }
            score = 10;
            document.getElementById("current_score").innerHTML = ` ${score}`;
        }
    }, speed);
}




let selected_position = getPositionValue();

const ball = document.querySelector(`#ball${selected_position}`);

let bat_clicked = false;
document.addEventListener("keydown", function(event){
    if(event.key === "Enter" && detectCollision(ball, bat)){
        console.log("enter key pressed");
        bat_clicked = true;
    
        score += 8;
        document.getElementById("current_score").innerHTML = ` ${score}`;
    }
});








