const buttons = document.querySelectorAll('button');
const inputElement = document.querySelector('#result');
const equalToButton = document.getElementsByClassName('equalTo');

let result = '';
for(let i= 0; i<buttons.length; i++){

  buttons[i].addEventListener('click' ,() => {
    const value = buttons[i].innerText;
    if(value=== 'C'){
      clearDisplay();
    }
   else if(value === '='){
      calculateResult();
    }
    else{
      appendValue(value);
    }
    })
  }

function clearDisplay() {
  inputElement.value = '';
}


function calculateResult(){
   inputElement.value = eval(inputElement.value);
}
function appendValue(value){
      inputElement.value += value
}