const dayElement = document.getElementById('day');
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

console.log(dayElement,hourElement,minuteElement,secondElement);

const newYearTime = new Date("jan 1 , 2026 00:00:00").getTime();

setInterval(updateCountDown,1000);

function updateCountDown(){
  const now = new Date().getTime();
  const gap = newYearTime - now;
  
  const second = 1000;
  const minute = second * 60;;
  const hour = minute * 60;
  const day = hour * 24;

  const d  = Math.floor(gap/day);
  const h  = Math.floor((gap % day)/hour);
  const m  = Math.floor((gap % hour) /minute);
  const s  = Math.floor((gap % minute) / second);
  dayElement.innerText = d;  
  hourElement.innerText = h;
  minuteElement.innerText =m;
  secondElement.innerText = s;
}