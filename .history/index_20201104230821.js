const previews = document.querySelectorAll('#previews');

previews[0].addEventListener('mouseover', previewState);
playPreview();

function playPreview() {

    if (previews[0].paused) {
        previews[0].play();
    } else {
        previews[0].pause();
    }

}

previews[0].addEventListener('mouseleave', previewState);
previewState();

function previewState() {
    if (previews[0].play) {
        previews[0].pause();
    } else {
        previews[0].play();
    }
}