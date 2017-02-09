var colors = generateRandomColors(6);

var squares = document.getElementsByClassName("square");

//pick random color
var pickedColor = pickColor();

var colorDisplay = document.getElementById("color-display");

var messageDisplay = document.getElementById("message");

var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");

colorDisplay.textContent = pickedColor; //placeholder

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(6);
	// pick a new random color from array
	pickedColor = pickColor();
	//chnage color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares on page
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
	resetButton.textContent = "New Color";
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i]; //generate square colors
	squares[i].addEventListener("click", function(){ // generate click events for each square
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = pickedColor;
		} else {
			// squares[i].style.background = "black";
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop thry all squares
	for(var i = 0; i < squares.length; i++){
	//chnage each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//arepeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that arreay
	return arr
}

function randomColor(){
	//pick red from 0-255
	var red = Math.floor(Math.random() * 256);
	// pick green
	var green = Math.floor(Math.random() * 256);
		//pick blue
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}