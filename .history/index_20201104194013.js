var previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState);
playPreview();

async function playPreview() {
    try {
        await previews.play();
        alert("playing")
    } catch (error) {

    }
}

function previewState() {
    if (previews.paused) {
        playPreview();
        console.log('play')
    } else {
        previews.stop();
        alert('not playing');
    }
}