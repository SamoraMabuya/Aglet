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

previews.addEventListener('mouseleave', previewState);
previewState();

function previewState() {
    if (previews[0].play) {
        previews[0].pause();
        // console.log('play')
    } else {
        previews[0].play();
        // alert('not playing');
    }
}