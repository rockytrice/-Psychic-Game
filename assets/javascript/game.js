var computerChoices = ["a", "b", "c"];

var wins = 0;
var losses = 0;
varguessLeft = 9;
// var guessTyped = userGuess;

// fuction starts when user presses any key
document.onkeyup = function (event) {

    // determines key pressed
    var userGuess = event.key;

    var randomGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c")) {
        if (userGuess === randomGuess) {
            wins++;
        } else {
            losses++;
        }
        var html =
            "<p>Guess what letter i'm thinking of: " + userGuess + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>"



        document.querySelector("#game").innerHTML = html;

    }


}



