const btn = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');
const videoContainer = document.querySelector('.trailer-container');
const videoElement =  document.querySelector('video');


btn.addEventListener('click',() => {
  videoContainer.classList.add('active');
})
closeIcon.addEventListener('click' , ()=> {
  videoContainer.classList.remove('active');
  videoElement.pause();
  videoElement.currentTime = 0;
})