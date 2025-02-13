var randomNumber1 = Math.floor(Math.random()* 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 =  "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Determine the winner and display the result
var resultText = "";
if (randomNumber1 > randomNumber2) {
    resultText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    resultText = "Player 2 Wins!";
} else {
    resultText = "It's a Draw!";
}

document.querySelector("h1").textContent = resultText;