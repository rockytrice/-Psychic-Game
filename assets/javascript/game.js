var computerChoices = ["a", "b", "c", "d", "e", "f", "g"];

var wins = 0;
var losses = 0;
varguessLeft = 9;
// var guessTyped = userGuess;

// fuction starts when user presses any key
document.onkeyup = function (event) {

    // determines key pressed
    var userGuess = event.key;

    var randomGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (i = 0; i <= 6; i++) {
        console.log(i);
        // if (userGuess===randomGuess){
        //     wins++;
        
    }





}

