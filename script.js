//define array of possible characters
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

//define main DOM variables
let passwordOutput1 = document.getElementById("passwordOutput1");
let passwordOutput2 = document.getElementById("passwordOutput2");
let generateButton = document.getElementById("generateButton");

//define slider variables
let sliderRange = document.getElementById("sliderRange");
let sliderNumber = document.getElementById("sliderNumber");

//set starting slider value defined in html
sliderNumber.textContent = sliderRange.value;

//update the sliderNumber value when sliderRange is changed
sliderRange.oninput = function () {
  sliderNumber.textContent = this.value;
};

//when the button is clicked, call the function for each output box
generateButton.addEventListener("click", function () {
  passwordOutput1.textContent = passwordGen();
  passwordOutput2.textContent = passwordGen();
});

//define function to generate a random character password of length 15
function passwordGen() {
  //define an empty array to catch results from the for loop, this is reinitialized to empty each time the passwordGen function is called
  let passwordArray = [];

  //iterate 15 times to generate a 15 character password
  for (let i = 0; i < 15; i++) {
    //grab a random index from the characters array
    let randomCharacterIndex = Math.floor(Math.random() * characters.length);

    //grab the character at the random index
    let randomCharacter = characters[randomCharacterIndex];

    //push the random index onto the passwordArray
    passwordArray.push(randomCharacter);
  }
  //join the passwordArray with no whitespace to create one final string
  let password = passwordArray.join("");

  //return the password string
  return password;
}
