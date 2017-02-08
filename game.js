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

colorDisplay.textContent = pickedColor; //placeholder

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i]; //generate square colors
	squares[i].addEventListener("click", function(){ // generate click events for each square
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			alert("correct!");
		} else {
			// squares[i].style.background = "black";
			alert("wrong!");
		}
	});
}
