// function calculatePrice(item) {
//   // Getting income input
//   const incomeInput = document.getElementById(item + "-input");
//   const incomeInputValue = parseInt(incomeInput.value);

//   // Condition
//   if (isNaN(incomeInputValue) || incomeInputValue < 0) {
//     alert("wrong input");
//   }

//   else if (incomeInputValue > 0) {
//     let foodsAmount = getAmount("food");

//     let rentsAmount = getAmount("rent");
//     let clothsAmount = getAmount("cloths");

//     // Total Balance with { food , rent and cloth}
//     var totalAmount = foodsAmount + rentsAmount + clothsAmount;

//     //Updating Balance
//     document.getElementById("balance").innerText = incomeInputValue - totalAmount;
//     document.getElementById("expenses").innerText = totalAmount;
//     return incomeInputValue;
//   }
// }

// // Calculate Button
// document.getElementById("calc-button").addEventListener("click", function () {
//   calculatePrice("income");
// });

// // Getting { Food , Rent and Cloth } income value

// function getAmount(goods) {
//   const amount = document.getElementById(goods + "-amount").value;
//   const amountValue = parseInt(amount);

//   //Condition
//   if (isNaN(amountValue) || amountValue < 0) {
//     alert('Food rent and cloth will never be a string . Negative will neverrr');
//   } else if (amountValue > 0) {
//     return amountValue;
//   }
// }

// //savings
// function saveAmount() {
//   //Getting income input
//   const incomeInput = document.getElementById("income-input");
//   let incomeInputValue = parseInt(incomeInput.value);

//   //Getting saved amount value
//   const savedAmount = document.getElementById("saved-amount");
//   const savedAmountValue = parseInt(savedAmount.value);

//   // Condition
//   if(isNaN(savedAmountValue) || savedAmountValue < 0){
//     alert('wronggg input why ?')
//   }
//   else if( savedAmountValue > 0){
//   // updating savings value
//   const savings = document.getElementById("savings");

//   // Percentage
//   const savedMoney = incomeInputValue / savedAmountValue;
//   savings.innerText = savedMoney;

//   // updating Remaining and Current Balance
//   const remainingBalance = document.getElementById("remaining-balance");
//   remainingBalance.innerText = incomeInputValue - savedMoney;
//   }
// }

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


  if(isNaN(parsedValue)){
    alert('wrong input')
  }else if( parsedValue < 0){
    alert("wrong input")
  }else{
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
  
  // var totalExpenseAmount = updateValue();
  // let remaine = totalExpenseAmount - savedAmount;
  // remainingBalance.innerText = remaine;
  let remainedBalance = income - savedAmount;
  remainingBalance.innerText = remainedBalance;
 
  if(remainedBalance == 0){
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
