//create secret number
var secretNumber = 4
Number(guess)

//ask users for guess
var guess = Number(prompt("Pick a number between 1 and 30"))

//check guess
if (guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}

else if (guess > secretNumber) {
	alert("Too high try again.");
}

else {
	alert("Too low try again");
}



