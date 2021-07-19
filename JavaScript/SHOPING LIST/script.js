var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	var doneButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.setAttribute("id", "del");
	doneButton.appendChild(document.createTextNode("Done"));
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(div);
	div.appendChild(li);
	div.appendChild(doneButton);
	div.appendChild(deleteButton);
	input.value = "";
	deleteButton.onclick = removeParent;
	doneButton.onclick = crossParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "li"){
		task.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function removeParent(event){
	event.target.parentNode.remove();
} 

function crossParent(event){
	event.target.parentNode.classList.toggle("done");
}

