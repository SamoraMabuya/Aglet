playvideo();

function playvideo() {
    let previews = document.querySelector('#video1');

    previews[1].addEventListener("mouseover", function() {
        this.play();
    })
}