const userInput = document.getElementById("user-input");
const addBtn = document.getElementById("add-btn");
const subBtn = document.getElementById("sub-btn");
const mulBtn = document.getElementById("mul-btn");
const divBtn = document.getElementById("div-btn");
const resetBtn = document.getElementById("reset-btn");

const calcDescription = document.getElementById("calc-description");
const calcOutput = document.getElementById("cal-output");

function output(result, text) {
  calcDescription.textContent = text;
  calcOutput.textContent = result;
}
