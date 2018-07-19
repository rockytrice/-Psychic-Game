// the array for the secret letters
var secretLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

// creating variables to hold the number of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessLeft = 9;
// randomly selects letter from array
var physicLetter = secretLetter[Math.floor(Math.random() * secretLetter.length)];

// when user presses key, code will run
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userGuess === physicLetter) {
        wins++;
    } else {
        guessLeft--;
    }
    if (userGuess === 0) {
        losses++;
    }
    var html =
        "<h1>The Pyschic Game:" + "</h2>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p> Your Guesses so far " + userGuess + "</p>"

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

};












