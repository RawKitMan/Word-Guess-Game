function blanks(arr) {
    var blank = [];
    for (var i = 0; i < arr.length; i++) {

        blank.push("_ ");

    }

    return blank;
}


var wins = 0;
var guessCount;
var incorrectGuess;

var instruction = document.getElementById("instructions");
var wordGuess = document.getElementById("word-guess");
var incLetters = document.getElementById("incorrect-letters")
var guessChances = document.getElementById("guess-chance");
var winsText = document.getElementById("win-count");
var gameOver = document.getElementById("game-over");


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

}

var nameIndex = 0;
var word = names[nameIndex].split("");
var guess = blanks(word);


var img = document.createElement("img");

img.src = "assets/images/sephiroth.jpg";
img.alt = "Sephiroth";
var src = document.getElementById("pic");

src.appendChild(img);


wordGuess.textContent = guess.join(" ");
guessChances.textContent = guessCount;
winsText.textContent = wins;

function reset() {
    guessCount = 15;
    incorrectGuess = [];
}

reset();

document.onkeyup = function (event) {


    var userGuess = event.key;
    var guessUpper = userGuess.toUpperCase();

    if (guess.indexOf(guessUpper) === -1 && incorrectGuess.indexOf(" " + guessUpper) === -1) {
        if (word.indexOf(guessUpper) === -1) {
            incorrectGuess.push(" " + guessUpper);
            guessCount--;
        }
        else {
            for (var j = 0; j < guess.length; j++) {
                if (word[j] === guessUpper) {

                    guess[j] = guessUpper;
                }
            }
            guessCount--;

        }
    }

    incLetters.textContent = incorrectGuess;
    guessChances.textContent = guessCount;
    wordGuess.textContent = guess.join(" ");


    if (nameIndex < Object.keys(names).length) {
        if (guess.join("") === names[nameIndex]) {

            wins++;
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
                word = names[nameIndex];
                guess = blanks(word);
            }


        }
    }
    else if (guessCount === 0 && guess.join("") !== names[nameIndex]) {
        nameIndex++;
        if (nameIndex === Object.keys(names).length) {
            gameOver.textContent = "Game Over";
        }
        else {

            continueGame.textContent = "";
            reset();
            word = names[nameIndex];
            guess = blanks(word);


        }
    }


    incLetters.textContent = incorrectGuess.join(" ");
    guessChances.textContent = guessCount;
    wordGuess.textContent = guess.join(" ");
    winsText.textContent = wins;

}