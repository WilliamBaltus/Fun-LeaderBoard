//----------------------------------Initialization-----------------------------
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let newGameButton = document.getElementsByClassName("newGameButton")
let counter = document.getElementById("counter");

//-----------------------------------Home Score Functions------------------

function newGame(){
    console.log("New Game! Countdown begin!")
    countdown()
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeScore.style.backgroundColor = "black"
    guestScore.style.backgroundColor = "black"
}
function homeAdd1() {
    homeScore.textContent = parseInt(homeScore.textContent) + 1
    checkValues()
}

function homeAdd2() {
    homeScore.textContent = parseInt(homeScore.textContent) + 2
    checkValues()
}

function homeAdd3() {
    homeScore.textContent = parseInt(homeScore.textContent) + 3
    checkValues()
}

//-----------------------------------Guest Score Functions------------------------

function guestAdd1() {
    guestScore.textContent = parseInt(guestScore.textContent) + 1
    checkValues()
}

function guestAdd2() {
    guestScore.textContent = parseInt(guestScore.textContent) + 2
    checkValues()
}

function guestAdd3() {
    guestScore.textContent = parseInt(guestScore.textContent) + 3
    checkValues()
}

function countdown() {
    var seconds = 60;
    function tick() {
        seconds--;
        counter.textContent = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            checkValues()
            newGame()
            alert("Game over");
        }
    }
    tick();
}

countdown();

//check Values after each button click
// if home is greater, set border to yellow and other to black
// if equal, set both to black
// if guest is greater, set border to yellow and other to black
function checkValues(){
    let home = parseInt(homeScore.textContent)
    let guest = parseInt(guestScore.textContent)
    
    if(home > guest) {
        console.log("Home is winning...")
        homeScore.style.backgroundColor = "yellow"
        guestScore.style.backgroundColor = "black"
    }
    else if (home == guest) {
        console.log("Tie game")
        homeScore.style.backgroundColor = "black"
        guestScore.style.backgroundColor = "black"
    }
    else{
        console.log("Guest is winning...")
        guestScore.style.backgroundColor = "yellow"
        homeScore.style.backgroundColor = "black"
    }
}
