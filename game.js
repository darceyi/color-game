var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var squares = document.getElementsByClassName("square");

var pickedColor = colors[3]; //placeholder -- will be random

var colorDisplay = document.getElementById("color-display");

var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor; //placeholder

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i]; //generate square colors
	squares[i].addEventListener("click", function(){ // generate click events for each square
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
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
