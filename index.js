// Dé gauche
var rdm = Math.random();
var randomNumber1 = Math.floor((rdm * 6) + 1);

document.getElementsByClassName("dice")[0].querySelector("img").setAttribute("src", "images/dice" + randomNumber1+".png");

// Dé droit
var rdm = Math.random();
var randomNumber2 = Math.floor((rdm * 6) + 1);

document.getElementsByClassName("dice")[1].querySelector("img").setAttribute("src", "images/dice" + randomNumber2 +".png");

// Déterminer gagnant
var winner = "";
if (randomNumber1 > randomNumber2) {
    winner = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    winner = "Player 2 Wins🚩";
}
else {
    winner = "It's a tie 🏳";
}

// Titre
document.querySelector("h1").textContent = winner;