const billInput = document.querySelector("#billInput");
const tipImput = document.querySelector("#tipInput");
const peopleImput = document.querySelector("#peopleInput");
const displayTipinput = document.querySelector("#displayTipinput");
const displayTotalinput = document.querySelector("#displayTotalinput");

console.log(display.innerHTML) 
console.log(billInput.value) 

billInput.value = 999.88 

function calulateTip() {
  const billValue = parseFloat(billInput.value);
  const tipValue = parseFloat(tipInput.value);
  const peopleValue = parseFloat(peopleInput.value);

  const tip = (bill * percent) / 100;
  const total = bill + tip / peopleValue;

  displayTip.innerHTML = tip;
}

billInput.addEventListener("input", calculateTip);
tipInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);
