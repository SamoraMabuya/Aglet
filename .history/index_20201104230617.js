const previews = document.querySelectorAll('#previews');

previews[0].addEventListener('mouseover', previewState);
playPreview();



function playPreview() {
    playPreview0();
    playPreview1();
}

function playPreview0() {
    if (previews[0].paused) {
        previews[0].play();
    } else {
        previews[0].pause();
    }
}

function playPreview1() {

    if (previews[1].paused) {
        previews[1].play();
    } else {
        previews[1].pause();
    }
}


previews.addEventListener('mouseleave', previewState);
previewState();

function previewState() {
    previewState0();
    previewState1();
}


function previewState0() {
    if (previews[0].play) {
        previews[0].pause();
    } else {
        previews[0].play();
    }
}

function previewState1() {

    if (previews[1].play) {
        previews[1].pause();
    } else {
        previews[1].play();
    }
}