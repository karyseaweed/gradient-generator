let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient");
let btnChange = document.querySelector("#change");
let btnSave = document.querySelector("#save");
let btnClear = document.querySelector("#clear");
let cards = document.querySelector("#cards");

function setCss() {
	return "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

function setGradient() {
	body.style.background = setCss();
	css.textContent = body.style.background;
}

function generateRandomColor() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}

function createColorCard() {
	let card = document.createElement("div");
	card.className = "card";
	card.style.background = setCss();
	let copyBtn = document.createElement("button");
	copyBtn.className = "copyBtn";
	copyBtn.innerHTML = "copy to clipboard";
	copyBtn.addEventListener("click", copyToClipboard);
	card.append(copyBtn);
	cards.append(card);
}

function copyToClipboard() {
	let colorToCopy = this.parentNode.style.background;
	navigator.clipboard.writeText(colorToCopy);
}

function clearBoard() {
	cards.innerHTML = "";
}

// listen to color input event
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// generate random colors
btnChange.addEventListener("click", generateRandomColor);

// save gradient color as a card
btnSave.addEventListener("click", createColorCard);

// clear board
btnClear.addEventListener("click", clearBoard);

