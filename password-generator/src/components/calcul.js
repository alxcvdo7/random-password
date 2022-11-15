const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Password elements //
let passEl1 = document.getElementById("pass-1")
let passEl2 = document.getElementById("pass-2")
// Choice to add buttons numbers and symbols //
let numberEl = document.getElementById("number-el")
let symbolEl = document.getElementById("symbol-el")

// TO DO put all the classes in the css file and just toggle by class name ***
function toggleButtons(element) {
  if (element.textContent == "YES") {element.classList.remove("green"); element.textContent = "No"}
  else if (element.textContent == "No") {element.classList.add("green"); element.textContent = "YES"}
}

// Function to change color and text choice buttons. //
function choiceButton(btn) {
  btn == "number-el" ? toggleButtons(numberEl) : toggleButtons(symbolEl)
}
// Function to add numbers and symbols. //
function addChars(element, charsList, chars) {
  if (element.textContent == "YES") {charsList.push(...chars)};
}
// Function to obtain password length and alert//
function lengthAlert(e) {
  if (e < 6 || e > 32) {alert("Please choose the length for your password! Between 6 and 32 characters.")}
}





// Function password generator. TRIGGER //
function generatePass() {
  let ev = document.getElementById("length").value;
  lengthAlert(ev)
  let characters = [...letters]
  if (ev > 5 && ev < 33) {
    addChars(numberEl, characters, numbers)
    addChars(symbolEl, characters, symbols)
    passEl1.textContent = randomPassword(characters, ev)
    passEl2.textContent = randomPassword(characters, ev)
  }
  characters = []
  return characters
}

// Function that creates the pass //
function randomPassword(chars, lenghtVal) {
  passwordgen = []
  for (let i = 0; i < lenghtVal; i++) {
    let randompass = (chars[(Math.floor(Math.random() * chars.length))])
    passwordgen += randompass
  }
  return passwordgen
}

// Function to copy paste the code when clicked //
function copyBtn(btnId) {
  let password
  btnId == "btn-copy1" ? password = "pass-1" : password = "pass-2"
  navigator.clipboard.writeText(document.getElementById(password).textContent);
  // console.log("copied", password)
}
