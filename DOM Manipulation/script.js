var button = document.getElementById("enter");
var userInput = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

liEvent();
//changeClass();

function checkUserInput() {
  return userInput.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  userInput.value = "";
}

function afterButtonClick() {
  if (checkUserInput() > 0) {
    createListElement();
  }
}

function afterKeyPress(event) {
  if (checkUserInput() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function liEvent() {
  for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", changeClass);
  }
}

function changeClass() {
  //   console.log(li[i].value);
  this.classlist.toggle("done");
}

button.addEventListener("click", afterButtonClick);

userInput.addEventListener("keypress", afterKeyPress);
