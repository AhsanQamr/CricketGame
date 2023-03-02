let player_name = localStorage["name"];
let player_roll = localStorage["roll"];
let score = 10;
let message = document.getElementById("message_text");



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
    let ball = document.querySelector("#ball1");
    let bat = document.querySelector("#bat");
    
    let ball_position = ball.getBoundingClientRect();
    let bat_position = bat.getBoundingClientRect();

    let ball_x = ball_position.x;
    let ball_y = ball_position.y;
    let bat_x = bat_position.x;
    let bat_y = bat_position.y;
    let bat_width = bat_position.width;
    let bat_height = bat_position.height;

    ball.style.transform = `translate(${bat_x - ball_x + bat_width-10}px, ${bat_y - ball_y + (bat_height / 2.5)}px)`;
    ball.style.transition = "transform 0.5s ease-in-out"; 

    // if (detectCollision(ball, bat)) {
    //     score += 1;
    //     document.getElementById("current_score").innerHTML = ` ${score}`;
    //     message.innerHTML = "You hit the ball";
    // }
        
}











