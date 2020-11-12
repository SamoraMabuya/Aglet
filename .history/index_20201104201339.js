const previews = document.getElementById('previews');

previews.addEventListener('mouseover', previewState);
playPreview();

function playPreview() {

    if (previews.paused) {
        previews.play();
    } else {
        previews.pause();
    }

    previews.addEventListener('mouseleave', previewState);
    previewState();

    function previewState() {
        if (previews.play) {
            preview.pause();
            // console.log('play')
        } else {
            previews.play();
            // alert('not playing');
        }
    }