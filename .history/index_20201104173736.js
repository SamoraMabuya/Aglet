var previews = document.querySelectorAll(".previews");


Pause();
Play();

function Play() {
    if (previews[0].paused)
        previews[0].play();
}

function Pause() {
    previews[0].pause();
}