
//This is how we get our blank spaces to guess the letters for each word. 
function blanks(arr) {
    var blank = [];
    for (var i = 0; i < arr.length; i++) {

        blank.push("_ ");

    }

    return blank;
}



var wins = 0; //Our point counter
var guessCount; //Our guess counter. We start with 15
var incorrectGuess; //This will be an array that holds all the incorrect guesses
var nameIndex = 0; //the reference for our names listed in the object below


var letters = /^[a-zA-Z]*$/; //The regex to help make sure only letters are guessed.
var names = {
    0: "SEPHIROTH",
    1: "KEFKA",
    2: "CLOUD",
    3: "TIDUS",
    4: "SEYMOUR",
    5: "CHOCOBO",
    6: "MATERIA",
    7: "FIRA",
    8: "CRYSTAL"

}// Our word list. 

//variables to help place all of our Javascript content when needed
var instruction = document.getElementById("instructions");
var pickError = document.getElementById("pick-error");
var wordGuess = document.getElementById("word-guess");
var incLetters = document.getElementById("incorrect-letters")
var guessChances = document.getElementById("guess-chance");
var winsText = document.getElementById("win-count");
var gameOver = document.getElementById("game-over");

var word = names[nameIndex].split(""); //We split the word into an array to allow for easy comparison
var guess = blanks(word); //Creating our guess variable initialized with blanks

//This places the first image for the first word. It will get replaced later on
var img = document.createElement("img");
img.src = "assets/images/sephiroth.jpg";
img.alt = "Sephiroth";
var src = document.getElementById("pic");
src.appendChild(img);

//A small reset function to reset the guessCount and the incorrectGuess array
function reset() {
    guessCount = 15;
    incorrectGuess = [];
}

//Perform the reset for the first word
reset();

//Display the information
wordGuess.textContent = guess.join(" ");
guessChances.textContent = guessCount;
winsText.textContent = wins;


//Using key presses trigger events
document.onkeyup = function (event) {

    //We want to make all the guesses uppercase for easy comparisons
    var userGuess = event.key;
    var guessUpper = userGuess.toUpperCase();

    //We only want letters to be entered. Without this condition, keys like . or Enter will register as a guess.
    if (guessUpper.match(letters) && guessUpper.length === 1) {

        //If the someone picked a key that is a letter after getting the pick error message, the message should go away
        pickError.textContent = "";

        //We want to make it so if a guess was already made, making the same guess will not reduce the guess counter.
        if (guess.indexOf(guessUpper) === -1 && incorrectGuess.indexOf(" " + guessUpper) === -1) {
            //If the letter isn't in the word, put the guess into the incorrectGuess Array
            if (word.indexOf(guessUpper) === -1) {
                incorrectGuess.push(" " + guessUpper);
            }

            //Otherwise, put the guessed letter into the appropriate blanks.
            else {
                for (var j = 0; j < guess.length; j++) {
                    if (word[j] === guessUpper) {

                        guess[j] = guessUpper;
                    }
                }
            }

            //For every valid guess made, the count goes down by one
            guessCount--;
        }
    }
    else {
        //If anything other than a letter is picked, the user will get this mesage
        pickError.textContent = "Pick a letter only";
    }

    //Show all the updated data
    incLetters.textContent = incorrectGuess;
    guessChances.textContent = guessCount;
    wordGuess.textContent = guess.join(" ");


    //This is where we start looking at whether or not the word has been guessed or not. We only want to make these checks while
    //the game is still going on aka still using words in the names object.
    if (nameIndex < Object.keys(names).length) {
        //If the guess is the same as the names[nameIndex] we refer to, then you get a point
        if (guess.join("") === names[nameIndex]) {

            wins++;//here's your point
            nameIndex++; //we move on to the next word

            //This lengthy beauty helps us change the image for the word that's coming. Note I tried to function this out
            //and it wouldn't work properly. We want to replace the image, not add it to the previous image. appendChild works 
            //fine in this particular setup.
            if (nameIndex > 0) {
                if (nameIndex === 1) {
                    img.src = "assets/images/kefka.jpg";
                    img.alt = "Kefka";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 2) {
                    img.src = "assets/images/cloud.jpg";
                    img.alt = "Cloud";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 3) {
                    img.src = "assets/images/tidus.jpg";
                    img.alt = "Tidus";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 4) {
                    img.src = "assets/images/seymour.jpg";
                    img.alt = "Seymour";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 5) {
                    img.src = "assets/images/chocobo.jpg";
                    img.alt = "Chocobo";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 6) {
                    img.src = "assets/images/materia.jpg";
                    img.alt = "Materia";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 7) {
                    img.src = "assets/images/fira.jpg";
                    img.alt = "Fira";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 8) {
                    img.src = "assets/images/crystal.jpg";
                    img.alt = "Crystal";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }

            }

            //If we used up all the letters, the game is over. 
            if (nameIndex === Object.keys(names).length) {
                gameOver.textContent = "Game Over";

            }

            //Otherwise, reset for the next word
            else {
                reset();
                word = names[nameIndex].split("");
                guess = blanks(word);
            }
        }

        //Now if we didn't guess the word in time....
        else if (guessCount === 0 && guess.join("") !== names[nameIndex]) {

            //We do the same thing as before but we don't give the user a point
            nameIndex++;

            if (nameIndex > 0) {
                if (nameIndex === 1) {
                    img.src = "assets/images/kefka.jpg";
                    img.alt = "Kefka";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 2) {
                    img.src = "assets/images/cloud.jpg";
                    img.alt = "Cloud";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 3) {
                    img.src = "assets/images/tidus.jpg";
                    img.alt = "Tidus";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 4) {
                    img.src = "assets/images/seymour.jpg";
                    img.alt = "Seymour";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 5) {
                    img.src = "assets/images/chocobo.jpg";
                    img.alt = "Chocobo";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 6) {
                    img.src = "assets/images/materia.jpg";
                    img.alt = "Materia";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 7) {
                    img.src = "assets/images/fira.jpg";
                    img.alt = "Fira";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }
                if (nameIndex === 8) {
                    img.src = "assets/images/crystal.jpg";
                    img.alt = "Crystal";
                    src = document.getElementById("pic");
                    src.appendChild(img);
                }

            }

            if (nameIndex === Object.keys(names).length) {
                gameOver.textContent = "Game Over";
            }
            else {
                reset();
                word = names[nameIndex].split("");
                guess = blanks(word);
            }

        }


        //Once again update everything!
        incLetters.textContent = incorrectGuess.join(" ");
        guessChances.textContent = guessCount;
        wordGuess.textContent = guess.join(" ");
        winsText.textContent = wins;
    }


}
