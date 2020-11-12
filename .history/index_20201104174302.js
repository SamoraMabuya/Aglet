var previews = document.querySelectorAll(".previews");


function Play() {
    previews[1].play();

}

function Pause() {}
previews[1].addEventListener("mouseover", function() {
    previews[1].play();
})

previews[1].addEventListener("mouseout", function() {
    previews.pause();
})

reviews[1].addEventListener("mouseleave", function() {
    previews.pause();
});