let text=document.getElementById("texts");
let img=document.querySelector(".img");
let image=document.querySelector(".image");

function generate(){
    img.style.display="block";
    image.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;

}