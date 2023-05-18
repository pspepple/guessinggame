//Defined Variables
var input = document.querySelector('#input');
var output = document.querySelector('#output');
var check = document.querySelector('#check');
var triesLeft = 10;
var triesUsed = 0;
var status = `you have ${triesLeft} tries left`
var myNumber = Math.floor(Math.random() * 100);
var retry = document.querySelector('#retry');

//Defined eventListeners
check.addEventListener("click", clickHandler);
window.addEventListener("keydown", keydownHandler);

//Defined Functions
function clickHandler() {
    guessNumber = parseInt(input.value);
    verifyInput(guessNumber);
}
function keydownHandler(event) {
    if (event.keyCode == 13) {
        guessNumber = parseInt(input.value);
        verifyInput(guessNumber);
    }
}
function verifyInput(guessNumber) {
    if (!isNaN(guessNumber)) {
        playGame();
    } else {
        output.innerHTML = "Please input a number.";
    }
}
function playGame() {
    triesLeft -= 1;
    triesUsed += 1;
    var status = `${triesLeft} tries left`;
    if (guessNumber == myNumber) {
        endgame();
    }
    if (guessNumber < myNumber) {
        output.innerHTML = "Nope not "+ guessNumber +", it's too small - You have " + status;
        input.value = "";
        if (triesLeft < 1) {
            endgame();
        }
    } else if (guessNumber > myNumber) {
        output.innerHTML = "Nope not "+ guessNumber +", it's too big - You have " + status;
        input.value = "";
        if (triesLeft < 1) {
            endgame();
        }
    }
}
function endgame() {
    if (triesLeft < 1) {
        output.innerHTML = "Sorry, you've ran out of tries. The answer is " + myNumber;
    } else {
        output.innerHTML = `Nice, ${guessNumber} is correct. You did it in just ${triesUsed} moves`;
    }
    input.disabled = true;
    check.disabled = true;
    retry.style.display = "inline";
}