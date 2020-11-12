const previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState);
playPreview();

function playPreview() {

    if (previews.paused) {
        previews.play();

    }
}

previews.addEventListener('mouseleave', previewState);
previewState();

function previewState() {
    if (previews.play) {
        preview.pause();
    }
}