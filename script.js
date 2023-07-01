let inputSlider = document.querySelector("#inputslider");
let sliderValue = document.querySelector("#slidervalue");
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

let inputBox = document.querySelector("#inputpassbox");
let lowerCase = document.querySelector("#lowerCase");
let upperCase = document.querySelector("#upperCase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let btn = document.querySelector("#btn");
let bardiv = document.querySelector("#bardiv");
let bar = document.querySelector(".bar");

btn.addEventListener("click", () => {
  inputBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~$%^&*";

function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowerCase.checked ? lowerChars : "";

  allChars += upperCase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";
  //allChars += upperCase.Checked ? upperChars : "";
  // allChars += numbers.Checked ? allNumbers : "";
  // allChars += symbols.Checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }
  let i = 1;
  while (i <= inputSlider.value) {
    // genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  console.log(genPassword);

  return genPassword;
}
