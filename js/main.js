function calculatePrice(item) {
  // Getting income input
  const incomeInput = document.getElementById(item + "-input");
  const incomeInputValue = parseInt(incomeInput.value);

  // Condition
  if (isNaN(incomeInputValue) || incomeInputValue < 0) {
    alert("wrong input");
  } 
  
  else if (incomeInputValue > 0) {
    let foodsAmount = getAmount("food");
    let rentsAmount = getAmount("rent");
    let clothsAmount = getAmount("cloths");

    // Total Balance with { food , rent and cloth}
    var totalAmount = foodsAmount + rentsAmount + clothsAmount;

    //Updating Balance 
    document.getElementById("balance").innerText = incomeInputValue - totalAmount;
    document.getElementById("expenses").innerText = totalAmount;
    return incomeInputValue;
  }
}

// Calculate Button
document.getElementById("calc-button").addEventListener("click", function () {
  calculatePrice("income");
});

// Getting { Food , Rent and Cloth } income value

function getAmount(goods) {
  const amount = document.getElementById(goods + "-amount").value;
  const amountValue = parseInt(amount);

  //Condition
  if (isNaN(amountValue) || amountValue < 0) {
    alert('Food rent and cloth will never be a string . Negative will neverrr');
  } else if (amountValue > 0) {
    return amountValue;
  }
}

//savings
function saveAmount() {
  //Getting income input
  const incomeInput = document.getElementById("income-input");
  let incomeInputValue = parseInt(incomeInput.value);

  //Getting saved amount value
  const savedAmount = document.getElementById("saved-amount");
  const savedAmountValue = parseInt(savedAmount.value);

  // Condition
  if(isNaN(savedAmountValue) || savedAmountValue < 0){
    alert('wronggg input why ?')
  }
  else if( savedAmountValue > 0){
  // updating savings value
  const savings = document.getElementById("savings");

  // Percentage 
  const savedMoney = incomeInputValue / savedAmountValue;
  savings.innerText = savedMoney;

  // updating Remaining and Current Balance
  const remainingBalance = document.getElementById("remaining-balance");
  remainingBalance.innerText = incomeInputValue - savedMoney;
  }
}
