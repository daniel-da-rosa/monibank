const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const video = document.querySelector("[data-video]");
const campoCamera = document.querySelector("[data-camera]");

botaoIniciarCamera.addEventListener('click',async function(){
    let tirarfoto = await navigator.mediaDevices.getUserMedia({video:true,audio:false})

    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.scrObject = tirarfoto;
})