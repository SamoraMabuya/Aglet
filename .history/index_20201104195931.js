const previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState);
playPreview();

function playPreview() {
    previews.play();
    alert("playing")

}

function previewState() {
    if (previews.paused) {
        playPreview();
        console.log('play')
    } else {
        previews.pause();
        alert('not playing');
    }
}