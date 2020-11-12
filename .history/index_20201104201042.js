const previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState);
playPreview();

function playPreview() {
    previews.play();
    // alert("playing");

}
previews.addEventListener('mouseleave', previewState);
previewState();

function previewState() {
    if (previews.paused) {
        playPreview();
        // console.log('play')
    } else {
        previews.pause();
        // alert('not playing');
    }
}