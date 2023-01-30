
let clicks = 0;

function buttonClicked() {
	clicks ++;
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = "Number of times button clicked: " + clicks
}
