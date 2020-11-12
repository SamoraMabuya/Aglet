alert('connected');
var previews = document.querySelector("#previewOne");


// Pause();
Play();

function Play() {
    previews.play();
}

function Pause() {
    previews[0].pause();
}