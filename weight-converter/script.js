const inputElement = document.querySelector('.input');
const errorElement = document.querySelector('.error');

let errorTime;
let resultTime;


inputElement.addEventListener('input',keydown);
function keydown() {
  const pound = inputElement.value;

  if(pound <= 0 || isNaN(pound)){
  errorElement.innerHTML = 'Please enter a valid number';
  clearTimeout(errorTime);
  errorTime = setTimeout(() =>{
    errorElement.innerHTML = '';
    inputElement.value = '';
  },2000)
  }
else{
  const kg = pound * 0.4535924;
  document.querySelector('.displayInKg').innerHTML = kg.toFixed(2);
  clearTimeout(resultTime);
  resultTime = setTimeout(() => {
      document.querySelector('.displayInKg').innerHTML = "";
      inputElement.value = '';

  },10000)
}
}