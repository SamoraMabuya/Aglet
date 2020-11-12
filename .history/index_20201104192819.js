var previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState.false);
playPreview();

function playPreview() {
    previews.play();
}

function previewState() {
    if (previews.paused) {
        playPreview();
    } else {
        previews.pause();
    }
}