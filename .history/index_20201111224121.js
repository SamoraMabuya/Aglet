const previews = document.querySelectorAll('#previews');
const box = document.querySelectorAll('#previews');

previews[0].addEventListener('mouseover', previewState);
playPreview();


function playPreview() {
    if (previews[0].paused) {
        previews[0].play();
        for (let i = 1; i <= 3; i++) box[i].classList.add('darken');
        // box[1].classList.add('darken');
        // box[2].classList.add('darken');
        // box[3].classList.add('darken');

    }
}
previews[0].addEventListener('mouseleave', previewState);
previewState();

function previewState() {
    if (previews[0].play) {
        previews[0].pause();

        // box[1].classList.remove('darken');
        // box[2].classList.remove('darken');


    }
}


previews[1].addEventListener('mouseover', previewState1);
playPreview1();

function playPreview1() {
    if (previews[1].paused) {
        previews[1].play();


    }
}

previews[1].addEventListener('mouseleave', previewState1);
previewState1();


function previewState1() {
    if (previews[1].play) {
        previews[1].pause();

    }
}

previews[2].addEventListener('mouseover', previewState2);
playPreview2();

function playPreview2() {
    if (previews[2].paused) {
        previews[2].play();
        for (let i = 1; i <= 3; i++) box[i].classList.add('darken');
    }
}

previews[2].addEventListener('mouseleave', previewState2);
previewState2();

function previewState2() {
    if (previews[2].play) {}
}
previews[2].pause();


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

previews[5].addEventListener('mouseover', previewState5);
playPreview5();

function playPreview5() {
    if (previews[5].paused) {
        previews[5].play();
    } else {
        previews[5].pause();
    }
}
previews[5].addEventListener('mouseleave', previewState5);
previewState5();

function previewState5() {
    if (previews[5].play) {
        previews[5].pause();
    } else {
        previews[5].play();
    }
}

// ---


previews[6].addEventListener('mouseover', previewState6);
playPreview6();

function playPreview6() {
    if (previews[6].paused) {
        previews[6].play();
    } else {
        previews[6].pause();
    }
}
previews[6].addEventListener('mouseleave', previewState6);
previewState6();

function previewState6() {
    if (previews[6].play) {
        previews[6].pause();
    } else {
        previews[6].play();
    }
}

// ---


previews[7].addEventListener('mouseover', previewState7);
playPreview7();

function playPreview7() {
    if (previews[7].paused) {
        previews[7].play();
    } else {
        previews[7].pause();
    }
}
previews[7].addEventListener('mouseleave', previewState7);
previewState7();

function previewState7() {
    if (previews[7].play) {
        previews[7].pause();
    } else {
        previews[7].play();
    }
}

// ---

previews[8].addEventListener('mouseover', previewState8);
playPreview8();

function playPreview8() {
    if (previews[8].paused) {
        previews[8].play();
    } else {
        previews[8].pause();
    }
}
previews[8].addEventListener('mouseleave', previewState8);
previewState8();

function previewState8() {
    if (previews[8].play) {
        previews[8].pause();
    } else {
        previews[8].play();
    }
}


// ---

previews[9].addEventListener('mouseover', previewState9);
playPreview9();

function playPreview9() {
    if (previews[9].paused) {
        previews[9].play();
    } else {
        previews[9].pause();
    }
}
previews[9].addEventListener('mouseleave', previewState9);
previewState9();

function previewState9() {
    if (previews[9].play) {
        previews[9].pause();
    } else {
        previews[9].play();
    }
}


// ---

previews[10].addEventListener('mouseover', previewState10);
playPreview10();

function playPreview10() {
    if (previews[10].paused) {
        previews[10].play();
    } else {
        previews[10].pause();
    }
}
previews[10].addEventListener('mouseleave', previewState10);
previewState10();

function previewState10() {
    if (previews[10].play) {
        previews[10].pause();
    } else {
        previews[10].play();
    }
}

// ---

previews[11].addEventListener('mouseover', previewState11);
playPreview11();

function playPreview11() {
    if (previews[11].paused) {
        previews[11].play();
    } else {
        previews[11].pause();
    }
}
previews[11].addEventListener('mouseleave', previewState11);
previewState11();

function previewState11() {
    if (previews[11].play) {
        previews[11].pause();
    } else {
        previews[11].play();
    }
}

const slidesbox = document.querySelector('.wrapper');
slidesbox.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        slidesbox.scrollLeft += 100;
    } else {
        slidesbox.scrollLeft -= 100;
    }
})

function revealSlider() {
    const navIcon = document.querySelector('.icon');
    const navWindow = document.querySelector('.nav-links');

    navIcon.addEventListener('click', function() {
        navWindow.classList.add('reveal');
        navWindow.classList.remove('hide');

    })
}

revealSlider();

function hideSlider() {
    const close = document.querySelector('.close');
    const navWindow = document.querySelector('.nav-links');

    close.addEventListener('click', function() {
        navWindow.classList.add('hide');
        navWindow.classList.remove('reveal');


    })
}

hideSlider();
var navLinks = document.getElementById("navbarNav");

// Get all buttons with class="btn" inside the container
var item = navLinks.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}