const previews = document.querySelectorAll('#previews');

previews.addEventListener('mouseover', previewState);
playPreview();

function playPreview() {

    if (previews[0].paused) {
        previews[0].play();

    } else if (previews[1].paused) {
        previews[1].play();

    }


    previews.addEventListener('mouseleave', previewState);
    previewState();

    function previewState() {
        if (previews[0].play) {
            previews[0].pause();
        } else {
            previews[0].play();
        }
    }
    if (previews[1].play) {
        previews[1].pause();
    } else {
        previews[1].play();
    }