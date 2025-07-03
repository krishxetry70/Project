const billAmount =  document.querySelector('.bill-amount');
const tipPercentage =  document.querySelector('.tip-percentage');
const Button = document.querySelector('.btn');
const total = document.querySelector('.total-amount');

let result = 0;
Button.addEventListener('click',() => {
  result = Number(billAmount.value) * Number(1 + tipPercentage.value/100);
  total.innerHTML = ` $${result.toFixed(2)}`;
})

