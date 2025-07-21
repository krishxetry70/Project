
debugger
const hoursElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minute");
const secondsElement = document.querySelector(".seconds");

function updateClock(){
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hourDegree = (hour / 12) * 360;
  hoursElement.style.transform = `rotate(${hourDegree}deg)`;
    const minuteDegree = (minute / 60) * 360;
  minuteElement.style.transform = `rotate(${minuteDegree}deg)`
    const secondDegree = (seconds / 60) * 360;
  secondsElement.style.transform = `rotate(${secondDegree}deg)`;
}


setInterval(updateClock, 1000);