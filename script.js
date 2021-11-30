let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
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
	let label1 = color1.parentNode;
	let label2 = color2.parentNode;
	let body = document.querySelector("#gradient");
	let css = document.querySelector("p");
	// 
	label1.style.background = color1.value;
	label2.style.background = color2.value;
	body.style.background = setCss();
	css.textContent = body.style.background;
}

function generateRandomColor() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
	sessionStorage.clear();
}

function createColorCard() {
	let card = document.createElement("div");
	let copyBtn = document.createElement("button");
	let delBtn = document.createElement("button");
	// 
	card.className = "card";
	card.style.background = setCss();
	// use sessionStorage to check if this color card has already been created
	if (sessionStorage.getItem("color") !== card.style.background) {
		sessionStorage.setItem("color", card.style.background);
		// 
		copyBtn.className = "copyBtn";
		copyBtn.innerHTML = "copy to clipboard";
		copyBtn.addEventListener("click", copyToClipboard);
		// 
		delBtn.className = "delBtn";
		delBtn.innerHTML = '<img src="img/del-x.svg" alt="del button">';
		delBtn.addEventListener("click", delColor);
		// 
		card.append(copyBtn);
		card.append(delBtn);
		cards.append(card);
	}
}

function copyToClipboard() {
	let colorToCopy = this.parentNode.style.background;
	navigator.clipboard.writeText(colorToCopy);
}

function delColor() {
	console.log(this.parentNode);
	this.parentNode.remove();
}

function clearBoard() {
	cards.innerHTML = "";
}

// clear sessionStorage on page reload
(function clearStorage() {
	sessionStorage.clear()
})();

// listen to color input event
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// generate random colors
btnChange.addEventListener("click", generateRandomColor);

// save gradient color as a card
btnSave.addEventListener("click", createColorCard);

// clear board
btnClear.addEventListener("click", clearBoard);

