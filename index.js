const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passElement = document.getElementById("passGeneration");
let showPassElOne = document.getElementById("showPassOne");
let showPassElTwo = document.getElementById("showPassTwo");

function randomPass() {
  showPassElOne.textContent = "";
  showPassElTwo.textContent = "";
  for (let i = 0; i < 17; i++) {
    let randomNumOne = Math.floor(Math.random() * characters.length);
    let randomNumTwo = Math.floor(Math.random() * characters.length);
    showPassElOne.textContent += characters[randomNumOne];
    showPassElTwo.textContent += characters[randomNumTwo];
  }
}

function copyDivToClipboardOne() {
  // Get the text from the first password display element
  var text = document.getElementById("showPassOne").textContent;

  // Copy the text to the clipboard
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Password 1 copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

function copyDivToClipboardTwo() {
  // Get the text from the second password display element
  var text = document.getElementById("showPassTwo").textContent;

  // Copy the text to the clipboard
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Password 2 copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
