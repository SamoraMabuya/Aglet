playvideo();

function playvideo() {
    let previews = document.querySelectorAll('.previews');

    previews[1].addEventListener("mouseover", function() {
        this.play();
    })
}