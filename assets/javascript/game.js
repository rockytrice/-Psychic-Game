// the array for the secret letters
var secretLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",];

// creating variables to hold the number of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessLeft = 9;
var lettersGuessed = [""]

// function to reset game
var reset = function () {
    guessLeft = 9;
    var physicLetter = secretLetter[Math.floor(Math.random() * secretLetter.length)];
    // logs the physic's letter to the console
    console.log("physicLetter" + physicLetter);

}


// randomly selects letter from array
var physicLetter = secretLetter[Math.floor(Math.random() * secretLetter.length)];

// when user presses key, code will run
document.onkeyup = function (event) {
    // show's the user's guess
    var userGuess = event.key;
    // pushes the letters that the user has already guest into an array and shows it on the page
    lettersGuessed.push(userGuess);
    // if the user guesses the correct letter add a W and rest the wins, losses, and letters guessed
    if (userGuess === physicLetter) {
        wins++;
        lettersGuessed =[];
        reset();
        // if the user guesses the wrong letter subtract the number of guesses left
    } else {
        guessLeft--;
        // if the number of user guesses equals 0 add 1 to losses and reset the the wins,losses, and letters guessed
    } if (guessLeft === 0) {
        losses++;
        lettersGuessed =[];
        reset();
    }
        



    var html =
        // "<h1>The Pyschic Game:" + "</h1>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p> Your Guesses so far: " + lettersGuessed + "</p>"

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;



};











function newFunction() {
    guessLeft.reset();
}

