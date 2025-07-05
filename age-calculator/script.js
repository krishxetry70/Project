const inputElement = document.querySelector(".date");
const buttonElement = document.querySelector(".calculate-age");
const display = document.querySelector(".display");

buttonElement.addEventListener("click", () => {
  calculateAge();
});

function calculateAge() {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth();
  month++;
  if(inputElement.value === ''){
    alert('Please enter your birthday');
  display.innerHTML = ``;
  }
  else{
  const date = new Date(inputElement.value);
  let birthdayMonth = date.getMonth();
  birthdayMonth++;
 
  const birthday = date.getFullYear();
  
  let age = year - birthday;
   if(month === birthdayMonth || month > birthdayMonth) {
  display.innerHTML = `Your age is ${age} years old`;
  display.innerHTML = `Your age is ${age} ${age > 1 ? "years": "year"} old`;

  }
  else{
    age --;
  display.innerHTML = `Your age is ${age} ${age > 1 ? "years": "year"} old`;
  }
  }
}
