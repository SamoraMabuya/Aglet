var previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState.false);
playPreview();

function playPreview() {
    previews.play();
}

function pauseState() {
    if (previews.paused) {
        playPreview();
    } else {
        previews.pause();
    }
}