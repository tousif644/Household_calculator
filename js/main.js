//Global

const expense = document.getElementById("expenses");
const balance = document.getElementById("balance");
const savingAmount = document.getElementById("saved-balance");
const remainingBalance = document.getElementById("remaining-balance");

//taking input from all fields
function checking(item) {
  const input = document.getElementById(item + "-input");
  const inputValue = input.value;
  const parsedValue = parseInt(inputValue);

  if (isNaN(parsedValue)) {
    alert("wrong input");
  } else if (parsedValue < 0) {
    alert("wrong input");
  } else {
    return parsedValue;
  }
}

// Updating Values
function updateValue() {
  var income = checking("income");
  var food = checking("food");
  var rent = checking("rent");
  var cloth = checking("cloth");

  let totalExpenseItems = food + rent + cloth;
  let totalExpenseAmount = income - totalExpenseItems;

  expense.innerText = totalExpenseItems;
  balance.innerText = totalExpenseAmount;

  return totalExpenseAmount;
}

// Saving
function saving() {
  var save = checking("saved");
  var income = checking("income");

  let savedAmount = (income * save) / 100;
  savingAmount.innerText = savedAmount;

  let remainedBalance = income - savedAmount;
  remainingBalance.innerText = remainedBalance;

  // var totalExpenseAmount = updateValue();
  // let remaine = totalExpenseAmount - savedAmount;
  // remainingBalance.innerText = remaine;

  if (remainedBalance == 0) {
    alert("saving is bigger than your remaining Balance");
  }
}

//  Buttons

// Calculate Amount Button
document.getElementById("calc-button").addEventListener("click", function () {
  updateValue();
});

// Saving Amount Button
document.getElementById("saving-button").addEventListener("click", function () {
  saving();
});
