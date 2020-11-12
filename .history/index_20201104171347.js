var previews = document.querySelectorAll(".previews");




previews[1].addEventListener("mouseover", function() {
    previews.play();
})

previews[1].addEventListener("mouseout", function() {
    previews.pause();
})

reviews[1].addEventListener("mouseleave", function() {
            previews.pause();