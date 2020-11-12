var previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState.false);
playPreview();

asynce = function playPreview() {
    try {
        await previews.play();
        alert("playing")
    } catch (error) {}
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