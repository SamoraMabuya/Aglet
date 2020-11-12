var previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState.false);
playPreview();

function playPreview() {
    previews.play();
}

function pausePreview() {
    if (previews.paused) {
        playPreview();
    } else {
        playPreview.pause();
    }
}