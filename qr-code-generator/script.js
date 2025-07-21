const imgBox = document.getElementById("imgbox");
const qrImg = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const generateButton = document.getElementById("generate-button");
const container = document.querySelector(".container");


  container.addEventListener('keypress',(st) => {
 if( st.key === "Enter"){
  generateQr();
 }
});

function generateQr(){
  if(qrText.value.trim().length > 0){
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=hellohttps://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + qrText.value;
  imgBox.classList.add("showImg");
  }
  else{
      qrText.classList.add('error');

    setTimeout(() => {
      qrText.classList.remove('error');

    },1000)
  }
}
generateButton.addEventListener("click", generateQr);