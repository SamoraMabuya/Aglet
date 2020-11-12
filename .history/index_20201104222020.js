const previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState);
playPreview();

function playPreview() {

    if (previews[1].paused) {
        previews[1].play();
    } else {
        previews[1].pause();
    }
}

previews.addEventListener('mouseleave', previewState);
previewState();

function previewState() {
    if (previews[1].play) {
        previews[1].pause();
        // console.log('play')
    } else {
        previews[1].play();
        // alert('not playing');
    }
}