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



previews[1].addEventListener('mouseover', previewState1);
playPreview1();

function playPreview1() {
    if (previews[1].paused) {
        previews[1].play();
    } else {
        previews[1].pause();
    }
}
previews[1].addEventListener('mouseleave', previewState1);
previewState1();

function previewState1() {
    if (previews[1].play) {
        previews[1].pause();
    } else {
        previews[1].play();
    }
}


previews[2].addEventListener('mouseover', previewState2);
playPreview2();

function playPreview2() {
    if (previews[2].paused) {
        previews[2].play();
    } else {
        previews[2].pause();
    }
}
previews[2].addEventListener('mouseleave', previewState2);
previewState2();

function previewState2() {
    if (previews[2].play) {
        previews[2].pause();
    } else {
        previews[2].play();
    }
}

previews[3].addEventListener('mouseover', previewState3);
playPreview3();

function playPreview3() {
    if (previews[3].paused) {
        previews[3].play();
    } else {
        previews[3].pause();
    }
}
previews[3].addEventListener('mouseleave', previewState3);
previewState3();

function previewState3() {
    if (previews[3].play) {
        previews[3].pause();
    } else {
        previews[3].play();
    }
}


previews[4].addEventListener('mouseover', previewState4);
playPreview4();

function playPreview4() {
    if (previews[4].paused) {
        previews[4].play();
    } else {
        previews[4].pause();
    }
}
previews[4].addEventListener('mouseleave', previewState4);
previewState4();

function previewState4() {
    if (previews[4].play) {
        previews[4].pause();
    } else {
        previews[4].play();
    }
}